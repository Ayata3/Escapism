module.exports = {
  siteMetadata: {
    siteName: `Escapism`,
    exampleUrl: `https://ayata3.github.io/Escapism/`,
  },
  pathPrefix: `Escapism`,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: `UA-139333253-2` },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        whilelist: [],
        ignore: [],
        purgeOnly: [],
      },
    },
  ],
}
