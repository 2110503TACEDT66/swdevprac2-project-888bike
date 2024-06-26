export default async function getAppts (token: string) {
    // await new Promise((resolve)=>setTimeout(resolve,5000))
    const response = await fetch(`http://localhost:5001/api/v1/appointments`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    if(!response.ok) {
        alert('Failed to get appointments')
        throw new Error('Failed to get appointments')
        
    }
    return await response.json()
}