module.exports = {
  siteMetadata: {
    title: `Learn with Naga`,
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
        name: `Learn with Naga`,
        short_name: `Learn TBD`,
        start_url: `/`,
        background_color: `#0f2c4b`,
        theme_color: `#0f2c4b`,
        display: `minimal-ui`,
        icon: `src/images/learnwithnaga.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Serif Pro`,
            variants: [`400`, `700`],
          },
          {
            family: `Ubuntu Condensed`,
            variants: [`400`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
