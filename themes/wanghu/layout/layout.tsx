import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "./components";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #f6f6f6;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1;
  overflow: auto;
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { body } = props;

  return (
    <Layout>
      <Header {...props} />
      <Main
        dangerouslySetInnerHTML={{
          __html: body!,
        }}
      ></Main>
    </Layout>
  );
};

export default Component;
