import React from 'react';
import axios from 'axios';

const ApiURL = "http://198.13.47.188:8080/batch";

const TestURL = "http://127.0.0.1:8080/member/register"

// 배치 전체 리스트 호출 API
export const getBatchList = () => {
    return axios.get(ApiURL);
}

export const registMember = (data) => {
    return axios.post(TestURL, {data}, {headers: {'Content-Type': 'application/json'}})
}


