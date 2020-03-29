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
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
  ],
}
