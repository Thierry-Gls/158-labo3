import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/cities">Cities</Link>
    <Link to="/records">IP Records</Link>
  </Layout>
)

export default IndexPage
