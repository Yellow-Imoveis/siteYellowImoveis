import http from "../services/http";

export async function getNeighborhoodsByCity(cityId) {
    try {
        const request = await http.get(`/cities/${cityId}`);
        return request.data.neighborhoods;
    } catch (e) {
        return null;
    }
}