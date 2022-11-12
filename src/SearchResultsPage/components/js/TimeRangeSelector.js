import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TimeRangeSelector() {
    return (
        <div className='time-range-selector'>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                }}
            >
                <TextField
                    id="beginning"
                    label="Başlangıç"
                    type="string"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <div className='time-range-selector-seperator'></div>
                <TextField
                    id="end"
                    label="Bitiş"
                    type="string"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
        </div>

    );
}