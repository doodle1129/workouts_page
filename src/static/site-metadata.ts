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
  logo: 'https://avatars.githubusercontent.com/u/189682565?s=400&u=ea676e2a2dd59ee5a1f28ea5d9a1900ddc3c3727&v=4',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Running Page',
      url: 'https://doodle1129.github.io/running_page/',
    },
    {
      name: 'About',
      url: 'https://github.com/ben-29/workouts_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
