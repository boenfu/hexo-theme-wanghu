import React, { FC } from "react";
import styled from "styled-components";
import { Posts } from "./components";
import { PageProvider } from "./context";

const Index = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  width: 1000px;
  padding: 0 16px;
  margin: 10px auto;
`;

const Main = styled.div`
  flex-shrink: 0;
  margin-right: 10px;
  margin-bottom: 0;
  width: 694px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  background-color: #fff;
`;

const Sidebar = styled.div`
  flex: 1;
  background-color: #fff;
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { page } = props;

  return (
    <PageProvider value={props}>
      <Index>
        <Main>
          <Posts posts={page.posts} />
        </Main>
        <Sidebar>1</Sidebar>
      </Index>
    </PageProvider>
  );
};

export default Component;
