import React, { createElement, FC } from "react";
import styled from "styled-components";
import { PageProvider } from "./_context";

import classNames from "classnames";
import {
  About,
  Categories,
  Following,
  Messages,
  Profile as UserProfile,
  Sidebar,
  Tags,
} from "./@user";

import Add from "./icons/add.svg";
import Comment from "./icons/comment.svg";

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1000px;
  height: 100%;
  padding: 0 16px;
  margin: 0 auto;
`;

const ProfileCover = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
  background: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileAvatar = styled.div`
  position: absolute;
  border-radius: 8px;
  left: 0;
  top: -25px;
  background-color: #fff;
  border: 4px solid #fff;
  overflow: hidden;
  z-index: 1;

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
  }
`;

const ProfileContent = styled.div`
  padding-top: 16px;
  padding-left: 32px;
  border-left: 164px solid transparent;
`;

const ProfileInfo = styled.div`
  position: relative;
  min-height: 146px;
  margin: 0 20px 24px;
`;

const ProfileName = styled.div`
  color: #121212;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  h1 {
    line-height: 30px;
    font-size: 26px;
    font-weight: 600;
    font-synthesis: style;
  }

  span {
    margin-left: 12px;
    font-size: 18px;
    white-space: nowrap;
    word-break: break-word;
    line-height: 1.6;
  }
`;

const Profile = styled.section`
  position: relative;
  flex: none;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  background: #fff;
  overflow: hidden;
`;

const Actions = styled.div`
  position: absolute;
  right: 20px;
  bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  a + a {
    margin-left: 16px;
  }
`;

const FollowHe = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  background: #06f;
  border: 1px solid #06f;
  border-radius: 3px;
  color: #fff;
  margin-left: 16px;

  svg {
    font-size: 1.2em;
    margin-right: 8px;
  }
`;

const SendMessage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  background: none;
  border: 1px solid #8590a6;
  border-radius: 3px;
  color: #8590a6;
  margin-left: 16px;

  svg {
    margin-right: 4px;
  }
`;

const Main = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-shrink: 0;
  margin: 10px 10px 0 0;
  padding-bottom: 120px;
  overflow: auto;
`;

const Content = styled.div`
  width: 694px;
  margin-right: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  background: #fff;
  text-align: left;
  min-height: calc(100vh - 520px);
  overflow: hidden;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
`;

const Tab = styled.a`
  display: inline-block;
  position: relative;
  margin: 0 12px;
  padding: 14px 0;
  font-size: 16px;
  line-height: 22px;
  color: #121212;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 3px;
    background-color: transparent;
  }

  &.active {
    font-weight: 600;

    &::after {
      background-color: #06f;
    }
  }

  span {
    margin-left: 6px;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #999;
  }
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { page, gravatar, url_for, theme, __ } = props;

  let route = page.path.split("/")[0];

  let tabs: Record<
    string,
    { title: string; count: number | undefined; content: any }
  > = {
    about: {
      title: __("about"),
      count: undefined,
      content: About,
    },
    categories: {
      title: __("categories"),
      count: page.categories.length,
      content: Categories,
    },
    tags: {
      title: __("tags"),
      count: page.tags.length,
      content: Tags,
    },
    following: {
      title: __("following"),
      count: theme.following.length,
      content: Following,
    },
    messages: {
      title: __("messages"),
      count: undefined,
      content: Messages,
    },
  };

  let {
    cover,
    gravatar: gravatarURL,
    avatar,
    name,
    description,
    follow_url,
  } = theme.user ?? {};

  return (
    <PageProvider value={props}>
      <User>
        <Profile>
          <ProfileCover>
            <img src={cover} alt="" />
          </ProfileCover>
          <ProfileInfo>
            <ProfileAvatar>
              <img
                src={gravatarURL ? gravatar(gravatarURL, 160) : avatar}
                alt=""
              />
            </ProfileAvatar>
            <ProfileContent>
              <ProfileName>
                <h1>{name}</h1>
                <span>{description}</span>
              </ProfileName>
              <UserProfile />
            </ProfileContent>
          </ProfileInfo>
          <Actions>
            <FollowHe href={follow_url}>
              {<Add />}
              {__("user.follow_he")}
            </FollowHe>
            <SendMessage href={url_for("/messages")}>
              {<Comment />}
              {__("user.send_message")}
            </SendMessage>
          </Actions>
        </Profile>
        <Main>
          <Content>
            <Tabs>
              {Object.keys(tabs).map((key: string) => {
                let tab = tabs[key];

                return (
                  <Tab
                    key={key}
                    className={classNames({
                      active: route === key,
                    })}
                    href={url_for(key)}
                  >
                    {tab.title}
                    {tab.count !== undefined && <span>{tab.count}</span>}
                  </Tab>
                );
              })}
            </Tabs>
            {createElement(tabs[route]?.content || (() => ""), props)}
          </Content>
          <Sidebar />
        </Main>
      </User>
    </PageProvider>
  );
};

export default Component;
