import type { ComponentProps } from "hexo-renderer-react-styled";
import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  font-size: 15px;
  color: #121212;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  max-width: 1156px;
  min-width: 1000px;
  padding-left: 16px;
  padding-right: 30px;
`;

const Logo = styled.div`
  width: 64px;
`;

const Tabs = styled.ul`
  margin-left: 25px;
  margin-right: 15px;
`;

const TabItem = styled.li`
  padding: 0 15px;
`;

const TabItemLink = styled.a`
  position: relative;
  color: #8590a6;
  transition: 0.25s all ease-in;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    height: 4px;
    bottom: -1px;
    background: #06f;
    opacity: 0;
    transition: 0.25s all ease-in;
  }

  &.active {
    font-weight: 600;
    font-synthesis: style;

    &::after {
      opacity: 1;
    }
  }
`;

export const Header: FC<ComponentProps> = ({
  is_home,
  is_category,
  is_archive,
}) => {
  return (
    <Wrapper>
      <Content>
        <Logo>logo</Logo>
        <Tabs>
          <TabItem>
            <TabItemLink className={is_home() ? "active" : ""}>
              首页
            </TabItemLink>
            <TabItemLink className={is_category() ? "active" : ""}>
              分类
            </TabItemLink>
            <TabItemLink className={is_archive() ? "active" : ""}>
              归档
            </TabItemLink>
          </TabItem>
        </Tabs>
      </Content>
    </Wrapper>
  );
};
