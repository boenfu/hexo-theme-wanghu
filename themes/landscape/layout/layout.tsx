import type { ComponentProps } from "hexo-renderer-react-styled";
import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "./components";

const Layout = styled.div``;

const Main = styled.main``;

const Component: FC<ComponentProps> = (props) => {
  let { body } = props;

  return (
    <Layout>
      <Header {...props} />
      <Main
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      ></Main>
    </Layout>
  );
};

export default Component;
