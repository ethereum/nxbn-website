import fs from "fs"
import { join } from "path"

import matter from "gray-matter"

import { CONTENT_DIR } from "@/utils/constants"

export const getFellowsWithStories = () => {
  const allFellows = getAllFellowsFrontmatter();

  // Process fellows to get story content
  const fellowsWithStories = allFellows.map(fellow => {
    try {
      const fullPath = join(
        process.cwd(),
        CONTENT_DIR,
        "fellowship",
        fellow.slug,
        "index.md"
      );
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { content } = matter(fileContents);

      // Get first paragraph or first 200 characters as excerpt
      let excerpt = "";
      if (content) {
        // Find the first paragraph after frontmatter
        const paragraphs = content.split('\n\n');

        // Skip any heading paragraphs (starting with #)
        const contentParagraph = paragraphs.find(p =>
          p.trim() && !p.trim().startsWith('#')
        ) || paragraphs[0];

        // Create excerpt
        excerpt = contentParagraph?.substring(0, 200);
        if (contentParagraph?.length > 200) excerpt += "...";
      }

      return {
        ...fellow,
        hasStory: content?.trim().length > 0,
        storyExcerpt: excerpt
      };
    } catch (e) {
      return {
        ...fellow,
        hasStory: false,
        storyExcerpt: ""
      };
    }
  });

  // Filter to only fellows with stories that have publishedDate and storyHook
  return fellowsWithStories.filter(fellow => 
    fellow.hasStory && (fellow as any).publishedDate && (fellow as any).storyHook
  );
}

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
