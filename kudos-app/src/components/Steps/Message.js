import * as React from 'react';
import TextField from '@mui/material/TextField';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';

export default function Message() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div style={{
            textAlign: `center`,
            margin: `2rem auto`,
            maxWidth: 400,
            minWidth: 300
        }}>

            <h6>Leave Your Message Here: </h6>
            <TextField
                id="input-message"
                label="Message"
                multiline
                rows={4}
                fullWidth
            />


            <div style={{ cursor: `pointer`, display: `block`, margin: `1rem auto` }}>
                <PostAddRoundedIcon
                    color="primary"
                    fontSize="large"
                />
                <strong style={{ padding: `0 .5rem`, color: `#0066CC` }}>Add Message</strong>
            </div>
        </div>
    );
}
