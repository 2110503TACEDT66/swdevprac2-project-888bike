import Link from "next/link";
import TopMenuItem from "./TopMenuItem";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu () {
  const session = await getServerSession(authOptions)
  return (
    <div className="h-[45px] w-screen flex flex-row items-center justify-between">
        <div className="ml-5">
          {
            session ? 
              <Link href='/api/auth/signout'>
                Sign Out
              </Link>
            : <Link href='/api/auth/signin'>
                Sign In
              </Link>
          }
        </div>
        <div className="flex flex-row items-center  gap-x-10">
          <TopMenuItem name='Booking' pageRef="/booking"/>
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
        
    </div>
  )
}

