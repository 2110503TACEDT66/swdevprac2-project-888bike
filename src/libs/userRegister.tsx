import { RegisterJson, Role } from '../../interface'

export default async function userRegister(userRegisterData: RegisterJson, role: Role) {
    const response = await fetch('http://localhost:5001/api/v1/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userRegisterData.name,
            tel: userRegisterData.tel,
            email: userRegisterData.email,
            password: userRegisterData.password,
            role: role
        })
    })

    if(!response.ok) {
        throw new Error('Failed to register')
    }

    return await response.json()
}