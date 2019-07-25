import React from 'react';
import axios from 'axios';

const batchListUrl = "http://198.13.47.188:8080/batch";
const signInUrl = "http://127.0.0.1:8080/signin";
const signUpUrl = "http://127.0.0.1:8080/signup";

// 배치 전체 리스트 호출 API
export const getBatchList = () => {
    return axios.get(batchListUrl);
}

export const signIn = (user) => {
    return axios.post(signInUrl, JSON.stringify(user), { headers: {'content-type': 'application/json'}} )
}

export const signUp = (user) => {
    return axios.post(signUpUrl, JSON.stringify(user), { headers: {'content-type': 'application/json'}} )
}


