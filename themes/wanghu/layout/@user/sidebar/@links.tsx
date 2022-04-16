import React, { FC } from "react";
import styled from "styled-components";
import { SidebarSection } from "../../components";
import { usePage } from "../../_context";

const Link = styled.a`
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 14px;
  color: #8590a6;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
    color: #76839b;
  }
`;

const List = styled(SidebarSection)`
  background-color: transparent;
  box-shadow: none;

  ${Link} {
    justify-content: space-between;
    padding: 0;
    padding-left: 5px;
    height: 46px;
    border-top: 1px solid #ebebeb;
    color: #646464;

    span {
      color: #8590a6;
    }
  }
`;

export const Links: FC = () => {
  const { page, url_for, __ } = usePage();

  return (
    <List>
      <Link href={url_for("/index")}>
        {__("user.created_text")}
        {__("posts")} <span>{page.posts.length}</span>
      </Link>

      <Link href={url_for("/category")}>
        {__("user.created_text")}
        {__("categories")} <span>{page.categories.length}</span>
      </Link>

      <Link href={url_for("/tag")}>
        {__("user.created_text")}
        {__("tags")} <span>{page.tags.length}</span>
      </Link>
    </List>
  );
};
