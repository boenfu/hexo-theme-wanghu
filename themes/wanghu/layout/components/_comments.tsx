import React, { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import { usePage } from "../_context";

const Wrapper = styled.section`
  background-color: #fff;
  min-height: 300px;
`;

export const Comments: FC<HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  const { js, theme } = usePage();

  let utteranc = theme.comments?.utteranc;

  if (!utteranc) {
    console.error("Missing utteranc config");

    return <></>;
  }

  return (
    <Wrapper
      {...props}
      dangerouslySetInnerHTML={{
        __html: js({
          src: "https://utteranc.es/client.js",
          ...utteranc,
          crossorigin: "anonymous",
          async: true,
        }),
      }}
    />
  );
};
