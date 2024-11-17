import axios from 'axios';

const API_URL = 'http://10.0.2.2:5000/api/tutors';

export const registerTutor = async (data) => {
    return axios.post(`${API_URL}/register`, data);
};

export const loginTutor = async (data) => {
    return axios.post(`${API_URL}/login`, data);
};

export const getTutors = async () => {
    return axios.get(API_URL);
};
