import * as React from 'react';
import ChipSelector from '../../../CommonComponents/js/ChipSelector';
import { TextField } from '@mui/material';
import '../scss/ScheduleMeetingTextFields.scss'

export default function ScheduleMeetingTextField() {

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
    ];

    const [field, setField] = React.useState('Controlled');

    const handleChange = (event) => {
        setField(event.target.value);
    };

    return (

        <div className='schedule-text-fields'>
            <div className='text-field-title'>Danışmak istediğiniz alan:</div>
            <ChipSelector options={names} label="Alan" />
            <div className='text-field-title'>Sorununuz hakkında kısa bilgilendirme:</div>
            <TextField
                id="outlined-multiline-static"
                label="Bilgi"
                onChange={handleChange}
                multiline
                rows={4}
                maxRows={4}
            />
        </div>

    );
}