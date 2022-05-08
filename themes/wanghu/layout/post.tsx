import React, { FC } from "react";
import styled from "styled-components";
import { PageProvider } from "./_context";
import { Locals } from "hexo";
import { Comments, Markdown } from "./components";
import Add from "./icons/add.svg";

const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  background-color: #fff;
`;

const Content = styled.div`
  width: 690px;
  margin: 0 auto;
`;

const TitleImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 16px auto 0;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 1.22;
  margin: 24px 0;
  word-wrap: break-word;
  font-weight: 600;
  font-synthesis: style;
`;

const ProfileInfo = styled.a`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 24px;
  line-height: 1.22;
  word-wrap: break-word;
  font-weight: 600;
  font-synthesis: style;
`;

const ProfileImage = styled.img`
  flex: none;
  background-color: #eee;
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

const Author = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;
`;

const ProfileName = styled.span`
  font-size: 15px;
  line-height: 1.1;
  color: #121212;
`;

const ProfileDescription = styled.span`
  margin-top: 2px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #646464;
  word-break: break-word;
  line-height: 1.6;
`;

const Follow = styled.div`
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

const PostStatus = styled.div`
  margin: 16px 0;
  font-size: 14px;
  color: #8590a6;
`;

const PostTime = styled.div`
  padding: 16px 0;
  font-size: 14px;
  color: #8590a6;
`;

const Tag = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  font-size: 13px;
  margin-bottom: 10px;
  padding: 0 12px;
  color: #06f;
  border-radius: 100px;
  background: rgba(0, 102, 255, 0.1);
  overflow: hidden;
`;

const Tags = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: -10px;
  padding: 16px 0;

  ${Tag}:not(:last-child) {
    margin-right: 5px;
  }
`;

const Category = styled.li`
  margin: 24px 0;
`;

const Categories = styled.ul`
  padding-top: 30px;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  line-height: 1.375;
  font-size: 16px;
  font-weight: 600;
  font-synthesis: style;
  padding-bottom: 12px;
  color: #121212;
  border-bottom: 1px solid #ebebeb;
`;

const Footer = styled.div`
  margin: 0 auto;
  background-color: #f6f6f6;
  background-color: none;

  > h3 {
    width: 690px;
    padding: 24px 0 4px;
    margin: 0 auto;
  }
`;

const RecommendItem = styled.a`
  position: relative;
  height: 226px;
  width: 245px;
  min-width: 245px;
  border-radius: 5px;
  box-shadow: 0 6px 14px 0 rgb(18 18 18 / 6%);
  overflow: hidden;
  background-color: #fff;
`;

const RecommendCover = styled.img`
  height: 123px;
  width: 245px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const RecommendTitle = styled.h1`
  line-height: 22px;
  margin: 12px;
  text-overflow: ellipsis;
  font-size: 16px;
  min-width: 225px;
  color: #121212;
  font-weight: 600;
  font-synthesis: style;
  overflow: hidden;
`;

const RecommendDescription = styled.span`
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  color: #8590a6;
`;

const Recommends = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;

  ${RecommendItem} +${RecommendItem} {
    margin-left: 14px;
  }
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { page, theme, url_for, __ } = props;

  let titleImage = page.photos?.[0];

  return (
    <PageProvider value={props}>
      <Post>
        <Main>
          <Content>
            {titleImage && <TitleImage src={titleImage} />}
            <Title>{page.title}</Title>
            <ProfileInfo href={url_for("/about")}>
              <ProfileImage src="https://avatars.githubusercontent.com/u/33797740?v=4" />
              <Author>
                <ProfileName>Boenfu</ProfileName>
                <ProfileDescription>
                  {theme.user.achievements?.[0].title || theme.user.description}
                </ProfileDescription>
              </Author>
              <Follow>
                {<Add />}
                {__("user.follow_he")}
              </Follow>
            </ProfileInfo>
            <PostStatus>100w 人赞同了该文章</PostStatus>
            <Markdown content={page.content} />
            <PostTime>发布于 2022-04-01 15:46</PostTime>
            {page.tags?.length ? (
              <Tags>
                {(page.tags as Locals.Tag[]).map((tag, index) => (
                  <Tag key={index} href={url_for(tag.path)}>
                    {tag.name}
                  </Tag>
                ))}
              </Tags>
            ) : undefined}
            {page.categories?.length ? (
              <Categories>
                <SectionTitle>文章被以下分类收录</SectionTitle>
                {(page.categories as Locals.Category[]).map(
                  (category, index) => (
                    <Category key={index}>
                      <ProfileInfo href={url_for("/about")}>
                        <ProfileImage />
                        <Author>
                          <ProfileName>{category.name}</ProfileName>
                          <ProfileDescription>
                            {`${category.posts.count()} 篇文章`}
                          </ProfileDescription>
                        </Author>
                      </ProfileInfo>
                    </Category>
                  )
                )}
              </Categories>
            ) : undefined}
          </Content>
          <Footer>
            <SectionTitle>推荐阅读</SectionTitle>
            <Recommends>
              <RecommendItem>
                <RecommendCover src="https://pic2.zhimg.com/v2-5929ea14fde5e03e98cf21d65753f3ee_250x0.jpg?source=172ae18b"></RecommendCover>
                <RecommendTitle>asdasd</RecommendTitle>
                <RecommendDescription>asdasd</RecommendDescription>
              </RecommendItem>

              <RecommendItem>
                <RecommendCover src="https://pic2.zhimg.com/v2-5929ea14fde5e03e98cf21d65753f3ee_250x0.jpg?source=172ae18b"></RecommendCover>
                <RecommendTitle>asdasd</RecommendTitle>
                <RecommendDescription>asdasd</RecommendDescription>
              </RecommendItem>

              <RecommendItem>
                <RecommendCover src="https://pic2.zhimg.com/v2-5929ea14fde5e03e98cf21d65753f3ee_250x0.jpg?source=172ae18b"></RecommendCover>
                <RecommendTitle>asdasd</RecommendTitle>
                <RecommendDescription>asdasd</RecommendDescription>
              </RecommendItem>

              <RecommendItem>
                <RecommendCover src="https://pic2.zhimg.com/v2-5929ea14fde5e03e98cf21d65753f3ee_250x0.jpg?source=172ae18b"></RecommendCover>
                <RecommendTitle>asdasd</RecommendTitle>
                <RecommendDescription>asdasd</RecommendDescription>
              </RecommendItem>
            </Recommends>
          </Footer>
        </Main>

        {page.comments && <Comments />}
      </Post>
    </PageProvider>
  );
};

export default Component;
