import React, { FC } from "react";
import styled from "styled-components";
import { SidebarSection } from "../../components";
import { usePage } from "../../_context";

const Wrapper = styled(SidebarSection)`
  height: 75px;
  display: flex;

  a {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      * {
        color: #175199 !important;
      }
    }
  }

  a + a {
    border-left: 1px solid #ebebeb;
  }

  span {
    font-size: 14px;
    color: #8590a6;
    line-height: 1.6;
  }

  i {
    line-height: 1.6;
    font-size: 18px;
    color: #121212;
    font-weight: 600;
    font-synthesis: style;
  }
`;

export const Follow: FC = () => {
  const { url_for, theme, __ } = usePage();

  return (
    <Wrapper>
      <a href={url_for("/following")}>
        <span>{__("user.following")}</span>
        <i>{theme.following.length ?? 0}</i>
      </a>

      <a>
        <span>{__("user.followers")}</span>
        <i>{theme.user.followers ?? 0}</i>
      </a>
    </Wrapper>
  );
};
