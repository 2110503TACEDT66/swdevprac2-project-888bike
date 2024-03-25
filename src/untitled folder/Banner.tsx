'use client'
import Image from "next/image"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

export default function Banner() {
    const covers = [
      '/img/cover.jpg',
      '/img/cover2.jpg',
      '/img/cover3.jpg',
      '/img/cover4.jpg',
    ]
    const [index, setIndex] = useState(0)
    const router = useRouter();

    const { data: session } = useSession()
    console.log(session?.user.token);
    
    return (
      //add top shadow
      <div 
        className='flex w-full h-[250px] relative justify-center items-center' 
        onClick={()=>{setIndex(index+1)}}>
          
          <div className='flex flex-col justify-center z-10 absolute text-white drop-shadow-xl items-center'>
              <h1 className="font-bold">Vaccine Service Center</h1>
              <a className="font-medium hover:underline hover:cursor-pointer" href="/booking">จองฉีดวัคซีนได้แล้ววันนี้</a>
          </div>
          {
            session ? <div className='absolute top-0 right-0 z-10 mt-2 mr-5 text-white'>Welcome {session.user?.name}</div> : null
          }
          <div className='absolute bottom-0 right-0 z-10 mb-2 mr-2'>
            <button 
              className="bg-white text-black py-1 px-3 rounded-lg hover:cursor-pointer" 
              onClick={(e) => {
                router.push('/hospital')
                e.stopPropagation()
              }}
            >
              Select Hospital
            </button>
          </div>
          <Image 
              src={covers[index % 4]}
              alt="cover"
              className="object-cover"
              fill={true}
              priority={true}
          />
      </div>
    )
}