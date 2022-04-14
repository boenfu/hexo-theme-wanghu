import React, { FC } from "react";
import styled from "styled-components";
import { PageProvider } from "./_context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1000px;
  height: 100%;
  padding: 0 16px;
  margin: 0 auto;
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { page } = props;

  return (
    <PageProvider value={props}>
      <Wrapper>归档</Wrapper>
    </PageProvider>
  );
};

export default Component;
