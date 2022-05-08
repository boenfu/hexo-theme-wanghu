import React, { FC } from "react";
import styled from "styled-components";
import { Footer, Posts } from "./components";
import { PageProvider } from "./_context";

import Tag from "./icons/tag.svg";
import Category from "./icons/category.svg";
import Files from "./icons/files.svg";
import Info from "./icons/info.svg";
import { Menus } from "./@index";

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
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 14px;
  color: #8590a6;
  transition: all 0.2s linear;
  cursor: pointer;

  i {
    position: absolute;
    box-sizing: border-box;
    top: 6px;
    right: 20px;
    height: 26px;
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 2px;
    color: #8590a6;
    background: #f6f6f6;
    transition: all 0.2s linear;
  }

  &:hover {
    color: #76839b;
    background-color: #f6f6f6;

    i {
      background-color: #fff;
    }
  }
`;

const Links = styled(SidebarSection)`
  padding: 8px 0;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;

  a {
    color: #8590a6;
    padding: 12px;
    transition: color 0.2s linear;

    &:hover {
      color: #06f;
    }
  }
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { site, page, theme, config, url_for, __ } = props;

  return (
    <PageProvider value={props}>
      <Index>
        <Main>
          <Content>
            <Posts
              posts={page.posts}
              start={+(page.prev || 0) * config.per_page}
            />

            <Page>
              {page.prev ? (
                <a
                  href={url_for(+page.prev === 1 ? "/" : `/page/${page.prev}`)}
                >
                  {__("page.prev")}
                </a>
              ) : undefined}
              {page.next ? (
                <a href={url_for(`/page/${page.next}`)}> {__("page.next")}</a>
              ) : undefined}
            </Page>
          </Content>
        </Main>
        <Sidebar>
          <Menus />
          <Links>
            <Link href={url_for("/archives")}>
              <LinkIcon>
                <Files />
              </LinkIcon>
              {__("posts")}
              <i>{site.posts.count()}</i>
            </Link>

            <Link href={url_for("/tags")}>
              <LinkIcon>
                <Tag />
              </LinkIcon>
              {__("tags")}
              <i>{site.tags.count()}</i>
            </Link>

            <Link href={url_for("/categories")}>
              <LinkIcon>
                <Category />
              </LinkIcon>
              {__("categories")}
              <i>{site.categories.count()}</i>
            </Link>

            <Link href={url_for("/about")}>
              <LinkIcon>
                <Info />
              </LinkIcon>
              {__("about")}
            </Link>
          </Links>
          <Footer data={theme.footers} />
        </Sidebar>
      </Index>
    </PageProvider>
  );
};

export default Component;
