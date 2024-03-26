export default async function addAppt(appointmentDate:Date,userid:string,companyid:string) {
    
    const response = await fetch("http://localhost:5000/api/v1/companies/:companyId/appointment",{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            apptDate:appointmentDate,
            user:userid,
            company:companyid

        })
    })

    if(!response.ok){
        throw new Error("Fail to log-in")
    }
    return await response.json()
}