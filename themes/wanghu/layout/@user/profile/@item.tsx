import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #121212;

  svg {
    color: #8590a6;
    width: 18px;
    font-size: 18px;
    margin-right: 12px;
  }
`;

const Split = styled.span`
  width: 1px;
  height: 10px;
  margin: 0 8px;
  background: #ebebeb;
`;

export const Item: FC<{ icon: ReactNode; texts: (string | undefined)[] }> = ({
  icon,
  texts,
}) => {
  let nodes = texts
    .flatMap((text, index) =>
      text ? [<span key={index}>{text}</span>, <Split key={`${index}|`} />] : []
    )
    .slice(0, -1);

  if (!nodes.length) {
    return <></>;
  }

  return (
    <Wrapper>
      {icon}
      {nodes}
    </Wrapper>
  );
};
