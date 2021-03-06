import React, { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import githubMarkdownCSS from "github-markdown-css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 2;
  padding-left: 5px;

  a,
  span {
    color: #8590a6;
    transition: all 0.2s linear;
  }

  a:hover {
    color: #175199;
  }
`;
export const Footer: FC<
  {
    data: HexoComponentProps["theme"]["footers"];
  } & HtmlHTMLAttributes<HTMLDivElement>
> = ({ data, ...props }) => {
  return (
    <Wrapper {...props}>
      {data.map(({ content, url, html }, index) =>
        url ? (
          <a
            key={index}
            href={url}
            {...(html
              ? {
                  dangerouslySetInnerHTML: { __html: content },
                }
              : { children: content })}
          />
        ) : (
          <span
            key={index}
            {...(html
              ? {
                  dangerouslySetInnerHTML: { __html: content },
                }
              : { children: content })}
          />
        )
      )}
    </Wrapper>
  );
};
