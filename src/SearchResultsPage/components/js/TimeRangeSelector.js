import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TimeRangeSelector(props) {
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
                    type="time"
                    onChange={(e) => props.handleStartChange(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <div className='time-range-selector-seperator'></div>
                <TextField
                    id="end"
                    label="Bitiş"
                    type="time"
                    onChange={(e) => props.handleEndChange(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
        </div>

    );
}