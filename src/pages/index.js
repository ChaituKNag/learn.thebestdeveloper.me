import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/styled/Button"
import { useStaticQuery, graphql } from "gatsby"

const randomIndex = maxIndex => {
  return Math.floor(Math.random() * Math.floor(maxIndex))
}

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

  const [current, setCurrent] = useState()

  useEffect(() => {
    if (data.allMarkdownRemark.edges) {
      const len = data.allMarkdownRemark.edges.length
      const idx = randomIndex(len)
      setCurrent(idx)
    }
  }, [data.allMarkdownRemark.edges])

  return (
    <Layout>
      <SEO title="Home" />
      {data.allMarkdownRemark.edges.map((trivia, idx) => {
        return idx === current ? (
          <div
            key={trivia.node.id}
            dangerouslySetInnerHTML={{ __html: trivia.node.html }}
          />
        ) : null
      })}
      {data.allMarkdownRemark.edges.length > 1 ? (
        <Button>Random Trivia</Button>
      ) : null}
    </Layout>
  )
}

export default IndexPage
