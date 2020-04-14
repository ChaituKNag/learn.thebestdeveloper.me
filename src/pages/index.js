import React, { useEffect } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, navigate } from "gatsby"
import randomLink from "../utils/random-link"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
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
  `)

  useEffect(() => {
    if (data.allFile.edges) {
      let { node } = randomLink(data.allFile.edges)
      navigate(`/${node.name}`, { replace: true })
    }
  }, [data])
  return <Layout>Loading...</Layout>
}

export default IndexPage
