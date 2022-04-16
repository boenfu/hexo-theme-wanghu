import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import Notification from "./notification.svg";
import Comment from "./comment.svg";

const Wrapper = styled.header`
  flex: none;
  font-size: 15px;
  color: #121212;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  overflow: hidden;
  z-index: 2;
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

const Name = styled.a`
  flex: none;
  white-space: nowrap;
  min-width: 64px;
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
  white-space: nowrap;
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

const SearchWrapper = styled.form`
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
  outline: none;
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

const MenuItem = styled.a`
  width: 22px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #8590a6;
  cursor: pointer;
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

const PostHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-left: 1px solid #ebebeb;
  padding-left: 16px;
  margin-left: 16px;
`;

const PostFirst = styled.span`
  font-size: 12px;
  line-height: 17px;
  color: #8590a6;
`;

const PostSource = styled.a`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  color: #121212;
`;

const General: FC<HexoComponentProps> = ({
  page,
  is_home,
  is_category,
  is_archive,
  is_tag,
  url_for,
  theme,
  gravatar,
  __,
}) => {
  const tabs: { type: string; isActive(): boolean; content: ReactNode }[] = [
    {
      type: "",
      isActive: is_home,
      content: __("index"),
    },
    {
      type: "archives",
      isActive: is_archive,
      content: __("archives"),
    },
    // {
    //   type: "categories",
    //   isActive: () => is_category() || page.path.startsWith("categories/"),
    //   content: "分类",
    // },
    {
      type: "tags",
      isActive: () => is_tag() || page.path.startsWith("tags/"),
      content: __("tags"),
    },
  ];

  return (
    <>
      <Tabs>
        {tabs.map(({ type, isActive, content }) => (
          <TabItem key={type}>
            <TabItemLink
              className={classNames({
                active: isActive(),
              })}
              href={url_for(`/${type}`)}
            >
              {content}
            </TabItemLink>
          </TabItem>
        ))}
      </Tabs>
      <SearchWrapper id="search_form">
        <Search>
          <SearchInput
            id="search_input"
            placeholder={__("search_placeholder")}
            type="search"
            name="q"
          />
        </Search>
        <SearchButton type="submit">{__("search")}</SearchButton>
      </SearchWrapper>
      <UserInfo>
        <Menus>
          <MenuItem>
            <Notification />
          </MenuItem>
          <MenuItem href={url_for("/messages")} title={__("user.send_message")}>
            <Comment />
          </MenuItem>
        </Menus>
        <a href={url_for("/about")} title={__("about")}>
          <UserProfile
            src={
              theme.user.gravatar
                ? gravatar(theme.user.gravatar)
                : theme.user.avatar
            }
          />
        </a>
      </UserInfo>
    </>
  );
};

const Post: FC<HexoComponentProps> = ({ url_for, theme, gravatar }) => {
  return (
    <>
      <PostHeader>
        <PostFirst>首发于</PostFirst>
        <PostSource href={url_for("/")}>网站</PostSource>
      </PostHeader>
      <UserInfo>
        <a href={url_for("/about")}>
          <UserProfile
            src={
              theme.user.gravatar
                ? gravatar(theme.user.gravatar)
                : theme.user.avatar
            }
          />
        </a>
      </UserInfo>
    </>
  );
};

export const Header: FC<HexoComponentProps> = (props) => {
  const { is_post, url_for, theme } = props;

  return (
    <Wrapper>
      <Content>
        <Name href={url_for("/")}>{theme.title}</Name>
        {is_post() ? <Post {...props} /> : <General {...props} />}
      </Content>
    </Wrapper>
  );
};
