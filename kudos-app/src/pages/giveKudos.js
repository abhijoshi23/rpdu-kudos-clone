import * as React from "react"
import { Link } from "gatsby"
import KudosGrid from "../components/KudosGrid"

import Layout from "../components/layout"
import Seo from "../components/seo"

const GiveKudosPage = () => (
    <Layout>
        <div style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
        }}>
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
            <KudosGrid />

        </div>

    </Layout>
)

export const Head = () => <Seo title="Give Kudos" />

export default GiveKudosPage
