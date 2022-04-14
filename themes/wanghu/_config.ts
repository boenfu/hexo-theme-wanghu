export interface WanghuUser {
  name?: string;
  description?: string;
  avatar?: string;
  /**
   * email account, if set, will instead avatar
   */
  gravatar?: string;
}

interface ExtraProfile {
  city?: string;
  industry?: string;
  job?: string;
  school?: string;
  major?: string;
}

export interface WanghuConfig {
  title?: string;
  /**
   * user configuration
   */
  user: WanghuUser & {
    cover: string;
    profile: ExtraProfile;
    achievements: {
      title: string;
      icon:
        | string
        | {
            src: string;
            color: string;
          };
      description?: string;
    }[];
    /**
     * just fill it in and have a good time
     */
    followers: number;
  };
  following: WanghuUser[];
  /**
   * home page menus
   */
  menus: {
    icon: string;
    color: string;
    text: string;
    url: string;
  }[];
  footers: {
    text: string;
    url?: string;
  }[];
  /**
   * Comment configuration
   */
  comments?: {
    /**
     * see https://utteranc.es/
     */
    utteranc?: {
      repo: string;
      theme: string;
      "issue-term": string;
    };
  };
}

const defaultConfig: WanghuConfig = {
  title: "忘乎",
  user: {
    gravatar: "1997@boenfu.cn",
    cover: "https://avatars.githubusercontent.com/u/33797740?v=4",
    achievements: [
      {
        title: "优秀答主",
        icon: "icons/a",
        description: "前端开发 话题",
      },
      {
        title: "获得 1,024 次赞同",
        icon: "icons/a",
        description: "获得 512 次喜欢，512 次收藏",
      },
    ],
    profile: {
      city: "Chengdu",
      industry: "Internet",
      job: "Frontend Engineer",
    },
    followers: 9981,
  },
  following: [
    {
      name: "格桑",
      gravatar: "1997@boenfu.cn",
      description: "A web dog.",
    },
  ],
  menus: [
    {
      text: "Github",
      icon: "icons/a",
      color: "#000",
      url: "https://github.com/boenfu",
    },
    {
      text: "Twitter",
      icon: "icons/a",
      color: "#000",
      url: "https://twitter.com/boenfu",
    },
    {
      text: "Mail",
      icon: "icons/a",
      color: "#000",
      url: "mailto:sonebobo@gmail.com",
    },
  ],
  footers: [
    {
      text: "Boen 的个人博客",
    },
    {
      text: "蓉 ICP 证 10080 号",
      url: "https://www.miitbeian.gov.cn/",
    },
    {
      text: "联系我",
      url: "mailto:sonebobo@gmail.com",
    },
    {
      text: "Power by Hexo & Wanghu",
      url: "https://github.com/boenfu/hexo-theme-wanghu",
    },
    {
      text: "Copyright © 2022 Boenfu.",
    },
  ],
  comments: {
    utteranc: {
      repo: "boenfu/growth",
      "issue-term": "pathname",
      theme: "github-light",
    },
  },
};

export default defaultConfig;
