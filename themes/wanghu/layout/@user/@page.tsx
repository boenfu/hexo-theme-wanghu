import { Locals } from "hexo";
import React, { FC } from "react";
import styled from "styled-components";
import { Comments, Markdown } from "../components";
import { usePage } from "../_context";

const Placeholder = styled.div`
  font-size: 13px;
  color: #8590a6;
  text-align: center;
  padding: 48px;
`;

export const MarkdownPage: FC<{
  file: string;
  placeholder: string;
}> = ({ file, placeholder }) => {
  const { site, __ } = usePage();

  let content = (
    site.pages
      .filter((post: Locals.Page) => post.source.startsWith(`page/${file}`))
      .toArray()?.[0] as Locals.Page | undefined
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
        <Placeholder>{__(`user.${placeholder}`)}</Placeholder>
      )}

      <Comments
        style={{
          flex: 1,
          padding: "16px 20px",
        }}
      />
    </>
  );
};
