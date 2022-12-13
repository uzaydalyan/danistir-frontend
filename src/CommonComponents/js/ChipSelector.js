import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CancelRounded from '@mui/icons-material/CancelRounded'
import { set } from 'date-fns';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(one, option, theme) {
  return {
    fontWeight:
      option.indexOf(one) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



export default function ChipSelector(props) {

  const [options, setOptions] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)
  const theme = useTheme();
  const [option, setOption] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOption(
      typeof value === 'string' ? value.split(',') : value
    );
    
  };

  const handleDelete = (optionToDelete) => {
    setOption( (allOptions) =>  allOptions.filter(one => one !== optionToDelete));
}

  React.useEffect(() => {
    console.log(props)
    setOption(props.currentOptions);
    setOptions(props.allOptions);
    setLoaded(true)
  }, [])

  React.useEffect(() => {
    if(loaded){
      props.updateCurrentOptions(option)
    }
  }, [loaded, option, props])


  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">{props.label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={option}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={props.label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} onDelete={(e) => handleDelete(value)} deleteIcon={
                    <CancelRounded
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  } />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((one) => (
            <MenuItem
              key={one}
              value={one}
              style={getStyles(one, option, theme)}
            >
              {one}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
