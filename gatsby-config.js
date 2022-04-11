module.exports = {
  siteMetadata: {
    title: 'Ben Tracy | Mortgages Made Personal',
    siteUrl: 'https://www.bentracy.com',
    description:
      'A mortgage touches every part of your financial life. It\'s difficult to separate a mortgage from your kids college tuition, your dream car, or even your retirement.',
    keywords: 'ben tracy, mortgage, broker, mortgage broker',
    author: '@bentracy',
    pathname: 'https://www.bentracy.com',
    region: 'Louisville',
    position: '38.2034039,-85.7799142',
    icon: 'src/images/favicons/apple-touch-icon-180x180.png',
    youtubeUrl: 'https://www.youtube.com/channel/UCT9SMiQFeyZQBuhwVjOuzvg',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-tsconfig-paths',
      options: {
        configFile: `${__dirname}/jsconfig.json`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'G-05R61XGPVM',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
