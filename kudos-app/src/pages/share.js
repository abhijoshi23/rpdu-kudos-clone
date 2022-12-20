import * as React from "react"
import Card from "../components/Card"
import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../styles/home.module.css"


const ShareKudos = ({ location }) => {

    const search = new URLSearchParams(location.search)
    const query = search.get("query")
    
    const [kudo, setKudo] = React.useState([])

    const kudoShare = id =>{
        navigator.clipboard
        .writeText(`${location.origin}/share/?query=${id}`)
        .then(() => {
          alert("Kudo Link Copied!")
        })
        .catch(() => {
          alert("Something went wrong when copying URL!")
        })
    }

    React.useEffect(() => {
        fetch("http://localhost:8000/api/kudos")
            .then(result => result.json())
            .then((json) => { setKudo(json.data.filter(data=>data._id === query))});
    }, [])

   
    return (
        <div>
            <Layout>
                <div style={{
                    margin: `0 auto`,
                    maxWidth: `var(--size-content)`,
                    padding: `var(--size-gutter)`,
                    minHeight: `70vh`
                }}>
                    <h3>Check My Shared Kudos</h3>
                    <hr />
                    <div className={styles.kudosGrid}>
                        {kudo.map(ele => {
                            return <Card key={ele._id} kudos={ele} kudoShare={kudoShare}/>
                        })}
                    </div>
                </div>
            </Layout>
        </div>


    )
}

export const Head = () => <Seo title="Kudos Page" />

export default ShareKudos