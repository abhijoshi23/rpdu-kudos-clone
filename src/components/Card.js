import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import { Gif } from "@giphy/react-components"
// import { GiphyFetch } from "@giphy/js-fetch-api"
// import { useAsync } from "react-async-hook"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

////Giphy API key
// const gf = new GiphyFetch("pPpjPbnxhrccqEzHjNvYuQ7tW1JcCbsE")

// const GifDisplay = ({ gifID }) => {
//     const [gif, setGif] = React.useState(null)
//     useAsync(async () => {
//         if (gifID !== null) {
//             const gifData = await gf.gif(gifID)  //////////////////
//             setGif(gifData)
//         }
//     }, [])

//     return gif === null ? <h1>Error!</h1> : <Gif gif={gif} width={200} />
// }


export default function RecipeReviewCard({ kudos }) {
    const colorList = ["#CD0000", "#118847", "#FFD440", "#1080A6", "#551A8B", "#009ADB"]

    const randomColor = () => {
        return colorList[Math.floor(Math.random() * colorList.length)]
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, boxShadow: 10 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: randomColor() }} aria-label="recipe">
                        {kudos.sender[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={kudos.sender}
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Send Kudos to <strong>@Receiver1 </strong><strong>@Receiver2 </strong>
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <div>
                {/* <GifDisplay gifID={kudoInfo.kudoGif} /> */}
                {/* <Gif gif={gifInfo} width={200} /> */}
            </div>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    "This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like."
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
        </Card>
    );
}
