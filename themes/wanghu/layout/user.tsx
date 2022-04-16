import React, { createElement, FC } from "react";
import styled from "styled-components";
import { PageProvider } from "./_context";

import { Footer } from "./components";
import classNames from "classnames";
import {
  About,
  Categories,
  Messages,
  Profile as UserProfile,
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

const Sidebar = styled.div`
  position: sticky;
  top: 10px;
  flex: 1;
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

const Achievements = styled.div`
  padding: 12px 0;
`;

const Achievement = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  height: 60px;
  font-size: 15px;
  padding: 6px 20px;
  color: #646464;

  > svg {
    flex-shrink: 0;
    width: 18px;
    font-size: 1.2em;
    margin-right: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      box-sizing: border-box;
      margin: 0;
      margin-top: 6px;
      font-size: 14px;
      line-height: 20px;
      color: #8590a6;
    }
  }
`;

const List = styled(SidebarSection)`
  &.created {
    background-color: transparent;
    box-shadow: none;

    ${Link} {
      justify-content: space-between;
      padding: 0;
      padding-left: 5px;
      height: 46px;
      border-top: 1px solid #ebebeb;
      color: #646464;

      span {
        color: #8590a6;
      }
    }
  }

  > h2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    color: #646464;
  }
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

const Follow = styled(SidebarSection)`
  height: 75px;
  display: flex;

  a {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      * {
        color: #175199 !important;
      }
    }
  }

  a + a {
    border-left: 1px solid #ebebeb;
  }

  span {
    font-size: 14px;
    color: #8590a6;
    line-height: 1.6;
  }

  i {
    line-height: 1.6;
    font-size: 18px;
    color: #121212;
    font-weight: 600;
    font-synthesis: style;
  }
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { page, gravatar, svgr, url_for, theme } = props;

  let route = page.path.split("/")[0];

  let tabs: Record<
    string,
    { title: string; count: number | undefined; content: any }
  > = {
    about: {
      title: "关于",
      count: undefined,
      content: About,
    },
    categories: {
      title: "分类",
      count: page.categories.length,
      content: Categories,
    },
    tags: {
      title: "标签",
      count: page.tags.length,
      content: Tags,
    },
    follows: {
      title: "关注",
      count: theme.following.length,
      content: "",
    },
    messages: {
      title: "留言",
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
    profile,
    followers,
    follow_link,
    achievements,
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
              <UserProfile {...profile} />
            </ProfileContent>
          </ProfileInfo>
          <Actions>
            <FollowHe href={follow_link}>{<Add />}关注他</FollowHe>
            <SendMessage href={url_for("/messages")}>
              {<Comment />}写留言
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

          <Sidebar>
            <List>
              <h2>个人成就</h2>
              <Achievements>
                {achievements?.length
                  ? achievements.map(({ icon, title, description }, index) => {
                      let { src, ...props } =
                        typeof icon === "string" ? { src: icon } : icon;

                      return (
                        <Achievement key={index}>
                          {createElement(svgr(src), props)}
                          <div>
                            {title}
                            <span>{description}</span>
                          </div>
                        </Achievement>
                      );
                    })
                  : undefined}
              </Achievements>
            </List>

            <Follow>
              <a href={url_for("/follows")}>
                <span>关注了</span>
                <i>{theme.following.length ?? 0}</i>
              </a>

              <a>
                <span>关注者</span>
                <i>{followers}</i>
              </a>
            </Follow>

            <List className="created">
              <Link href={url_for("/index")}>
                创建的文章 <span>{page.posts.length}</span>
              </Link>

              <Link href={url_for("/category")}>
                创建的分类 <span>{page.categories.length}</span>
              </Link>

              <Link href={url_for("/tag")}>
                创建的标签 <span>{page.tags.length}</span>
              </Link>
            </List>
            <Footer data={theme.footers} />
          </Sidebar>
        </Main>
      </User>
    </PageProvider>
  );
};

export default Component;
