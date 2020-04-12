module.exports = {
  siteMetadata: {
    title: `Learn | TheBestDeveloper.me`,
    description: `This web-site can be used by anyone who wish to have a fun way of learning technical trivia like me!`,
    author: `@ChaituKNag`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Comic Neue`,
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
