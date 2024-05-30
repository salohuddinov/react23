import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "./Star.css"

export default function Star() {
    return (
        <div className="starrs">
            <Stack spacing={1}>
                <Rating className='starr' name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
        </div>
    );
}
