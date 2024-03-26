// "use client"
// import getadminbookslot from "@/libs/getadminbookslot";

// import { AppDispatch, useAppSelector } from "@/redux/store"
// import { useDispatch } from "react-redux"
// import { removeReservation } from "@/redux/features/cartSlice"

// export default function userbookslot(){

//     const bookslots = getadminbookslot()

//     const carItems = useAppSelector((state)=>state.cartSlice.carItems)
//     const dispatch = useDispatch<AppDispatch>()

//     return(
//         <>
//         {
//             carItems.map((reservationItem)=>(
//                 <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
//                 key={reservationItem.carID}>
//                     <div className="text-xl">{reservationItem.user}</div>
//                     <div className="text-sm">Pick-up{reservationItem.apptDate}
//                     from {reservationItem.pickupLocation}</div>
//                     <div className="text-sm">return{reservationItem.company}
//                     to {reservationItem.returnLocation}</div>
//                     <div className="text-md" >Duration: {reservationItem.createdAt}</div>
//                     <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
//                     onClick={()=>dispatch(removeReservation(reservationItem))}>
//                         Remove from Cart
//                     </button>
//                 </div>
                
                
//             ))
//         }</>
//     )
// }