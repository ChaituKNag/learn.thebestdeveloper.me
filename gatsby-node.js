const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const triviaPostTemplate = path.resolve("src/components/Trivia.js")

  return graphql(
    `
      query AllTriviaIds {
        allFile(filter: { ext: { eq: ".md" } }) {
          edges {
            node {
              name
              id
            }
          }
        }
      }
    `,
    {}
  ).then(result => {
    if (result.errors) throw result.errors

    result.data.allFile.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.name}`,
        component: triviaPostTemplate,
        context: {
          name: edge.node.name,
          nameRegex: `/.*${edge.node.name}.*/`,
        },
      })
    })
  })
}
