export function authHeader() {
    // return authorization header with jwt token
    let access_token = localStorage.getItem('access_token');

    if (access_token) {

        return { 
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + access_token 
                };
    } else {
        return {};
    }
}


export function commonHeader() {
    return {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    };
}