import axios from 'axios';

const API_URL = 'http://10.0.2.2:5000/api/learners';

export const registerLearner = async (data) => {
    return axios.post(`${API_URL}/register`, data);
};

export const loginLearner = async (data) => {
    return axios.post(`${API_URL}/login`, data);
};

export const getLearners = async () => {
    return axios.get(API_URL);
};
