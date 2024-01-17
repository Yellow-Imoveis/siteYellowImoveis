import http from "../services/http";

export async function getCategories() {
    try {
        const request = await http.get('/categories');
        return request.data;
    } catch (e) {
        return null;
    }
}

export async function highlightCategories() {
    try {
        const request = await http.get('/categories/highlight');
        return request.data;
    } catch (e) {
        return null;
    }
}