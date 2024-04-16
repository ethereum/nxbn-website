import fs from "fs"
import { join } from "path"

import matter from "gray-matter"

import { CONTENT_DIR } from "@/utils/constants"

export const getAllFellowsFrontmatter = () => {
  const fullPath = join(process.cwd(), CONTENT_DIR, "fellowship")
  const slugs = fs.readdirSync(fullPath)
  const allFellowsFrontmatter = slugs.map((slug) => {
    const fullPath = join(
      process.cwd(),
      CONTENT_DIR,
      "fellowship",
      slug,
      "index.md"
    )
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    return {
      slug: slug,
      ...data,
    }
  })

  allFellowsFrontmatter.sort((a: any, b: any) => {
    return a.index - b.index
  })

  return allFellowsFrontmatter
}

export const getContentBySlug = (slug: string) => {
  const fullPath = join(process.cwd(), CONTENT_DIR, slug, "index.md")
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    frontmatter: data,
  }
}
