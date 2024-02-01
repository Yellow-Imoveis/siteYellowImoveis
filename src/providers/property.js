import http from "../services/http";

export async function getProperties(params) {
    console.log("Params", params);

    try {
        const response = await http.get(`/properties?${params}`);
        response.data.data = response.data.data.filter((property) => property.active === 1);
        console.log("Response", response.data);
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getHighlightProperties() {
    try {
        const response = await http.get(`/properties/highlights`);
        console.log("Response", response.data);
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getSuperHighlight() {
    try {
        const response = await http.get(`/properties/super-highlight`);
        console.log("Response", response.data);

        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getProperty(id) {
    try {
        const response = await http.get(`/properties/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getLocals(query) {
    try {
        const response = await http.get(`/properties/locals?keyword=${query}`);
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}