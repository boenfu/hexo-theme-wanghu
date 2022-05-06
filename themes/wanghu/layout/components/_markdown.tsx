import React, { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import githubMarkdownCSS from "github-markdown-css";

const MarkdownWrapper = styled.section`
  .highlight {
    position: relative;

    table,
    tbody {
      display: table;
      width: 100% !important;
    }

    tbody,
    td,
    tr {
      border: none !important;
      padding: 0 !important;
    }

    overflow: hidden;
  }

  .gutter {
    display: none;
  }

  .code {
    color: #24292e;
    background: #fff;

    .doctag,
    .keyword,
    .meta .keyword,
    .template-tag,
    .template-variable,
    .type,
    .variable.language_ {
      color: #d73a49;
    }
    .title,
    .title.class_,
    .title.class_.inherited__,
    .title.function_ {
      color: #6f42c1;
    }
    .attr,
    .attribute,
    .literal,
    .meta,
    .number,
    .operator,
    .selector-attr,
    .selector-class,
    .selector-id,
    .variable {
      color: #005cc5;
    }
    .meta .string,
    .regexp,
    .string {
      color: #032f62;
    }
    .built_in,
    .symbol {
      color: #e36209;
    }
    .code,
    .comment,
    .formula {
      color: #6a737d;
    }
    .name,
    .quote,
    .selector-pseudo,
    .selector-tag {
      color: #22863a;
    }
    .subst {
      color: #24292e;
    }
    .section {
      color: #005cc5;
      font-weight: 700;
    }
    .bullet {
      color: #735c0f;
    }
    .emphasis {
      color: #24292e;
      font-style: italic;
    }
    .strong {
      color: #24292e;
      font-weight: 700;
    }
    .addition {
      color: #22863a;
      background-color: #f0fff4;
    }
    .deletion {
      color: #b31d28;
      background-color: #ffeef0;
    }
  }

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
