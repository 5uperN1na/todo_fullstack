export default async <T = any>(uri: string, method: string = 'GET', body?: {}) => {
    const token = localStorage.getItem('token');

    const headers: { [key: string]: string } = {
        'Content-Type': 'application/json'
    }

    if(token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        
        const res = await fetch(uri, {
            method,
            headers,
            body: JSON.stringify(body)
        });

        if (res.ok) {
           return <T>await res.json();
        }

    } catch (error) {
        console.log(error);
    }
}