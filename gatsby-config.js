module.exports = {
  siteMetadata: {
    siteTitle: `bradenwatkins.dev`,
    siteTitleAlt: `The personal website for Braden Watkins`,
    siteHeadline: `The personal website for Braden Watkins`,
    siteUrl: `https://bradenwatkins.dev`,
    siteDescription: `A developer centric blog and portfolio site for Braden Watkins`,
    siteLanguage: `en`,
    siteImage: `/gatsby-icon.png`,
    author: `@bradenwatkins`,
    externalLinks: [
      { name: `Github`, url: `https://github.com/bradenwatkins` },
    ],
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `@lekoarts/gatsby-theme-minimal-blog`,
  ],
}
