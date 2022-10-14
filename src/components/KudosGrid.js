import * as React from "react"

import { Gif, Grid } from "@giphy/react-components"
import { GiphyFetch } from "@giphy/js-fetch-api"
//import { useAsync } from "react-async-hook"
import ResizeObserver from "react-resize-observer";

////Giphy API key
const giphyFetch = new GiphyFetch("pPpjPbnxhrccqEzHjNvYuQ7tW1JcCbsE")

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