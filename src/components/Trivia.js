import React from "react"
import Button from "./styled/Button"
import { graphql, navigate } from "gatsby"
import Layout from "./layout"
import randomLink from "../utils/random-link"
import SEO from "./seo"

const Trivia = ({ data }) => {
  const trivia = data.markdownRemark
  const handleRandomTrivia = () => {
    if (data.allMarkdownRemark.edges) {
      let nodes = data.allMarkdownRemark.edges
      let { node } = randomLink(
        nodes,
        nodes.findIndex(t => t.node.id === trivia.id)
      )
      navigate(`/${node.id}`)
    }
  }
  return (
    <Layout>
      <SEO
        title={`${trivia.frontmatter.topic} - ${trivia.frontmatter.title}`}
      />
      <div key={trivia.id} dangerouslySetInnerHTML={{ __html: trivia.html }} />

      <Button onClick={handleRandomTrivia}>Random Trivia</Button>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SingleTrivia($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        topic
        title
      }
      html
      id
      fileAbsolutePath
    }
    allMarkdownRemark {
      edges {
        node {
          id
        }
      }
    }
  }
`

export default Trivia
