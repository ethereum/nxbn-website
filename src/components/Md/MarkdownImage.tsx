import { extname } from "path"

import { Flex, Image } from "@chakra-ui/react"

import { toPosixPath } from "@/utils/relativePath"

import { MARKDOWN_CONTENT_MAX_WIDTH } from "@/utils/constants"
import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

interface MarkdownImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  width: string
  height: string
  aspectRatio?: string
}

const MarkdownImage = ({
  width,
  height,
  aspectRatio = "1 / 1",
  alt = "",
  src,
  ...rest
}: MarkdownImageProps) => {
  const imageAspectRatio = parseFloat(aspectRatio)
  let imageWidth = parseFloat(width)
  let imageHeight = parseFloat(height)

  // Ensure that src path has forward slashes only, to avoid issues with Windows filepaths
  const transformedSrc = toPosixPath(src!.toString())

  // keep the size of the images proportional to the max width constraint
  if (imageWidth > MARKDOWN_CONTENT_MAX_WIDTH) {
    imageWidth = MARKDOWN_CONTENT_MAX_WIDTH
    imageHeight = MARKDOWN_CONTENT_MAX_WIDTH / imageAspectRatio
  }

  const fileExt = extname(transformedSrc).toLowerCase()
  const isAnimated = [".gif", ".apng", ".webp"].includes(fileExt)

  return (
    // display the wrapper as a `span` to avoid dom nesting warnings as mdx
    // sometimes wraps images in `p` tags
    <Flex as="span" justify="center">
      <Image
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        src={transformedSrc}
        h="auto"
        {...rest}
      />
    </Flex>
  )
}

export default MarkdownImage
