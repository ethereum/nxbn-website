import React from 'react';
import { Center, H2 } from "./SharedStyledComponents"
import styled from "styled-components"

const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: min(700px, 100%);
  padding: 0px 32px;
  overflow: hidden;
`

const BlogPost = styled.div`
  flex-basis: 400px;
  flex-shrink: 1;
  margin-bottom: 12px;
`;

const Image = styled.img`
  border-radius: 10px;
  margin-bottom: 8px;
`;

const PostTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  margin-bottom: 4px;
`

const PostDate = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 160%;
  color: #9C9C9C;
`

const PostDescription = styled.p`
  font-size: 14px;
  line-height: 160%;
  color: #37374D;
`

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


const BlogPosts = (props) => {
  return (
    <Center>
      <H2 id="contact">Our Blog</H2>

      <BlogContainer>
        {props.posts.map(blog => {
          const date = new Date(blog.date);
          const day = date.getUTCDate();
          const year = date.getUTCFullYear();
          const monthName = monthNames[date.getMonth()]

          return (
            <BlogPost key={blog.id}>
              <Image src={blog.imageUrl} alt={`Blog post image for post titled ${blog.title}`} />
              <PostTitle>{blog.title}</PostTitle>
              <PostDate>{monthName} {day}, {year}</PostDate>
              <PostDescription>{blog.description}</PostDescription>
            </BlogPost>
          );
        })}
      </BlogContainer>
    </Center>
  )
}

export default BlogPosts