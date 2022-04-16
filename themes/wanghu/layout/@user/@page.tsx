import { Locals } from "hexo";
import React, { FC } from "react";
import styled from "styled-components";
import { Comments, Markdown } from "../components";

const Placeholder = styled.div`
  font-size: 13px;
  color: #8590a6;
  text-align: center;
  padding: 48px;
`;

export const MarkdownPage: FC<{
  hexo: HexoComponentProps;
  file: string;
  placeholder: string;
}> = ({ file, placeholder, hexo }) => {
  const { page } = hexo;

  let content = (
    page.posts
      .filter((post: Locals.Post) => post.source.startsWith(`_posts/${file}`))
      .toArray()?.[0] as Locals.Post | undefined
  )?.content;

  return (
    <>
      {content ? (
        <Markdown
          style={{
            padding: "16px 20px",
          }}
          content={content}
        />
      ) : (
        <Placeholder>{placeholder}</Placeholder>
      )}

      <Comments
        style={{
          padding: "16px 20px",
        }}
        hexo={hexo}
      />
    </>
  );
};
