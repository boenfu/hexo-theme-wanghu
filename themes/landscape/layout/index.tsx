import { ComponentProps } from "hexo-renderer-react-styled";
import React, { FC } from "react";
import styled from "styled-components";

const App = styled.div``;

const Component: FC<ComponentProps> = ({ site, list_posts }) => {
  return <App>{list_posts(site.posts)}</App>;
};

export default Component;
