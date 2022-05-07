import { Locals } from "hexo";
import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { PageProvider } from "./_context";

const TagAnimation = keyframes`
    0% {
        transform: scale(0.5, 0.5);
        opacity: 1;
    }

    30% {
        opacity: 1;
    }

    100% {
        transform: scale(2.4, 2.4);
        opacity: 0;
    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1000px;
  box-sizing: border-box;
  padding: 24px 24px 68px;
  margin: 12px auto;

  background-color: #fff;
  box-shadow: 0px 1px 3px rgb(18 18 18 / 20%);
  border-radius: 4px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 2em;
    color: #121212;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    font-synthesis: style;
    line-height: 2em;
    padding-left: 1em;
  }

  div {
    color: #8590a6;
  }

  div:first-of-type {
    color: #06f;
  }

  div:last-of-type li:last-of-type i {
    background-color: currentColor;
  }
`;

const PostList = styled.ul`
  overflow: hidden;
`;

const PostItem = styled.li`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  padding: 0.4em 0 0.4em 1.4em;
  color: currentColor;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: calc(1.4em + 6px);
    width: 0;
    height: 100%;
    border-left: 1px dashed currentColor;
    background-color: transparent;
    z-index: 1;
  }

  i {
    position: relative;
    flex: none;
    width: 10px;
    height: 10px;
    border: 2px solid currentColor;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 0.4em;
    z-index: 2;

    transition: background-color 0.2s linear;
    transition-delay: 0.2s;
  }

  a:hover + i {
    background-color: currentColor;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: currentColor;
    }

    &::before {
      animation: ${TagAnimation} 2s ease-out 1s infinite;
    }

    &::after {
      animation: ${TagAnimation} 2s ease-out 2s infinite;
    }
  }

  a {
    position: relative;
    box-sizing: border-box;
    padding: 4px 1em 4px 0;
    color: currentColor;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    span {
      font-size: 0.8em;
      filter: grayscale(0.8);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      border-top: 1px solid currentColor;
      background-color: transparent;
      transform: translateX(-100%);
      transition: all 0.2s linear;
    }

    &:hover {
      &::after {
        transform: translateX(0);
      }
    }
  }
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { site, strip_html, url_for, __ } = props;

  const postsMap = new Map<number, Map<number, Locals.Post[]>>();

  site.posts.forEach((post) => {
    let year = post.date.year();

    let yearMap = postsMap.get(year) ?? new Map();

    let month = post.date.month();

    let posts = yearMap.get(month) ?? [];

    posts.push(post);

    yearMap.set(month, posts);

    postsMap.set(year, yearMap);
  });

  return (
    <PageProvider value={props}>
      <Wrapper>
        {[...postsMap.keys()]
          .sort((a, b) => b - a)
          .map((year, index) => (
            <div key={index}>
              <h2>{year}</h2>
              {[...postsMap.get(year)!.keys()]
                .sort((a, b) => b - a)
                .map((month, index) => (
                  <PostList key={index}>
                    <h3>{__(`months.${month + 1}`)}</h3>
                    {postsMap
                      .get(year)!
                      .get(month)
                      ?.sort((a, b) => b.date.unix() - a.date.unix())
                      .map((post, index) => (
                        <PostItem key={index}>
                          <a href={url_for(post.path)}>
                            <span>「{post.date.format("MM-DD")}」</span>

                            {post.title ||
                              strip_html(post.content).split("\n")[0]}
                          </a>
                          <i></i>
                        </PostItem>
                      ))}
                  </PostList>
                ))}
            </div>
          ))}
      </Wrapper>
    </PageProvider>
  );
};

export default Component;
