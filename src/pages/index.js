import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import Trivia from "../components/Trivia"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Trivia data={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export default IndexPage
