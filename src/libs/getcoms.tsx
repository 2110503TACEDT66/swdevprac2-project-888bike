import { resolve } from "path"

export default async function getcoms() {

    await new Promise((resolve)=>setTimeout(resolve,5000))

    const response = await fetch("https://presentation-day-1-888bike-n7uafgjbi-vetozer6417s-projects.vercel.app/api/v1/companies")
    if(!response.ok){
        throw new Error("Failed to fetch appointments")
    }

    return await response.json()
}