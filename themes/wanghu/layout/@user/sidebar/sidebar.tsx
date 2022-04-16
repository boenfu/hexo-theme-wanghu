import React, { FC } from "react";
import styled from "styled-components";
import { Footer } from "../../components";
import { usePage } from "../../_context";
import { Achievements } from "./@achievements";
import { Follow } from "./@follow";
import { Links } from "./@links";

const Wrapper = styled.div`
  position: sticky;
  top: 10px;
  flex: 1;
`;

export const Sidebar: FC = () => {
  const { theme } = usePage();

  return (
    <Wrapper>
      <Achievements />
      <Follow />
      <Links />
      <Footer data={theme.footers} />
    </Wrapper>
  );
};
