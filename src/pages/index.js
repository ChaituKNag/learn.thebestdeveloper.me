import React, { useEffect } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, navigate } from "gatsby"
import randomLink from "../utils/random-link"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AllTriviaIds {
      allMarkdownRemark {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (data.allMarkdownRemark.edges) {
      let { node } = randomLink(data.allMarkdownRemark.edges)
      navigate(`/${node.id}`, { replace: true })
    }
  }, [data])
  return <Layout>Loading...</Layout>
}

export default IndexPage
