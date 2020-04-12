import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Trivia from "../components/Trivia"
import Button from "../components/styled/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Trivia>It all starts here!</Trivia>
    <Button>Random Trivia</Button>
  </Layout>
)

export default IndexPage
