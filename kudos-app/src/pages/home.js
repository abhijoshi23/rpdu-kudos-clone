import * as React from "react"
import Card from "../components/Card"
import Layout from "../components/layout"
import Seo from "../components/seo"

import data from "../data.json"
import * as styles from "../styles/home.module.css"

const HomePage = () => (
    <Layout>
        <div style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
        }}>
            <h1>Kudos Home Page</h1>
            <p>Welcome to Kudos Page</p>
            <div className={styles.kudosGrid}>
                {data.map(ele => {
                    return <Card key={ele.id} kudos={ele} />
                })}
            </div>

        </div>
    </Layout>
)

export const Head = () => <Seo title="Kudos Page" />

export default HomePage
