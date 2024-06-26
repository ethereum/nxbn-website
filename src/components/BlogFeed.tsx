import { Box, Grid, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"

import { H3 } from "@/components/Headings"
import Link from "./Link"

const BlogFeed = ({ blogs }) => {
  const router = useRouter()

  return (
    <Grid
      gap={20}
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
          <Box
            key={blog.link}
            onClick={() => router.replace(blog.link)}
            cursor="pointer"
            borderRadius={4}
            border="1px solid transparent"
            p={4}
            _hover={{
              bg: "#00000010",
            }}
          >
            <H3 mb={0}>{blog.title}</H3>
            <Text
              variant="action"
              fontStyle="normal"
              fontWeight="300"
              lineHeight="150%"
              mb={4}
              mt={1}
              color="bodyHover"
            >
              {formattedDate}
            </Text>
            <Text mb={0} fontSize={18}>
              {blog.contentSnippet}
            </Text>
            <Link href={blog.link} textStyle="link-text-action" mt={4}>
              Read more
            </Link>
          </Box>
        )
      })}
    </Grid>
  )
}
export default BlogFeed
