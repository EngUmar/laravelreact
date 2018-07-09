import { BASE_URL } from '../constants/Config';
export const handleResponse = (data) => {
    if (data.code == 500) {
        return data
    }
    if (data.code == 200) {
        return data;
    }
    if (data.code != 200 && data.code != 500) {
        return data;
    }
}

export const windowScroll = () => {
    window.scrollTo(0, 0);
}

/**
 * To combined multiple arrays into a single one
 * @param {*} args
 */
export const concat = (...args) => {
    return args.reduce((acc, val) => [...acc, ...val]);
}

export const handleResponse2 = async(url) => {
    let data = await fetch(url)
    .then(response => {
        if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        }
    )
    return data.data;
}

// // async function
// export const handleResponse23 = async (url) =>{
//     let data = await (await (fetch(url)
//       .then(res => {
//         return res.json()
//       })
//       .catch(err => {
//         console.log('Error: ', err)
//       })
//     ))
//     return data
// }