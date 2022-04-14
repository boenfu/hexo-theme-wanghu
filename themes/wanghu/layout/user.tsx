import React, { createElement, FC } from "react";
import styled from "styled-components";
import { PageProvider } from "./_context";

import Flash from "./icons/flash.svg";
import { Comments, Footer, Markdown } from "./components";
import { Locals } from "hexo";
import classNames from "classnames";

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
  font-size: 15px;
  color: #121212;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h1 {
    line-height: 30px;
    font-size: 26px;
    font-weight: 600;
    font-synthesis: style;
  }
`;

const Profile = styled.section`
  flex: none;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  background: #fff;
  overflow: hidden;
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

const Follow = styled(SidebarSection)``;

const About: FC<HexoComponentProps> = (props) => {
  const { page } = props;

  let about = (
    page.posts
      .filter((post: Locals.Post) => post.source.startsWith("_posts/markdown"))
      .toArray()?.[0] as Locals.Post | undefined
  )?.content;

  return (
    <>
      <Markdown
        style={{
          padding: "16px 20px",
        }}
        content={about ?? "Ta 还没有准备好介绍自己"}
      />

      <Comments
        style={{
          padding: "16px 20px",
        }}
        hexo={props}
      />
    </>
  );
};

const Component: FC<HexoComponentProps> = (props) => {
  const { page, gravatar, url_for, theme } = props;

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
      content: "",
    },
    tags: {
      title: "标签",
      count: page.tags.length,
      content: "",
    },
    follows: {
      title: "关注",
      count: page.tags.length,
      content: "",
    },
    messages: {
      title: "留言",
      count: undefined,
      content: "",
    },
  };

  let {
    cover,
    gravatar: gravatarURL,
    avatar,
    name,
    description,
    profile,
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
              </ProfileName>
            </ProfileContent>
          </ProfileInfo>
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
            <Links>
              {achievements?.length
                ? achievements.map(({ icon, title, description }, index) => (
                    <Link key={index}>
                      <LinkIcon>
                        {typeof icon === "string" ? icon : icon.src}
                      </LinkIcon>
                      {title}
                      {description}
                    </Link>
                  ))
                : undefined}
            </Links>

            <Links className="created">
              <Link href={url_for("/index")}>
                创建的文章 <span>{page.posts.length}</span>
              </Link>

              <Link href={url_for("/category")}>
                创建的分类 <span>{page.categories.length}</span>
              </Link>

              <Link href={url_for("/tag")}>
                创建的标签 <span>{page.tags.length}</span>
              </Link>
            </Links>
            <Footer data={theme.footers} />
          </Sidebar>
        </Main>
      </User>
    </PageProvider>
  );
};

export default Component;