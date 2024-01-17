import http from "../services/http";

export async function getCitiesByState(stateId) {
    try {
        const request = await http.get(`/states/${stateId}`);
        return request.data.cities;
    } catch (e) {
        return null;
    }
}