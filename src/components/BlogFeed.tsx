import { Box, Flex, Grid, Text } from "@chakra-ui/react"

import { H3 } from "@/components/Headings"

const BlogFeed = ({ blogs }) => {
  return (
    <Grid
      gap={24}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
    >
      {blogs.map((blog) => {
        const date = new Date(blog.isoDate)

        const formattedDate = date.toLocaleDateString("en-US", {
          month: "long", // full name of the month
          day: "numeric", // numeric day
          year: "numeric", // numeric year
        })
        return (
          <Box key={blog.link}>
            <H3 mb={0}>{blog.title}</H3>
            <Text
              variant="action"
              fontSize={14}
              fontStyle="normal"
              fontWeight="300"
              lineHeight="150%"
              mb={2}
            >
              {formattedDate}
            </Text>
            <Text mb={0}>{blog.contentSnippet}</Text>
          </Box>
        )
      })}
    </Grid>
  )
}
export default BlogFeed
