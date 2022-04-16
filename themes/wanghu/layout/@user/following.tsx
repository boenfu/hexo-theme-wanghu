import React, { FC } from "react";
import styled from "styled-components";
import { usePage } from "../_context";

const Wrapper = styled.div`
  h4 {
    display: flex;
    align-items: center;
    height: 50px;
    font-weight: 600;
    margin: 0 20px;
    border-bottom: 1px solid #f6f6f6;
  }

  section {
    a {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f6f6f6;
      padding: 16px 20px;
      color: #121212;

      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        background-color: #eee;
        border-radius: 4px;
        margin-right: 16px;
        overflow: hidden;
      }

      h5 {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.6;
      }

      span {
        font-size: 15px;
        margin-top: 5px;
        font-weight: normal;
        line-height: 1.6;
        color: #646464;
      }
    }
  }
`;

export const Following: FC = () => {
  const { theme, gravatar, __ } = usePage();
  return (
    <Wrapper>
      <h4>{__("user.following_sub_title")}</h4>
      <section>
        {theme.following.map((user, index) => (
          <a key={index} href={user.url}>
            <img
              src={user.gravatar ? gravatar(user.gravatar) : user.avatar}
              alt=""
            />

            <h5>
              {user.name}
              <span>{user.description}</span>
            </h5>
          </a>
        ))}
      </section>
    </Wrapper>
  );
};
