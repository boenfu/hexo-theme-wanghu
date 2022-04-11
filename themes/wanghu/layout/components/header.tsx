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
  display: flex;
  position: relative;
  width: 400px;
  height: 34px;
  font-size: 15px;
  color: #121212;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 999px;
  background: #f6f6f6;
  height: 34px;
  padding: 4px 10px 4px 16px;
  font-size: 14px;
  border: 1px solid #ebebeb;
  transition: width 0.2s ease, background 0.3s ease;
  transition-property: background-color, border, color;
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
`;

const SearchButton = styled.button`
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  height: 34px;
  min-width: 70px;
  font-size: 14px;
  border: 1px solid #06f;
  padding: 0;
  border-radius: 999px;
  transition-property: background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
  color: #fff;
  background-color: #06f;
  margin-left: 12px;
  cursor: pointer;

  &:hover {
    border-color: #005ce6;
    background-color: #005ce6;
  }
`;

const MenuItem = styled.button`
  color: #8590a6;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  background: none;
  border: 1px solid;
  border-radius: 3px;
`;

const Menus = styled.div`
  display: flex;
  align-items: center;

  ${MenuItem} {
    margin-right: 40px;
  }
`;

const UserProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 2px;
`;

const UserInfo = styled.div`
  flex: 0;
  display: flex;
  align-items: center;
  margin-left: 30px;
  width: auto;
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
            <SearchInput placeholder="搜索文章" />
          </Search>
          <SearchButton>搜索</SearchButton>
        </SearchWrapper>
        <UserInfo>
          <Menus>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
          </Menus>
          <UserProfile src="https://avatars.githubusercontent.com/u/33797740?v=4" />
        </UserInfo>
      </Content>
    </Wrapper>
  );
};
