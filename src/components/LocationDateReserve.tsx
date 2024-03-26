// Use the "use client" directive if you're specifically working within a Next.js environment
// and this component is client-side only.

"use client";

import { useState } from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

export default function LocationDateAndTimeReserve({ onDateTimeChange, onLocationChange }:
    { onDateTimeChange: (date: Dayjs | null, time: Dayjs | null) => void, onLocationChange: Function }) {

    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
    const [reserveTime, setReserveTime] = useState<Dayjs | null>(null);
    const [location, setLocation] = useState('BKK');

    // Handle changing both date and time
    const handleDateTimeChange = (newValue: Dayjs | null, type: 'date' | 'time') => {
        if (type === 'date') {
            setReserveDate(newValue);
        } else {
            setReserveTime(newValue);
        }
        onDateTimeChange(reserveDate, reserveTime);
    };

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    className="bg-white"
                    value={reserveDate}
                    onChange={(newValue) => handleDateTimeChange(newValue, 'date')}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                    value={reserveTime}
                    onChange={(newValue) => handleDateTimeChange(newValue, 'time')}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <Select
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
            </Select>
        </div>
    );
}
