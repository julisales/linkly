import axios from "axios";

export const key = "b6fa31289d1a15218423419a99202ff146d24103";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/shorten',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;