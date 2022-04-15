import React, { FC } from "react";
import styled from "styled-components";
import { Item } from "./@item";

import City from "./city.svg";
import Industry from "./industry.svg";
import Education from "./education.svg";

const Wrapper = styled.div`
  > div + div {
    margin-top: 16px;
  }
`;

export const Profile: FC<HexoComponentProps["theme"]["user"]["profile"]> = ({
  city,
  industry,
  job,
  school,
  major,
}) => {
  return (
    <Wrapper>
      <Item icon={<City />} texts={[city]} />
      <Item icon={<Industry />} texts={[industry, job]} />
      <Item icon={<Education />} texts={[school, major]} />
    </Wrapper>
  );
};
