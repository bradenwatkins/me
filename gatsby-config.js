module.exports = {
  siteMetadata: {
    siteTitle: `bradenwatkins.dev`,
    siteTitleAlt: `The personal website for Braden Watkins`,
    siteHeadline: `The personal website for Braden Watkins`,
    siteUrl: `https://bradenwatkins.dev`,
    siteDescription: `A developer centric blog and portfolio site for Braden Watkins`,
    siteLanguage: `en`,
    siteImage: `./static/profile-picture.jpg`,
    author: `@_bradenwatkins`,
    externalLinks: [
      { name: `Github`, url: `https://github.com/bradenwatkins` },
      { name: `LinkedIn`, url: `https://linkedin.com/in/bradenwatkins` },
    ],
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `@lekoarts/gatsby-theme-minimal-blog`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/static/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `          
          {
            site {
              siteMetadata {
                siteTitle
                siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdxPost } }) => {
              return allMdxPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdxPost(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      excerpt
                      html
                      slug
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "bradenwatkins.dev",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
  ],
}
