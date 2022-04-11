import { Locals } from "hexo";
import React, { FC } from "react";
import styled from "styled-components";
import { Item } from "./@item";

const Wrapper = styled.div``;

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
