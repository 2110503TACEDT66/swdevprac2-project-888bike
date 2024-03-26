export default async function addAppt (uid: string, cid: string, apptDate: string, token: string) {
    const response = await fetch(`https://presentation-day-1-888bike-sigma.vercel.app/api/v1/companies/${cid}/appointments`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            apptDate: apptDate,
            user: uid
        }),
    })
    if(!response.ok) {
        alert('Failed to add appointment')
        throw new Error('Failed to add appointment')
        
    }
    window.location.href = '/appointments';
    return await response.json()
}