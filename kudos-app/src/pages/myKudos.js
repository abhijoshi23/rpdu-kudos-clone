import * as React from "react"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import Card from "../components/Card"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/home.module.css"
import ScrollButton from "../components/scrollButton"
import { useMsal } from "@azure/msal-react";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const MyKudos = ({location}) => {
    const { accounts } = useMsal();
    const user = accounts[0] && accounts[0].name.split("(")[0];
    const userID = accounts[0] && accounts[0].localAccountId

    const [sentKudos, setSentKudos] = React.useState([])
    const [receivedKudos, setReceivedKudos] = React.useState([])
    const [likedKudos, setLikedKudos] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:8000/api/kudos")
            .then(result => result.json())
            .then((json) => {
                setSentKudos(json.data.filter(data => data.sender === user))
                setReceivedKudos(json.data.filter(data => data.receiver?.includes(user)))
                setLikedKudos(json.data.filter(data => data.people?.includes(userID)))
            });
    }, [])

    //manage tabs
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    return (
        <Layout>
            <div style={{
                margin: `0 auto`,
                maxWidth: `var(--size-content)`,
                padding: `var(--size-gutter)`,
                minHeight: `70vh`
            }}>
                <h3>Check My Kudos</h3>
                <hr />

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                        <Tabs value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            textColor="secondary"
                            indicatorColor="secondary">
                            <Tab label="Kudos Sent" {...a11yProps(0)} />
                            <Tab label="Kudos Received" {...a11yProps(1)} />
                            <Tab label="Collection" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} >
                        <div className={styles.kudosGrid}>
                            {sentKudos.map(ele => {
                                return <Card key={ele._id} id={ele._id} kudos={ele} kudoShare={kudoShare} />
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className={styles.kudosGrid}>
                            {receivedKudos.map(ele => {
                                return <Card key={ele._id} id={ele._id} kudos={ele} kudoShare={kudoShare}/>
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className={styles.kudosGrid}>
                            {likedKudos.map(ele => {
                                return <Card key={ele._id} id={ele._id} kudos={ele} kudoShare={kudoShare} />
                            })}
                        </div>
                    </TabPanel>
                </Box>
                <ScrollButton />
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="My Kudos Page" />

export default MyKudos
