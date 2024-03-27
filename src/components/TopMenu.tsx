import Link from "next/link";
import TopMenuItem from "./TopMenuItem";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

export default async function TopMenu () {
  const session = await getServerSession(authOptions)
  return (
    <div className="h-[45px] w-screen flex flex-row items-center justify-between bg-slate-200 fixed">
        
        <div className="flex flex-row items-right  gap-x-6 ml-5">
          <TopMenuItem name='Home' pageRef="/"/>
          <TopMenuItem name='Companies' pageRef="/company"/>
          <TopMenuItem name='Appointments' pageRef="/appointments"/>
          <Link href="/">
            {/* <Image 
                src={'/img/logo.png'}
                width={40}
                height={0}
                className="object-contain w-auto mr-5"
                alt="Logo Image"
            /> */}
          </Link>
        </div>
        
        <div className="mr-10">
          {
            session ? 
              <Link href='/api/auth/signout'
              className="hover:underline hover:text-red-800 rounded-md bg-red-100 hover:bg-red-300 p-2">
                Sign Out
              </Link>
            : <Link href='/api/auth/signin'
            className="hover:underline hover:text-blue-700 rounded-md bg-blue-100 hover:bg-blue-300 p-2">
                Sign In
              </Link>
          }
        </div>
    </div>
  )
}

