import http from "../services/http";

export async function getStates() {
    try {
        const request = await http.get('/states');
        return request.data;
    } catch (e) {
        return null;
    }
}