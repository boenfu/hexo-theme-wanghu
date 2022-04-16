import React from "react";
import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;

  section {
    max-width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  a {
    position: relative;
    padding: 12px;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 80%;
      height: 2px;
      background-color: currentColor;
      transform: translateX(-100%);
      transition: all 0.2s linear;
    }

    &:hover {
      &::after {
        transform: translateX(12.5%);
      }
    }
  }
`;

export const Tags: FC<HexoComponentProps> = ({ site, tag_cloud }) => {
  return (
    <Wrapper>
      <section
        dangerouslySetInnerHTML={{
          __html: tag_cloud(site.tags, {
            color: true,
            min_font: 14,
            max_font: 32,
            class: "tag",
            start_color: "#8590a6",
            end_color: "#06f",
          }),
        }}
      ></section>
    </Wrapper>
  );
};
