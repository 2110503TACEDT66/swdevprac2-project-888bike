import { resolve } from "path"

export default async function getcoms() {

    await new Promise((resolve)=>setTimeout(resolve,5000))

    const response = await fetch("http://localhost:5001/api/v1/companies")
    if(!response.ok){
        throw new Error("Failed to fetch appointments")
    }

    return await response.json()
}