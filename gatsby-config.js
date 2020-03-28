module.exports = {
  siteMetadata: {
    siteName: `Escapism`,
    exampleUrl: `https://ayata3.github.io/Escapism/`,
  },
  pathPrefix: `Escapism`,
  plugins: [
    `gatsby-plugin-typescript`,
    { resolve: `gatsby-plugin-google-analytics`, options: { trackingId: `UA-139333253-2` } },
  ],
}
