import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../scss/MinMaxSelector.scss'

export default function MinMaxSelector() {
    return (
        <div className='min-max-selector'>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                }}
            >
                <TextField
                    id="outlined-number"
                    label="En Düşük"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <div className='min-max-selector-seperator'></div>
                <TextField
                    id="outlined-number"
                    label="En Yüksek"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
        </div>

    );
}