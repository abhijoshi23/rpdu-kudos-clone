import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


const HomePage = () => (
    <Layout>
        <div style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
        }}>
            <h1>Kudos Home Page</h1>
            <p>Welcome to Kudos Page</p>

        </div>
    </Layout>
)

export const Head = () => <Seo title="Kudos Page" />

export default HomePage
