module.exports = {
  siteMetadata: {
    siteName: 'Escapism',
    exampleUrl: 'https://ayata3.github.io/Escapism/',
  },
  pathPrefix: 'Escapism',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-139333253-2' },
    },
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-twitter',
  ],
}
