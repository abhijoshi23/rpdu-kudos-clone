import * as React from "react"

import { Gif, Grid } from "@giphy/react-components"
import { GiphyFetch } from "@giphy/js-fetch-api"
//import { useAsync } from "react-async-hook"
import ResizeObserver from "react-resize-observer";

////Giphy API key
const giphyFetch = new GiphyFetch("pPpjPbnxhrccqEzHjNvYuQ7tW1JcCbsE")

// const kudosData = [
//     {
//         "id": "3r",
//         "sender": "Matthew Brown",
//         "receiver": "Amy Fan",
//         "kudosType": 2,
//         "kudosMessage": "yay",
//         "kudoGif": "tsX3YMWYzDPjAARfeg",
//         "kudosLikes": 0,
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1660756939427"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1660756939434"
//             }
//         },
//         "__v": 0
//     }, {
//         "id": "2s",
//         "sender": "Tester Test",
//         "receiver": "test",
//         "kudosType": 2,
//         "kudosMessage": "test",
//         "kudoGif": "bbshzgyFQDqPHXBo4c",
//         "kudosLikes": 0,
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1660757033089"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1660757033092"
//             }
//         },
//         "__v": 0
//     }, {
//         "id": "1a",
//         "sender": "Matthew Brown",
//         "receiver": "Amy Fan",
//         "kudosType": 1,
//         "kudosMessage": "test message",
//         "kudoGif": "StKiS6x698JAl9d6cx",
//         "kudosLikes": 0,
//         "createdAt": {
//             "$date": {
//                 "$numberLong": "1660757795313"
//             }
//         },
//         "updatedAt": {
//             "$date": {
//                 "$numberLong": "1660757795327"
//             }
//         },
//         "__v": 0
//     }
// ]


function KudosGrid({ onGifClick }) {
    const fetchGifs = (offset) =>
        giphyFetch.trending({ offset, limit: 10 });
    const [width, setWidth] = React.useState(window.innerWidth);
    return (
        <>
            <Grid
                onGifClick={onGifClick}
                fetchGifs={fetchGifs}
                width={width}
                columns={3}
                gutter={6}
            />
            <ResizeObserver
                onResize={({ width }) => {
                    setWidth(width);
                }}
            />
        </>
    );
}

export default KudosGrid