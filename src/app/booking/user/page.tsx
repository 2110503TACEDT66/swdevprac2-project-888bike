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
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Reservations() {

    const urlParams = useSearchParams()
    const company = urlParams.get('company')
    const cid = urlParams.get('cid')
    // const [uid, setUid] = useState<string>('');
    const session = await getServerSession(authOptions);

    const token = 'Bearer ' + session?.user.token; // Assuming the token is returned as 'token'
    console.log(token);
    const me = await fetch('http://localhost:5001/api/v1/auth/me', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })
    if (!me.ok) {
        throw new Error('Failed to get user')
    }
    const userData = await me.json();
    console.log(userData);
    console.log(userData.data._id);
    const uid = userData.data._id;
    console.log(uid);
    try{
    localStorage.setItem('uid', uid.toString());
    }catch(e){
        console.log(e);
    
    }
    console.log('uid:');
    // console.log(localStorage.getItem('uid'));
    // const dispatch = useDispatch<AppDispatch>()

    const [apptTime, setApptTime] = useState<string>('');

    const setAppointmentTime = (value: string) => {
        console.log(value)
        setApptTime(value)
    }

    // const makeReservation = async () => {
    //     if (cid != '' && apptTime != '' && cid != null && apptTime != null && uid != null && uid != '') {
    //         await addAppt(uid, cid, apptTime);
    //     }
    // }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-2xl font-semibold mt-3">New Appointment</div>
            <div className="text-xl font-medium">Company : {company}</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-Up Date Time and Company</div>
                <LocationDateReserve onDateTimeChange={(value: string) => { setAppointmentTime(value) }} />
            </div>

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                //HOW I SUS
                // onClick={makeReservation}
                >
                Book this Timeslot
            </button>

        </main>
    );
}