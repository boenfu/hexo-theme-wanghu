import React, { FC } from "react";
import { MarkdownPage } from "./@page";

export const Messages: FC<HexoComponentProps> = (hexo) => (
  <MarkdownPage
    file="messages"
    placeholder={"有什么想说的，请给我留言～"}
    hexo={hexo}
  />
);
