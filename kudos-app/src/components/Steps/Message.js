import * as React from 'react';
import TextField from '@mui/material/TextField';

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
        </div>
    );
}
