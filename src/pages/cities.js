import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CitiesList from "../components/CitiesList"

const citiesPage = () => (
    <Layout>
        <SEO title="Home" />
        <Link to="/">Back to home</Link>

        <section className="cities">
            <CitiesList />
        </section>
    </Layout>
)

export default citiesPage


