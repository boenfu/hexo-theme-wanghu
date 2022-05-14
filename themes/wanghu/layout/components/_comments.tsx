import React, { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import { usePage } from "../_context";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 48px 0;
  background-color: #fff;
`;

export const Comments: FC<HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  const { theme } = usePage();

  let script = theme.comments?.script;

  if (!script) {
    console.error("Missing comment script");

    return <></>;
  }

  return (
    <Wrapper>
      <div
        {...props}
        dangerouslySetInnerHTML={{
          __html: script,
        }}
      ></div>
    </Wrapper>
  );
};
