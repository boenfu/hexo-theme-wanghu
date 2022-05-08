import React from "react";
import { FC } from "react";
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
      flex-direction: column;
      border-bottom: 1px solid #f6f6f6;
      padding: 16px 20px;
      color: #121212;

      h5 {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.6;
      }

      span {
        font-size: 14px;
        margin-top: 5px;
        color: #8590a6;
      }
    }
  }
`;

export const Categories: FC = () => {
  const { site, url_for, __ } = usePage();
  return (
    <Wrapper>
      <h4>{__("user.categories_sub_title")}</h4>
      <section>
        {site.categories.toArray().map((category, index) => (
          <a key={index} href={url_for(category.path)}>
            <h5>{category.name}</h5>
            <span>
              {category.posts.count()} {__("post_suffix")}
            </span>
          </a>
        ))}
      </section>
    </Wrapper>
  );
};
