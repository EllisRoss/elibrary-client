import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    withCredentials: true,
});

export const profileAPI = {
    getReadBooks() {
        return instance.get(`/profile/readBooks`);
    },
}

export const libraryAPI = {
    getBooks() {
        return instance.get(`library/books`);
    },
    addBook(formData) {
        return instance.post(`library/add-book`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(login, password) {
        return instance.post(`auth/login`, {login, password});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    registration(login, password) {
        return instance.post(`auth/registration`, {login, password});
    }
}