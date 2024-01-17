import http from "../services/http";

export async function sendContact(name, email, subject, message) {
    try {
        const request = await http.post('/contact', {
            name,
            email,
            subject,
            message
        });

        return request.data;

    } catch (e) {
        return e.response.data;
    }
}

export async function sendSubscribe(email) {
    try {
        const request = await http.post('/subscribed', {
            email
        });

        return request.data;

    } catch (e) {
        return e.response.data;
    }
}