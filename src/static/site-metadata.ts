interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Page',
  siteUrl: 'https://doodle1129.github.io/workouts_page/',
  logo: 'https://www.apple.com.cn/newsroom/cn/images/product/watch/standard/Apple-Watch-Celebrates-National-Fitness-Day_Sticker-Badge-1_08062021_inline.gif.large.gif',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://doodle1129.github.io/workouts_page/',
    },
    {
      name: 'About',
      url: 'https://github.com/ben-29/workouts_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
