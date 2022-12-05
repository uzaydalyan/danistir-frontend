import React from 'react'
import '../scss/ConsultantServiceSettings.scss'
import { Checkbox } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChipSelector from "../../../CommonComponents/js/ChipSelector";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState, useEffect, useRef } from 'react';

const hours = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
]

function ConsultantServiceSettings() {



    const [weekDayHours, setWeekDayHours] = useState([{ day: 0, startHour: 8, startMin: 0, endHour: 9, endMin: 0 }, { day: 0, startHour: 10, startMin: 0, endHour: 13, endMin: 0 }, { day: 1, startHour: 10, startMin: 0, endHour: 13, endMin: 0 }, { day: 2, startHour: 10, startMin: 0, endHour: 13, endMin: 0 }, { day: 3, startHour: 10, startMin: 0, endHour: 13, endMin: 0 }, { day: 4, startHour: 10, startMin: 0, endHour: 13, endMin: 0 }, { day: 5, startHour: 10, startMin: 0, endHour: 13, endMin: 0 }, { day: 6, startHour: 10, startMin: 0, endHour: 13, endMin: 0 },])
    const [allHoursArray, setAllHoursArray] = useState([[], [], [], [], [], [], []])
    const [serviceTimes, setServiceTimes] = useState([])
    const [serviceDayList, setServiceDayList] = useState([])

    function convertHourToInt(hour) {

        let numberAsString = hour.split(":")[0]
        return parseInt(numberAsString)
    }

    function convertTimeToString(hour, min) {
        if (hour == null || min == null) {
            return ""
        }
        hour = hour.toString()
        if (hour.length == 1) {
            hour = "0" + hour
        }
        min = min.toString()
        if (min.length == 1) {
            min = "0" + min
        }
        let timeAsString = hour + ":" + min
        return timeAsString
    }


    function addNewRange(dayIndex) {
        let tmpArray = [...weekDayHours]

        tmpArray.push({ day: dayIndex, startHour: null, startMin: null, endHour: null, endMin: null })

        setWeekDayHours(tmpArray)
    }

    function deleteRange(rangeIndex){

        let tmpArray = [...weekDayHours]
        setWeekDayHours(tmpArray.filter((range, index) => index != rangeIndex))
    }


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
                        <div className='c-account-service-day'>Pazartesi</div>

                        <div className='c-account-service-option-section'>

                            {
                                weekDayHours.map((range, index) => {
                                    if (range.day == 0) {

                                        return (
                                            <div className='c-account-service-option-section-row'>
                                                <Select
                                                    defaultValue={convertTimeToString(range.startHour, range.startMin)}
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
                                                    defaultValue={convertTimeToString(range.endHour, range.endMin)}
                                                    label="Start"
                                                >
                                                    {hours.map((hour, index) => {

                                                        return (
                                                            <MenuItem value={hour}>{hour}</MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                                <IconButton
                                                    size='small'
                                                    onClick={() => {
                                                        deleteRange(index)
                                                    }}>
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </div>
                                        );
                                    }

                                })
                            }


                        </div>

                        <IconButton
                            onClick={() => {
                                addNewRange(0)
                            }}>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <div className='c-account-service-day'>Salı</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours.map((range, index) => {
                                    if (range.day == 1) {

                                        return (
                                            <div className='c-account-service-option-section-row'>
                                                <Select
                                                    defaultValue={convertTimeToString(range.startHour, range.startMin)}
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
                                                    defaultValue={convertTimeToString(range.endHour, range.endMin)}
                                                    label="Start"
                                                >
                                                    {hours.map((hour, index) => {

                                                        return (
                                                            <MenuItem value={hour}>{hour}</MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                                <IconButton
                                                    size='small'
                                                    onClick={() => {
                                                        deleteRange(index)
                                                    }}>
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </div>
                                        );
                                    }

                                })
                            }
                        </div>

                        <IconButton
                            onClick={() => {
                                addNewRange(1)
                            }}>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <div className='c-account-service-day'>Çarşamba</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours.map((range, index) => {
                                    if (range.day == 2) {

                                        return (
                                            <div className='c-account-service-option-section-row'>
                                                <Select
                                                    defaultValue={convertTimeToString(range.startHour, range.startMin)}
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
                                                    defaultValue={convertTimeToString(range.endHour, range.endMin)}
                                                    label="Start"
                                                >
                                                    {hours.map((hour, index) => {

                                                        return (
                                                            <MenuItem value={hour}>{hour}</MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                                <IconButton
                                                    size='small'
                                                    onClick={() => {
                                                        deleteRange(index)
                                                    }}>
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </div>
                                        );
                                    }

                                })
                            }
                        </div>

                        <IconButton
                            onClick={() => {
                                addNewRange(2)
                            }}>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <div className='c-account-service-day'>Perşembe</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours.map((range, index) => {
                                    if (range.day == 3) {

                                        return (
                                            <div className='c-account-service-option-section-row'>
                                                <Select
                                                    defaultValue={convertTimeToString(range.startHour, range.startMin)}
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
                                                    defaultValue={convertTimeToString(range.endHour, range.endMin)}
                                                    label="Start"
                                                >
                                                    {hours.map((hour, index) => {

                                                        return (
                                                            <MenuItem value={hour}>{hour}</MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                                <IconButton
                                                    size='small'
                                                    onClick={() => {
                                                        deleteRange(index)
                                                    }}>
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </div>
                                        );
                                    }

                                })
                            }
                        </div>

                        <IconButton
                            onClick={() => {
                                addNewRange(3)
                            }}>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <div className='c-account-service-day'>Cuma</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours.map((range, index) => {
                                    if (range.day == 4) {

                                        return (
                                            <div className='c-account-service-option-section-row'>
                                                <Select
                                                    defaultValue={convertTimeToString(range.startHour, range.startMin)}
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
                                                    defaultValue={convertTimeToString(range.endHour, range.endMin)}
                                                    label="Start"
                                                >
                                                    {hours.map((hour, index) => {

                                                        return (
                                                            <MenuItem value={hour}>{hour}</MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                                <IconButton
                                                    size='small'
                                                    onClick={() => {
                                                        deleteRange(index)
                                                    }}>
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </div>
                                        );
                                    }

                                })
                            }

                        </div>

                        <IconButton
                            onClick={() => {
                                addNewRange(4)
                            }}>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <div className='c-account-service-day'>Cumartesi</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours.map((range, index) => {
                                    if (range.day == 5) {

                                        return (
                                            <div className='c-account-service-option-section-row'>
                                                <Select
                                                    defaultValue={convertTimeToString(range.startHour, range.startMin)}
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
                                                    defaultValue={convertTimeToString(range.endHour, range.endMin)}
                                                    label="Start"
                                                >
                                                    {hours.map((hour, index) => {

                                                        return (
                                                            <MenuItem value={hour}>{hour}</MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                                <IconButton
                                                    size='small'
                                                    onClick={() => {
                                                        deleteRange(index)
                                                    }}>
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </div>
                                        );
                                    }

                                })
                            }
                        </div>

                        <IconButton
                            onClick={() => {
                                addNewRange(5)
                            }}>
                            <AddIcon />
                        </IconButton>
                    </div>

                    <div className='c-account-service-row'>
                        <div className='c-account-service-day'>Pazar</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours.map((range, index) => {
                                    if (range.day == 6) {

                                        return (
                                            <div className='c-account-service-option-section-row'>
                                                <Select
                                                    defaultValue={convertTimeToString(range.startHour, range.startMin)}
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
                                                    defaultValue={convertTimeToString(range.endHour, range.endMin)}
                                                    label="Start"
                                                >
                                                    {hours.map((hour, index) => {

                                                        return (
                                                            <MenuItem value={hour}>{hour}</MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                                <IconButton
                                                    size='small'
                                                    onClick={() => {
                                                        deleteRange(index)
                                                    }}>
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </div>
                                        );
                                    }

                                })
                            }
                        </div>

                        <IconButton
                            onClick={() => {
                                addNewRange(6)
                            }}>
                            <AddIcon />
                        </IconButton>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ConsultantServiceSettings;