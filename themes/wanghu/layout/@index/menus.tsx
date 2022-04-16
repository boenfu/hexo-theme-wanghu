import React, { createElement } from "react";
import { FC } from "react";
import styled from "styled-components";
import { SidebarSection } from "../components";
import { usePage } from "../_context";

const Wrapper = styled(SidebarSection)`
  padding: 20px 10px 0;
`;

const MenuIcon = styled.div`
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: currentColor;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuLabel = styled.div`
  font-size: 15px;
  color: #8590a6;
  transition: all 0.2s linear;
`;

const MenuItem = styled.a`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    ${MenuLabel} {
      color: currentColor;
    }
  }
`;

export const Menus: FC = () => {
  const {
    theme: { menus = [] },
  } = usePage();

  return (
    <Wrapper>
      {menus.map(({ icon, text, url, color }, index) => {
        return (
          <MenuItem key={index} href={url} style={{ color }}>
            <MenuIcon>
              <img src={icon} alt={text} />
            </MenuIcon>
            <MenuLabel>{text}</MenuLabel>
          </MenuItem>
        );
      })}
    </Wrapper>
  );
};
