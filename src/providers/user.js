import http from "../services/http";

export async function getUsers() {
    try {
        const request = await http.get('/users');
        return request.data;
    } catch (e) {
        return null;
    }
}