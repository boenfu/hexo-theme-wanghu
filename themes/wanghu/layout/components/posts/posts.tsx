import { Locals } from "hexo";
import React, { FC } from "react";
import styled from "styled-components";
import { Item } from "./@item";

const Wrapper = styled.div`
  section + section {
    border-top: 1px solid #ebebeb;
  }
`;

export const Posts: FC<{
  posts: Locals.Post[];
}> = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post, index) => (
        <Item key={post.path} index={index + 1} post={post} />
      ))}
    </Wrapper>
  );
};
