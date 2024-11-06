interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Xudong\'s Running Page',
  siteUrl: 'https://run.guoxudong.io',
  logo: 'https://cdn.suuny0826.com/image/Designer.png',
  description: 'Xudong\'s Running Personal site and open my life',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://guoxudong.io',
    },
    {
      name: 'About',
      url: 'https://about.guoxudong.io',
    },
  ],
};

export default data;
