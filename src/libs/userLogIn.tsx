export default async function userLogIn (userEmail: string, userPassword: string) {
    const response = await fetch('https://presentation-day-1-888bike-sigma.vercel.app/api/v1/auth/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        }),
    })
    if(!response.ok) {
        throw new Error('Failed to fetch cars')
    }
    const data = await response.json();
    console.log(data);
    const token = 'Bearer ' + data.token; // Assuming the token is returned as 'token'
    console.log(token);
    const me = await fetch('http://localhost:5001/api/v1/auth/me', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })
    if (!me.ok) {
        throw new Error('Failed to get user')
    }
    const userData = await me.json();
    console.log(userData);
    console.log(userData.data._id);
    const uid = userData.data._id;
    console.log(uid);

    
    return {data, uid};
}