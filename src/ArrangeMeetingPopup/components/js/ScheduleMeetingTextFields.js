import * as React from 'react';
import ChipSelector from '../../../CommonComponents/js/ChipSelector';
import { TextField } from '@mui/material';
import '../scss/ScheduleMeetingTextFields.scss'

export default function ScheduleMeetingTextField(props) {

    const [field, setField] = React.useState('Controlled');

    const handleChange = (event) => {
        setField(event.target.value);
    };

    const[subAreas, setSubAreas] = React.useState([]);
    const[optionsReady, setOptionsReady] = React.useState(false);

    React.useEffect(() => {

        let tmpArray = [...subAreas]

        props.subAreas.map((area, index) => {
            tmpArray.push(area.name)
        })

        setSubAreas(tmpArray)
        setOptionsReady(true)

    }, [])

    return (

        <div className='schedule-text-fields'>
            <div className='text-field-title'>Danışmak istediğiniz alan:</div>
            {optionsReady && <ChipSelector allOptions={subAreas} updateCurrentOptions={() => {}} currentOptions={[]} label="Alan" />}
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