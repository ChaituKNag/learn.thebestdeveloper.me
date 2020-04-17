import React, { useEffect } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, navigate } from "gatsby"
import randomLink from "../utils/random-link"
import Skeleton from "@material-ui/lab/Skeleton"

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
  return (
    <Layout>
      <Skeleton variant="text" width="50%" height="50px" animation="wave" />
      <Skeleton
        variant="rect"
        width={`100%`}
        height={"50vh"}
        animation="wave"
      />
    </Layout>
  )
}

export default IndexPage
