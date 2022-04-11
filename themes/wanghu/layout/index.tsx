import React, { FC } from "react";
import styled from "styled-components";
import { Posts } from "./components";
import { PageProvider } from "./context";
import Github from "./icons/github.svg";

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

const GithubIcon = styled(Github)`
  color: #333;
  font-size: 36px;
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { page } = props;

  return (
    <PageProvider value={props}>
      <Index>
        <Main>
          <Posts posts={page.posts} />
        </Main>
        <Sidebar>
          <GithubIcon />
        </Sidebar>
      </Index>
    </PageProvider>
  );
};

export default Component;
