import React, { FC } from "react";
import styled from "styled-components";
import { Footer, Posts } from "./components";
import { PageProvider } from "./_context";

import Flash from "./icons/flash.svg";

const Index = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1000px;
  padding: 0 16px;
  margin: 0 auto;
`;

const Main = styled.div`
  flex-shrink: 0;
  margin: 10px 10px 0 0;
  width: 694px;
  padding-bottom: 120px;
`;

const Content = styled.div`
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  background-color: #fff;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 10px;
  flex: 1;
`;

const SocialIcon = styled.div`
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: rgb(255, 207, 0);
  margin-bottom: 10px;
`;

const SocialLabel = styled.div`
  font-size: 15px;
  color: #8590a6;
  transition: all 0.2s linear;
`;

const SocialItem = styled.li`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    ${SocialLabel} {
      color: rgb(255, 207, 0);
    }
  }
`;

const SidebarSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  overflow: hidden;
  background-color: #fff;
`;

const Socials = styled(SidebarSection)`
  padding: 20px 10px 0;
`;

const LinkIcon = styled.div`
  font-size: 18px;
  margin-right: 10px;
`;

const Link = styled.a`
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 14px;
  color: #8590a6;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
    color: #76839b;
  }
`;

const Links = styled(SidebarSection)`
  padding: 8px 0;
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { page, theme } = props;

  return (
    <PageProvider value={props}>
      <Index>
        <Main>
          <Content>
            <Posts posts={page.posts} />
          </Content>
        </Main>
        <Sidebar>
          <Socials>
            {[1, 2, 3, 4].map((item, index) => (
              <SocialItem key={index}>
                <SocialIcon>
                  <Flash />
                </SocialIcon>
                <SocialLabel>{item}</SocialLabel>
              </SocialItem>
            ))}
          </Socials>
          <Links>
            {["我的余额", "为0", "为0", "为0"].map((item, index) => (
              <Link key={index}>
                <LinkIcon>
                  <Flash />
                </LinkIcon>
                {item}
              </Link>
            ))}
          </Links>
          <Footer data={theme.footers} />
        </Sidebar>
      </Index>
    </PageProvider>
  );
};

export default Component;
