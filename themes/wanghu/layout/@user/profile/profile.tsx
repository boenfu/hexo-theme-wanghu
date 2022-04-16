import React, { FC } from "react";
import styled from "styled-components";
import { Item } from "./@item";

import City from "./city.svg";
import Industry from "./industry.svg";
import Education from "./education.svg";
import { usePage } from "../../_context";

const Wrapper = styled.div`
  > div + div {
    margin-top: 16px;
  }
`;

export const Profile: FC = () => {
  const { theme } = usePage();

  let { city, industry, job, school, major } = theme.user?.profile ?? {};

  return (
    <Wrapper>
      <Item icon={<City />} texts={[city]} />
      <Item icon={<Industry />} texts={[industry, job]} />
      <Item icon={<Education />} texts={[school, major]} />
    </Wrapper>
  );
};
