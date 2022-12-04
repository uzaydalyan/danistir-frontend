import React from 'react'
import '../scss/ConsultantServiceSettings.scss'
import { Checkbox } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChipSelector from "../../../CommonComponents/js/ChipSelector";
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



    const [weekDayHours, setWeekDayHours] = useState([[{ start: "08:00", end: "09:00" }, { start: "08:00", end: "09:00" }], [{ start: "08:00", end: "09:00" }], [{ start: "08:00", end: "09:00" }], [{ start: "08:00", end: "09:00" }], [{ start: "08:00", end: "09:00" }], [{ start: "08:00", end: "09:00" }], [{ start: "08:00", end: "09:00" }],])
    const [allHoursArray, setAllHoursArray] = useState([[], [], [], [], [], [], []])
    const [serviceTimes, setServiceTimes] = useState([])
    const [serviceDayList, setServiceDayList] = useState([])

    function convertHourToInt(hour) {

        let numberAsString = hour.split(":")[0]
        return parseInt(numberAsString)
    }

    function convertHourToString(hour) {
        hour = hour.toString()
        if (hour.length == 1) {
            hour = "0" + hour
        }
        let hourAsString = hour + ":00"
        return hourAsString
    }


    function addNewRange(dayIndex) {
        let tmpArray = [...weekDayHours]
        console.log("you clicked")

        tmpArray.map((day, index) => {
            if (index == dayIndex) {
                let lastRange = day[day.length - 1]
                let newStart = lastRange.end
                let newEnd = convertHourToString((convertHourToInt(newStart) + 1))
                day.push({ start: lastRange.end, end: newEnd })
            }
        })
        setWeekDayHours(tmpArray)
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
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Pazartesi</div>

                        <div className='c-account-service-option-section'>

                            {
                                weekDayHours[0].map((range, index) => {
                                    console.log(range.start + range.end)
                                    return (
                                        <div className='c-account-service-option-section-row'>
                                            <Select
                                                defaultValue={range.start}
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
                                                defaultValue={range.end}
                                                label="Start"
                                            >
                                                {hours.map((hour, index) => {

                                                    return (
                                                        <MenuItem value={hour}>{hour}</MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </div>
                                    );
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
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Salı</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours[1].map((range, index) => {
                                    console.log(range.start + range.end)
                                    return (
                                        <div className='c-account-service-option-section-row'>
                                            <Select
                                                defaultValue={range.start}
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
                                                defaultValue={range.end}
                                                label="Start"
                                            >
                                                {hours.map((hour, index) => {

                                                    return (
                                                        <MenuItem value={hour}>{hour}</MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </div>
                                    );
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
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Çarşamba</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours[2].map((range, index) => {
                                    console.log(range.start + range.end)
                                    return (
                                        <div className='c-account-service-option-section-row'>
                                            <Select
                                                defaultValue={range.start}
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
                                                defaultValue={range.end}
                                                label="Start"
                                            >
                                                {hours.map((hour, index) => {

                                                    return (
                                                        <MenuItem value={hour}>{hour}</MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </div>
                                    );
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
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Perşembe</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours[3].map((range, index) => {
                                    console.log(range.start + range.end)
                                    return (
                                        <div className='c-account-service-option-section-row'>
                                            <Select
                                                defaultValue={range.start}
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
                                                defaultValue={range.end}
                                                label="Start"
                                            >
                                                {hours.map((hour, index) => {

                                                    return (
                                                        <MenuItem value={hour}>{hour}</MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </div>
                                    );
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
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Cuma</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours[4].map((range, index) => {
                                    console.log(range.start + range.end)
                                    return (
                                        <div className='c-account-service-option-section-row'>
                                            <Select
                                                defaultValue={range.start}
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
                                                defaultValue={range.end}
                                                label="Start"
                                            >
                                                {hours.map((hour, index) => {

                                                    return (
                                                        <MenuItem value={hour}>{hour}</MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </div>
                                    );
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
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Cumartesi</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours[5].map((range, index) => {
                                    console.log(range.start + range.end)
                                    return (
                                        <div className='c-account-service-option-section-row'>
                                            <Select
                                                defaultValue={range.start}
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
                                                defaultValue={range.end}
                                                label="Start"
                                            >
                                                {hours.map((hour, index) => {

                                                    return (
                                                        <MenuItem value={hour}>{hour}</MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </div>
                                    );
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
                        <Checkbox defaultChecked />
                        <div className='c-account-service-day'>Pazar</div>

                        <div className='c-account-service-option-section'>
                            {
                                weekDayHours[6].map((range, index) => {
                                    console.log(range.start + range.end)
                                    return (
                                        <div className='c-account-service-option-section-row'>
                                            <Select
                                                defaultValue={range.start}
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
                                                defaultValue={range.end}
                                                label="Start"
                                            >
                                                {hours.map((hour, index) => {

                                                    return (
                                                        <MenuItem value={hour}>{hour}</MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </div>
                                    );
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