'use client'

import userRegister from "@/libs/userRegister"
import { TextField } from "@mui/material"
import Link from "next/link"
import { useState } from "react"

export default function registerPage () {
    const [name,setName] = useState('')
    const [tel,setTel] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('');

    const onSubmit = async () => {
        try {
            if (!name || !tel || !email || !password) {
                setError('Please fill in all fields');
                return;
            }

            const userData = { name, tel, email, password }
            await userRegister(userData, 'user')

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message || 'Registration failed');
            } else {
                setError('Registration failed');
            }
        }
    }

    return(
        <main className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-[450px] rounded-lg shadow-lg items-center p-5 gap-y-5 mt-20">
                <h1 className="font-semibold text-xl">Register</h1>
                <TextField id="name" label="Name" variant="outlined" className="w-8/10" sx={{width: 320}} type="text" onChange={(e) => setName(e.target.value)}/>
                <TextField id="tel" label="Telephone" variant="outlined" className="w-8/10" sx={{width: 320}} type="text" onChange={(e) => setTel(e.target.value)}/>
                <TextField id="email" label="Email" variant="outlined" className="w-8/10" sx={{width: 320}} type="email" onChange={(e) => setEmail(e.target.value)}/>
                <TextField id="password" label="Password" variant="outlined" className="w-8/10" sx={{width: 320}} type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button 
                    className="bg-blue-600 text-white font-bold py-2 px-7 rounded-md hover:bg-blue-400"
                    onClick={onSubmit}
                >
                    Register
                </button>
                {error && <p className="text-red-500">{error}</p>}
            </div>
            <h2 className="text-md hover:cursor-pointer hover:underline text-blue-600 mt-3">
                <Link href='/signin'>Already have an account?, Sign In</Link>
            </h2>
        </main>
    )
    
}