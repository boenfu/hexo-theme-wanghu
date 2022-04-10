import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import classNames from "classnames";

const Wrapper = styled.header`
  flex: none;
  font-size: 15px;
  color: #121212;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 52px;
  max-width: 1156px;
  min-width: 1000px;
  padding-left: 16px;
  padding-right: 30px;
  margin: 0 auto;
`;

const Name = styled.div`
  width: 64px;
  font-size: 30px;
  letter-spacing: 2px;
  color: #06f;
`;

const Tabs = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 15px;
`;

const TabItem = styled.li`
  padding: 0 15px;
`;

const TabItemLink = styled.a`
  position: relative;
  padding: 14px 0;
  color: #8590a6;
  transition: 0.25s all ease-in;
  cursor: pointer;

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
    cursor: default;
    font-weight: 600;
    font-synthesis: style;
    color: #121212;

    &::after {
      opacity: 1;
    }
  }

  &.hover {
    color: #121212;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = styled.div`
  font-size: 15px;
  color: #121212;
  -webkit-tap-highlight-color: rgba(18, 18, 18, 0);
  display: flex;
  height: 34px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  position: relative;
  max-width: 482px;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-radius: 50%;
  background: #f6f6f6;
  -webkit-tap-highlight-color: rgba(18, 18, 18, 0);
  height: 34px;
  padding: 4px 10px;
  font-size: 14px;
  border: 1px solid #ebebeb;
  transition: width 0.2s ease, background 0.3s ease;
  transition-property: background-color, border, color;
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
`;

export const Header: FC<HexoComponentProps> = ({
  is_home,
  is_category,
  is_archive,
  is_tag,
}) => {
  const tabs: { type: string; isActive(): boolean; content: ReactNode }[] = [
    {
      type: "home",
      isActive: is_home,
      content: "首页",
    },
    {
      type: "archive",
      isActive: is_archive,
      content: "归档",
    },
    {
      type: "category",
      isActive: is_category,
      content: "分类",
    },
    {
      type: "tag",
      isActive: is_tag,
      content: "标签",
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Name>忘乎</Name>
        <Tabs>
          {tabs.map(({ type, isActive, content }) => (
            <TabItem key={type}>
              <TabItemLink
                className={classNames({
                  active: isActive(),
                })}
              >
                {content}
              </TabItemLink>
            </TabItem>
          ))}
        </Tabs>
        <SearchWrapper>
          <Search>
            <SearchInput />
          </Search>
        </SearchWrapper>
      </Content>
    </Wrapper>
  );
};
