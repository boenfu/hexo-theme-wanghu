export interface WanghuUser {
  name: string;
  description?: string;
  avatar?: string;
  /**
   * email account, if set, will instead avatar
   */
  gravatar?: string;
}

export interface WanghuUserProfile {
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
    profile: WanghuUserProfile;
    achievements: {
      title: string;
      icon: string;
      description?: string;
    }[];
    /**
     * just fill it in and have a good time
     */
    followers: number;
    /**
     * follow button link to
     */
    follow_url?: string;
  };
  following: (WanghuUser & {
    url: string;
  })[];
  /**
   * home page menus
   */
  menus: {
    icon: string;
    text: string;
    url: string;
    color?: string;
  }[];
  footers: {
    content: string;
    html?: boolean;
    url?: string;
  }[];
  /**
   * Comment configuration
   */
  comments?: {
    /**
     * recommend https://utteranc.es/ or https://giscus.app/
     */
    script?: string;
  };
  /**
   * Placeholder value
   */
  placeholder?: {
    postImage?: string;
  };
}

const defaultConfig: WanghuConfig = {
  title: "忘乎",
  user: {
    name: "Boen",
    description: "前端工程师",
    gravatar: "1997@boenfu.cn",
    cover: "/assets/cover.jpg",
    achievements: [
      {
        title: "2022年度熬夜冠军",
        icon: "/assets/moon.svg",
        description: "见过凌晨四点的爱丁堡",
      },
      {
        title: "书籍成色记录保持者",
        icon: "/assets/book-opened.svg",
        description: "闲鱼认证 9.99 成新",
      },
      {
        title: "日均 1,024 次搜索",
        icon: "/assets/google.svg",
        description: "执行 648 次 Ctrl + C",
      },
    ],
    profile: {
      city: "Chengdu",
      industry: "Internet",
      job: "Frontend Engineer",
      school: "Jialidun University",
    },
    followers: 4396,
    follow_url: "https://www.zhihu.com/people/geesang",
  },
  following: [
    {
      name: "格桑",
      gravatar: "1997@boenfu.cn",
      description: "A web dog.",
      url: "https://www.zhihu.com/people/geesang",
    },
  ],
  menus: [
    {
      text: "Github",
      icon: "/assets/github.svg",
      color: "#24292f",
      url: "https://github.com/boenfu",
    },
    {
      text: "Twitter",
      icon: "/assets/twitter.svg",
      color: "#1d9bf0",
      url: "https://twitter.com/boenfu",
    },
    {
      text: "Mail",
      icon: "/assets/gmail.svg",
      color: "#333",
      url: "mailto:sonebobo@gmail.com",
    },
  ],
  footers: [
    {
      content: "Boen 的个人博客",
    },
    {
      content: "联系我",
      url: "mailto:sonebobo@gmail.com",
    },
    {
      content: "皮 ICP 证 G10000 号",
      url: "https://https://github.com/boenfu/hexo-theme-wanghu",
    },
    {
      content: `<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script><span id="busuanzi_container_site_uv">访客数 <span id="busuanzi_value_site_uv"></span> 人次</span>`,
      html: true,
    },
    {
      content: "Power by Hexo & Wanghu",
      url: "https://github.com/boenfu/hexo-theme-wanghu",
    },
    {
      content: "Copyright © 2022 Boenfu.",
    },
  ],
  comments: {
    script: `<script src="https://giscus.app/client.js"
    data-repo="boenfu/hexo-theme-wanghu"
    data-repo-id="R_kgDOHJLQlw"
    data-category="Announcements"
    data-category-id="DIC_kwDOHJLQl84CPGJ4"
    data-mapping="pathname"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="bottom"
    data-theme="light"
    data-lang="zh-CN"
    data-loading="lazy"
    crossorigin="anonymous"
    async>
</script>`,
  },
  placeholder: {
    postImage: "https://picsum.photos/380/210",
  },
};

export default defaultConfig;
