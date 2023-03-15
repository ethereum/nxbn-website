import React from 'react';
import { Center, H2 } from "./SharedStyledComponents"
import styled from "styled-components"
import { screenSizeIntM } from '../utils/styles';

const BlogContainer = styled.div`
  width: min(1200px, 100%);
  padding: 0px 32px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${screenSizeIntM}px) {
    grid-template-columns: 1fr;
  }
`

const BlogPost = styled.a`
  position: relative;

  &:hover {
    p {
      &:first-of-type {
        text-decoration: underline;
      }
    }
  }
`;

const Image = styled.img`
  border-radius: 10px;
  margin-bottom: 8px;
  object-fit: cover;
  aspect-ratio: 400 / 200;
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
            <BlogPost href={blog.permaLink} key={blog.id}>
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