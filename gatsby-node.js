const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const triviaPostTemplate = path.resolve("src/components/Trivia.js")

  return graphql(
    `
      query AllTrivia {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                topic
                title
              }
              html
              id
            }
          }
        }
      }
    `,
    {}
  ).then(result => {
    if (result.errors) throw result.errors

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.id}`,
        component: triviaPostTemplate,
        context: {
          id: edge.node.id,
        },
      })
    })
  })
}
