import React, { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import githubMarkdownCSS from "github-markdown-css";

const MarkdownWrapper = styled.section`
  ${githubMarkdownCSS}
`;

export const Markdown: FC<
  { content: string } & HtmlHTMLAttributes<HTMLDivElement>
> = ({ content, ...props }) => {
  return (
    <MarkdownWrapper {...props}>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </MarkdownWrapper>
  );
};
