import axios from "axios";

const http = axios.create({
    baseURL: "https://yellow.forepoint.com.br/api",
    // baseURL: "http://yellowimoveis.test/api",
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': "Dnq20eSOoujXEJy4uLOwxn5Sn4enquiqj8wTTkOoZ57a9EiQOj",
    }
});

export default http;