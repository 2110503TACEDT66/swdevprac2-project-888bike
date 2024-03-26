// Use the "use client" directive if you're specifically working within a Next.js environment
// and this component is client-side only.

"use client";

import { useState } from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

export default function LocationDateAndTimeReserve({onDateTimeChange}: {onDateTimeChange: Function}) {

    const [reserveDate, setReserveDate] = useState<string>('');
    const [reserveTime, setReserveTime] = useState<string>('');

    // Handle changing both date and time
    const handleDateTimeChange = (newValue: Dayjs | null, type: 'date' | 'time') => {
        if (type === 'date') {
            // setReserveDate(newValue.toISOString());
            const newDate = newValue?.toISOString();
            setReserveDate(newDate);
            // console.log('newValue', newValue?.toISOString())
            console.log('reserveDate', reserveDate);
        } else {
            // setReserveTime(newValue.toISOString());
            const newTime = newValue?.toISOString();
            setReserveTime(newTime);
            console.log('reserveTime', reserveTime);
        }
        if(reserveDate != '' && reserveTime != ''){
            const newDate = reserveDate.split('T')[0];
            const newTime = reserveTime.split('T')[1];
            const newDateTime = newDate + 'T' + newTime;
            console.log('newDateTime', newDateTime);
            onDateTimeChange(newDateTime);
        }
        
    };

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <br></br>
                <DatePicker
                className="mt-2"
                    // value={reserveDate}
                    onChange={(newValue) => handleDateTimeChange(newValue, 'date')}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                    // value={reserveTime}
                    onChange={(newValue) => handleDateTimeChange(newValue, 'time')}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            {/* <Select
                variant="standard"
                name="location"
                id="location"
                className="h-[2em] w-[200px]"
                value={location}
                onChange={(e) => { setLocation(e.target.value); onLocationChange(e.target.value); }}
            >
                <MenuItem value="BKK">Bangkok</MenuItem>
                <MenuItem value="CNX">Chiang Mai</MenuItem>
                <MenuItem value="HKT">Phuket</MenuItem>
            </Select> */}
        </div>
    );
}
