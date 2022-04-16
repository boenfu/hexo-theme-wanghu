import classNames from "classnames";
import { Locals } from "hexo";
import React, { FC } from "react";
import styled from "styled-components";
import { usePage } from "../../_context";

import Hot from "./hot.svg";
import Timer from "./timer.svg";

const Wrapper = styled.section`
  position: relative;
  display: flex;
  padding: 16px 16px 16px 0;
`;

const Index = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 57px;

  span {
    font-weight: 600;
    font-synthesis: style;
    line-height: 1.6;
    font-size: 18px;
    color: #999;

    &.hot {
      color: #ff9607;
    }
  }
`;

const Title = styled.a`
  font-size: 18px;
  line-height: 28px;
  max-height: 56px;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  font-weight: 600;
  font-synthesis: style;
  color: #121212;
  overflow: hidden;
`;

const Excerpt = styled.a`
  line-height: 25px;
  margin-top: 2px;
  min-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #444;
`;

const Metrics = styled.div`
  bottom: 16px;
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 16px;
  margin-top: 8px;
  color: #8590a6;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Image = styled.a`
  height: 105px;
  margin-left: 16px;
  background-color: #eee;

  img {
    display: block;
    object-fit: cover;
    border-radius: 4px;
    height: 105px;
    width: 190px;
  }
`;

const MetricItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 18px;
    margin-right: 4px;
  }

  & + & {
    margin-left: 28px;
  }
`;

export const Item: FC<{
  index: number;
  post: Locals.Post;
}> = ({ index, post }) => {
  const { url_for } = usePage();

  let postUrl = url_for(post.path);

  return (
    <Wrapper>
      <Index>
        <span className={classNames({ hot: index <= 3 })}>{index}</span>
      </Index>
      <Content>
        <Title href={postUrl}>{post.title}</Title>
        <Excerpt href={postUrl}>{post.slug}</Excerpt>
        <Metrics>
          <MetricItem>
            <Hot />
            20 次查看
          </MetricItem>
          <MetricItem>
            <Timer />
            12 分钟读完
          </MetricItem>
        </Metrics>
      </Content>
      <Image href={postUrl}>
        <img src={post.photos?.[0]} />
      </Image>
    </Wrapper>
  );
};
