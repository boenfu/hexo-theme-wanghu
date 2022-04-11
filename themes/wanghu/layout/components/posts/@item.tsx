import classNames from "classnames";
import { Locals } from "hexo";
import React, { FC } from "react";
import styled from "styled-components";

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

const Title = styled.h2`
  font-size: 18px;
  line-height: 28px;
  max-height: 56px;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 600;
  font-synthesis: style;
`;

const Excerpt = styled.div`
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

const Image = styled.div`
  height: 105px;
  margin-left: 16px;
  position: relative;

  img {
    display: block;
    object-fit: cover;
    border-radius: 4px;
    height: 105px;
    width: 190px;
  }
`;

export const Item: FC<{
  index: number;
  post: Locals.Post;
}> = ({ index, post }) => {
  return (
    <Wrapper>
      <Index>
        <span className={classNames({ hot: index <= 3 })}>{index}</span>
      </Index>
      <Content>
        <Title>{post.title}</Title>
        <Excerpt>{post.slug}</Excerpt>
        <Metrics>{post.date.format("YYYY/M/D")}</Metrics>
      </Content>
      <Image>
        <img
          src={
            post.photos?.[0] ||
            "https://pic2.zhimg.com/80/v2-df1dcbeb8412dd1a0500f9c5773b4575_720w.jpg?source=1940ef5c"
          }
          alt=""
        />
      </Image>
    </Wrapper>
  );
};
