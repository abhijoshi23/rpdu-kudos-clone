import * as React from "react"

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stepper from "../components/Stepper"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { navigate } from "gatsby"
//import * as styles from "../styles/giveKudos.module.css"



const GiveKudosPage = () => {
    const [clicked, setClick] = React.useState(false);


    const createKudos = () => {
        setClick(true);
        navigate('/home');

    }

    return (
        <Layout>
            <div style={{
                margin: `0 auto`,
                maxWidth: `var(--size-content)`,
                padding: `var(--size-gutter)`,
                minHeight: `70vh`
            }}>
                <div>
                    <h3>Create Your Own Kudo</h3>
                </div>
                <hr />
                <Stepper clicked={clicked} setClick={setClick} />

                <div style={{ padding: '4rem 0' }}>
                    <Button sx={{ float: 'right' }} variant="contained" endIcon={<SendIcon />} onClick={createKudos}>
                        Create Kudo!
                    </Button>
                </div>
            </div>

        </Layout>
    )
}

export const Head = () => <Seo title="Give Kudos" />

export default GiveKudosPage
