import http from "../services/http";

export async function getDepoiments() {
    try {
        const response = await http.get('/depoiments');
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function storeDepoiment(name, email, phone, description) {
    try {
        const request = await http.post('/depoiments', {
            name,
            email,
            phone,
            description
        });

        return request.data;

    } catch (e) {
        return e.response.data;
    }
}