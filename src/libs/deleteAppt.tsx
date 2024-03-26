export default async function deleteAppt (token: string, aid:string) {
    const response = await fetch(`http://localhost:5001/api/v1/appointments/${aid}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
    if(!response.ok) {
        alert('Failed to delete appointment')
        throw new Error('Failed to delete appointment')
        
    }
    window.location.href = '/appointments';
    return await response.json()
}