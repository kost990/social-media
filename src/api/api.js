import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fb6c8865-255e-4f31-9225-af0b415a3139"
    }
});
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    ungetfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getfollow(userId) {
        return instance.post(`follow/${userId}`)
    }
}

export const ProfileAPI = {
    setUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {
                status
            })
    }
}
export const AuthAPI = {
        authMe() {
        return instance.get(`/auth/me`)
    },
        login(email, password, rememberMe = false) {
        return instance.post(`auth/login/`, {email, password, rememberMe})
},
        logout() {
        return instance.delete(`auth/login/`)},
}