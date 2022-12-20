import * as React from "react"
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Banner"
import * as styles from "../styles/index.module.css"

const IndexPage = () => {
  const [kpi, setKpi] = React.useState({})

  React.useEffect(() => {
    fetch("http://localhost:8000/api/kudos/kpi")
      .then(res => res.json())
      .then(data => setKpi(data))
  })

  return (
    <Layout>

      {/* <AuthenticatedTemplate>
          <h1>Authenticated</h1>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
          <h1>Unauthenticated</h1>
      </UnauthenticatedTemplate> */}

      <Seo title="Home" />
      <div>
        <Banner />
      </div>
      <div style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}>
        <div className="ontario-callout">
          <h2 className="ontario-callout__title ontario-h5">Welcome to Kudos!</h2>
          <p className={styles.paragraph}><strong>{kpi.recent}</strong> Kudos created in the past 30 days, <strong>{kpi.total}</strong> Kudos created in total, </p>
          <p className={styles.paragraph}><Link to="/login">Sign up</Link> to Kudos and you can create and share your gratitude</p>
        </div>

        <div className={styles.entryBtnGroup}>
          <div className={styles.btnBox}>
            <Link to='/giveKudos' className="ontario-button ontario-button--primary">Create New Kudo</Link>
            <p className={styles.infoText}>Here you can customize and create your own special kudos from variety of templates </p>
          </div>

          <div className={styles.btnBox}>
            <Link to='/myKudos' className="ontario-button ontario-button--secondary">Check My Kudos</Link>
            <p className={styles.infoText}>Here you can check out those Kudos you just sent or received from other colleagues </p>
          </div>

        </div>

      </div>

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
