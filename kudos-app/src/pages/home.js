import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = () => (
    <Layout>
        <h1>Kudos Home Page</h1>
        <p>Welcome to Kudos Page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export const Head = () => <Seo title="Home Page" />

export default HomePage
