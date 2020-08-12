import axios from "axios";

export default {
    
    signUpUser: (name, email, password) => {
        return axios.post("/api/signup", { name, email, password })
    },

    signInUser: (email, password) => {
        return axios.post("/api/signin", { email, password })
    },

    updateUser: (UserId, topics, duration) => {
        return axios.post("/api/user", {UserId, topics, duration})
    },

    getUser: (UserId) => {
        return axios.get(`/api/user/${UserId}`)
    },

    getTopics: () => {
        return axios.get("/api/topics")
    },

    getSubTopics: (topic) => {
        return axios.get(`/api/subtopics/${topic}`)
    },

    createItem: (UserId, subtopic, visibility, stem, resp1, resp2, resp3, resp4) => {
        return axios.post("/api/item", {UserId, subtopic, visibility, stem, resp1, resp2, resp3, resp4})
    },

    getUserTopics: (UserId) => {
        return axios.get(`/api/usertopics/${UserId}`)
    },

    initSession: (UserId) => {
        return axios.get(`/api/session/init/${UserId}`)
    },

    getItem: (ItemId) => {
        return axios.get(`/api/item/${ItemId}`);
    },

    saveResponse: (UserId, ItemId, ItemRespId) => {
        return axios.post("/api/response", {UserId, ItemId, ItemRespId});
    },

    reviewSession: (UserId) => {
        return axios.get(`/api/session/results/${UserId}`);
    }
}