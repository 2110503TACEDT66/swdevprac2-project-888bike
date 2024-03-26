'use client'

import { useState } from "react"
import { signIn } from "next-auth/react"
import { TextField } from "@mui/material"
import Link from 'next/link'

export default function signInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');

  const onSubmit = async() => {
    if(email && password) {
      const result = await signIn('credentials', {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: '/'
      })
    } else {
      console.log(error)
      setError('Please provide both email and password.');
    }
  }
  
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-[450px] rounded-lg shadow-lg items-center p-5 gap-y-5 mt-20">
        <h1 className="font-semibold text-xl">Sign In</h1>
        <TextField id="email" label="Email" variant="outlined" className="w-8/10" sx={{width: 320}} type="email" onChange={(e) => setEmail(e.target.value)}/>
        <TextField id="password" label="Password" variant="outlined" className="w-8/10" sx={{width: 320}} type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button 
          className="bg-blue-600 text-white font-bold py-2 px-7 rounded-md hover:bg-blue-400"
          onClick={onSubmit}
        >
            Sign In
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <h2 className="text-md hover:cursor-pointer hover:underline text-blue-600 mt-3">
        <Link href='/register'>Don't have an account?, Register</Link>
      </h2>
    </main>
  )
}