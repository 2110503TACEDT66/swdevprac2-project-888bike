export default async function editAppt (uid: string, apptDate: string, token: string, aid:string) {
    const response = await fetch(`https://presentation-day-1-888bike-n7uafgjbi-vetozer6417s-projects.vercel.app/api/v1/appointments/${aid}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            apptDate: apptDate,
            user: uid,
        }),
    })
    if(!response.ok) {
        alert('Failed to edit appointment')
        throw new Error('Failed to edit appointment')
        
    }
    window.location.href = '/appointments';
    return await response.json()
}