'use client'
import Image from "next/image"
import { useState } from "react"
import { useRouter } from 'next/navigation';
// import { useSession } from "next-auth/react";

export default function Banner() {
    const covers = [
      '/cover1.png',
      '/cover2.png',
      '/cover3.jpg'
    ]
    const [index, setIndex] = useState(2)
    const router = useRouter();

    // const { data: session } = useSession()
    // console.log(session?.user.token);
    
    return (
      //add top shadow
      <div 
        className='flex w-full h-[500px] relative justify-center items-center' 
        onClick={()=>{setIndex(index+1)}}>
          
          <div className='flex flex-col justify-center z-10 absolute text-white drop-shadow-xl items-center'>
              <h1 className="text-7xl font-bold">Get Hired</h1>
              <a className="text-xl font-medium hover:underline hover:cursor-pointer" href="/booking/admin">10 - 13 May 2022</a>
          </div>
          {
            // session ? <div className='absolute top-0 right-0 z-10 mt-2 mr-5 text-white'>Welcome {session.user?.name}</div> : null
          }
          <div className='absolute bottom-0 right-0 z-10 mb-2 mr-2'>
            <button 
              className="bg-white text-black py-1 px-3 rounded-lg hover:cursor-pointer" 
              onClick={(e) => {
                router.push('/company')
                e.stopPropagation()
              }}
            >
              Select Company
            </button>
          </div>
          <Image 
              src={covers[index % 3]}
              alt="cover"
              className="object-cover"
              fill={true}
              priority={true}
          />
      </div>
    )
}