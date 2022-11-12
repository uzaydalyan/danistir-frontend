import React from 'react'
import '../scss/ConsultantServiceSettings.scss'
import { Checkbox } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChipSelector from "../../../CommonComponents/js/ChipSelector";
import { useState, useEffect, useRef } from 'react';

function ConsultantServiceSettings() {

    const [weekDayHourCount, setWeekDayHourCount] = useState([1, 1, 1, 1, 1, 1, 1])

    const hours = [
        '08:00',
        '08:00',
        '08:00',
        '08:00',
        '08:00',
        '08:00',
        '08:00',
        '08:00',
        '08:00',
        '08:00',
        '08:00',
    ]
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    return (
        <div className='consultant-service-settings'>
            <h3 className="form-title">Hizmet Düzenlemeleri</h3>
            <div className='account-all-content'>

                <div className='c-account-section-title'>Hizmetler</div>
                <div className='c-account-services'>
                    <ChipSelector options={names} label={"Hizmetler"} />
                </div>

                <div className='c-account-section-title'>Hizmet Saatleri</div>
                <div className='c-account-service-hours'>
                    <div className='c-account-service-row'>
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Pazartesi</div>

                        <div className='c-account-service-option-section'>
                            <div className='c-account-service-option-section-row'>
                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>

                                <div className='c-account-horizontal-seperator'></div>

                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </div>

                            <div className='c-account-service-option-section-row'>
                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>

                                <div className='c-account-horizontal-seperator'></div>

                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </div>
                        </div>

                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Pazartesi</div>

                        <div className='c-account-service-option-section'>
                            <div className='c-account-service-option-section-row'>
                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>

                                <div className='c-account-horizontal-seperator'></div>

                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </div>
                        </div>

                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Pazartesi</div>

                        <div className='c-account-service-option-section'>
                            <div className='c-account-service-option-section-row'>
                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>

                                <div className='c-account-horizontal-seperator'></div>

                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </div>
                        </div>

                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Pazartesi</div>

                        <div className='c-account-service-option-section'>
                            <div className='c-account-service-option-section-row'>
                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>

                                <div className='c-account-horizontal-seperator'></div>

                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </div>
                        </div>

                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Pazartesi</div>

                        <div className='c-account-service-option-section'>
                            <div className='c-account-service-option-section-row'>
                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>

                                <div className='c-account-horizontal-seperator'></div>

                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </div>
                        </div>

                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Pazartesi</div>

                        <div className='c-account-service-option-section'>
                            <div className='c-account-service-option-section-row'>
                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>

                                <div className='c-account-horizontal-seperator'></div>

                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </div>
                        </div>

                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Pazartesi</div>

                        <div className='c-account-service-option-section'>
                            <div className='c-account-service-option-section-row'>
                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>

                                <div className='c-account-horizontal-seperator'></div>

                                <Select
                                    defaultValue={'08:00'}
                                    label="Start"
                                >
                                    {hours.map((hour, index) => {

                                        return (
                                            <MenuItem value={hour}>{hour}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </div>
                        </div>

                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ConsultantServiceSettings;