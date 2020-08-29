import * as axios from "axios";

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/';
const API_KEY = '53d3dc64-a25c-445e-81a3-2b2dcf8f14a9';

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(response => {
                return response.data;
            })
    },
    followUser: (userId) => {
        return instance.post('follow/' + userId, null)
            .then(response => {
                return response.data;
            })
    },
    unfollowUser: (userId) => {
        return instance.delete('follow/' + userId)
            .then(response => {
                return response.data;
            })
    }
}

export const authAPI = {
    authMe: () => {
        return instance.get('auth/me')
            .then(response => {
                return response.data;
            });
    }
}

export const profileAPI = {
    getUserProfile: (userId) => {
        return instance.get(`profile/${userId}`).then(
            response => response.data
        )
    }
}