import http from "../services/http";

export async function getBanners() {
    try {
        const request = await http.get('/banners');
        return request.data;
    } catch (e) {
        return null;
    }
}