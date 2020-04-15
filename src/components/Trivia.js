import React from "react"
import Button from "./styled/Button"
import { graphql, navigate } from "gatsby"
import Layout from "./layout"
import randomLink from "../utils/random-link"
import SEO from "./seo"

const Trivia = ({ data, pageContext }) => {
  const trivia = data.markdownRemark

  const handleRandomTrivia = () => {
    if (data.allFile.edges) {
      let nodes = data.allFile.edges
      let { node } = randomLink(
        nodes,
        nodes.findIndex(t => t.node.name === pageContext.name)
      )
      navigate(`/${node.name}`)
    }
  }
  return (
    <Layout>
      <SEO title={trivia.frontmatter.title} />
      <div key={trivia.id} dangerouslySetInnerHTML={{ __html: trivia.html }} />

      <Button onClick={handleRandomTrivia}>Random Trivia</Button>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SingleTrivia($nameRegex: String!) {
    markdownRemark(fileAbsolutePath: { regex: $nameRegex }) {
      frontmatter {
        topic
        title
      }
      html
      id
      fileAbsolutePath
    }
    allFile(filter: { ext: { eq: ".md" } }) {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`

export default Trivia
