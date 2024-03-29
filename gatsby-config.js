module.exports = {
  siteMetadata: {
    title: '現実逃避跡地',
    siteName: 'Escapism',
    siteUrl: 'https://ayata3.github.io/',
    description:
      'サークル「現実逃避跡地」のホームページです。',
    social: {
      twitter: 'ayata_taguchi_',
    },
  },
  pathPrefix: '/Escapism',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        tailwind: true,
        whilelist: [],
        ignore: [],
        purgeOnly: [],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
        ignore: ['**/.*'], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        checkSupportedExtensions: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '現実逃避跡地',
        short_name: 'Escapism',
        start_url: '/',
        background_color: '#000',
        theme_color: '#f6ad55',
        display: 'minimal-ui',
        icon: './src/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ayata3.github.io/Escapism',
        sitemap:
          'https://ayata3.github.io/Escapism/sitemap.xml',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-LD48SW7ZST'],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
