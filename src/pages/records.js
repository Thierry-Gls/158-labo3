import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecordsList from "../components/RecordsList"

const recordsPage = () => (
    <Layout>
        <SEO title="Home" />
        <Link to="/">Back to home</Link>

        <section className="records">
            <RecordsList />
        </section>
    </Layout>
)

export default recordsPage
