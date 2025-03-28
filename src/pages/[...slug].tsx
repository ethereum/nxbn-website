import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { ReactNode } from "react"

import remarkGfm from "remark-gfm"
import { join } from "path"

import { CookieLayout } from "@/layouts/CookieLayout"
import { FellowLayout } from "@/layouts/FellowLayout"

import MdComponents from "@/components/Md/MdComponents"

import { getContentPaths } from "@/utils/getContentPaths"
import { getAllFellowsFrontmatter, getContentBySlug } from "@/utils/md"
import rehypeHeadingIds from "@/utils/rehypeHeadingIds"
import rehypeImg from "@/utils/rehypeImg"
import remarkInferToc from "@/utils/remarkInferToc"
import { remapTableOfContents } from "@/utils/toc"

export const layoutMapping = {
  fellow: FellowLayout,
  cookie: CookieLayout,
}

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

export const getStaticPaths = () => {
  const paths = getContentPaths("/")

  return { paths: paths, fallback: true }
}

export const getStaticProps = async (context) => {
  const slug = `/${context.params.slug.join("/")}/`
  const markdown = getContentBySlug(slug)
  const allFellowsFrontmatter = getAllFellowsFrontmatter()

  let tocNodeItems = []
  const tocCallback = (toc): void => {
    tocNodeItems = "items" in toc ? toc.items : []
  }

  const mdPath = join("/content", slug)
  const mdDir = join("public", mdPath)

  // Explicitly define the plugins with their types
  const remarkPlugins: any[] = [
    remarkGfm,
    [remarkInferToc, { callback: tocCallback }],
  ]
  const rehypePlugins: any[] = [
    [rehypeImg, { dir: mdDir, srcPath: mdPath }],
    rehypeHeadingIds,
  ]

  const mdxSource = await serialize(markdown.content, {
    mdxOptions: {
      remarkPlugins,
      rehypePlugins,
    },
  })

  // Process bio field if it exists in frontmatter
  let bioSource: MDXRemoteSerializeResult | null = null;
  if (markdown.frontmatter.bio) {
    bioSource = await serialize(markdown.frontmatter.bio, {
      mdxOptions: {
        remarkPlugins,
        rehypePlugins,
      },
    });
  }

  let tocItems = remapTableOfContents(tocNodeItems, mdxSource.compiledSource)
  
  // Ensure tocItems is a valid array with no undefined values
  tocItems = Array.isArray(tocItems) ? tocItems.filter(item => item && item.title) : []

  return {
    props: {
      frontmatter: {
        ...markdown.frontmatter,
        bioSource
      },
      layout: markdown.frontmatter.layout,
      mdxSource,
      slug,
      tocItems,
      allFellowsFrontmatter,
    },
  }
}

const ContentPage = ({ mdxSource }: Props) => {
  return <MDXRemote {...mdxSource} components={MdComponents as any} />
}

ContentPage.getLayout = (page) => {
  const { slug, frontmatter, layout, tocItems, allFellowsFrontmatter } =
    page.props
  const layoutProps = {
    slug,
    frontmatter,
    tocItems,
    allFellowsFrontmatter,
  }
  const Layout = layoutMapping[layout]

  return layout ? <Layout {...layoutProps}>{page}</Layout> : <></>
}

export default ContentPage
