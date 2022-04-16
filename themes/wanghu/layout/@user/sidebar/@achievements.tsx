import React, { createElement, FC } from "react";
import styled from "styled-components";
import { SidebarSection } from "../../components";
import { usePage } from "../../_context";

const List = styled(SidebarSection)`
  > h2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    color: #646464;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 12px 0;
`;

const Achievement = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  height: 60px;
  font-size: 15px;
  padding: 6px 20px;
  color: #646464;

  > svg {
    flex-shrink: 0;
    width: 18px;
    font-size: 1.2em;
    margin-right: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      box-sizing: border-box;
      margin: 0;
      margin-top: 6px;
      font-size: 14px;
      line-height: 20px;
      color: #8590a6;
    }
  }
`;

export const Achievements: FC = () => {
  const { theme, svgr, __ } = usePage();

  let { achievements } = theme.user ?? {};

  return (
    <List>
      <h2>{__("user.achievements")}</h2>
      <Wrapper>
        {achievements?.length
          ? achievements.map(({ icon, title, description }, index) => {
              let { src, ...props } =
                typeof icon === "string" ? { src: icon } : icon;

              return (
                <Achievement key={index}>
                  {createElement(svgr(src), props)}
                  <div>
                    {title}
                    <span>{description}</span>
                  </div>
                </Achievement>
              );
            })
          : undefined}
      </Wrapper>
    </List>
  );
};
