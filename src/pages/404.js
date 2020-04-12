import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Nice try!" />
    <h1>Nothing here, nice try!</h1>
    <p>
      Go <Link to="/">home</Link>
    </p>
  </Layout>
)

export default NotFoundPage
