import React, { FC } from "react";
import styled from "styled-components";
import { Posts } from "./components";
import { PageProvider } from "./_context";

const Wrapper = styled.div`
  padding-bottom: 24px;
`;

const Header = styled.div`
  height: 120px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;

  > div {
    box-sizing: border-box;
    max-width: 726px;
    padding: 0 16px;
    margin: 24px auto;
  }

  h2 {
    font-size: 26px;
    line-height: 36px;
    font-weight: 600;
  }

  p {
    display: flex;
    align-items: center;
    margin-top: 12px;

    > span {
      margin-left: 4px;
      font-size: 15px;
      color: #8590a6;

      i {
        margin: 0 2px;
        color: #444444;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    border-radius: 2px;
    font-size: 14px;
    overflow: hidden;
    color: #8590a6;

    img {
      width: 24px;
      height: 24px;
      object-fit: cover;
    }

    span {
      margin-left: 10px;
      color: #444;
      font-weight: 600;
    }
  }
`;

const List = styled.div`
  background-color: #fff;
  width: 694px;
  margin: 10px auto;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
`;

const Component: FC<HexoComponentProps> = (props) => {
  const { page, theme, url_for, gravatar, __ } = props;

  return (
    <PageProvider value={props}>
      <Wrapper>
        <Header>
          <div>
            <h2>{page.tag}</h2>

            <p>
              <a href={url_for("/about")}>
                <img
                  src={
                    theme.user.gravatar
                      ? gravatar(theme.user.gravatar)
                      : theme.user.avatar
                  }
                />

                <span>{theme.user.name}</span>
              </a>

              <span>
                ·<i>{page.posts.count()}</i> {__("post_suffix")}
              </span>

              <a href={url_for("/tags")}>
                &nbsp;&nbsp;
                {__("all_tags")}
              </a>
            </p>
          </div>
        </Header>

        <List>
          <Posts posts={page.posts} start={false} reverse></Posts>
        </List>
      </Wrapper>
    </PageProvider>
  );
};

export default Component;
