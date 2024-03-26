"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "@/interfaces";
import { addReservation } from "@/redux/features/cartSlice";
import addAppt from "@/libs/addAppt";



export default function Reservations() {

    const urlParams = useSearchParams()
    const company = urlParams.get('company')
    const cid = urlParams.get('cid')



    const [apptTime, setApptTime] = useState<string>('');

    const setAppointmentTime = (value: string) => {
        console.log(value)
        setApptTime(value)
    }

    const makeReservation = async () => {
        const uid = localStorage.getItem('uid')
        const token = localStorage.getItem('token')
        if (cid != '' && apptTime != '' && cid != null && apptTime != null && uid != null && uid != '' && token != null && token != '') {
            try {
                await addAppt(uid, cid, apptTime, token);
                alert('Appointment has been added')
            } catch (error) {
                console.log('error', error)
            }
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-2xl font-semibold mt-3">New Appointment</div>
            <div className="text-xl font-medium">Company : {company}</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Choose Appointment Date & Time</div>
                <LocationDateReserve onDateTimeChange={(value: string) => { setAppointmentTime(value) }} />
            </div>

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                //HOW I SUS
                onClick={makeReservation}
            >
                Book this Timeslot
            </button>

        </main>
    );
}