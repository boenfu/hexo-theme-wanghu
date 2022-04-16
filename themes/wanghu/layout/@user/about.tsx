import React, { FC } from "react";
import { MarkdownPage } from "./@page";

export const About: FC<HexoComponentProps> = (hexo) => (
  <MarkdownPage
    file="about"
    placeholder={"Ta 还没有准备好介绍自己"}
    hexo={hexo}
  />
);
