import React from 'react';
import axios from 'axios';

const ApiURL = "http://198.13.47.188:8080/batch";

// 배치 전체 리스트 호출 API
export const getBatchList = () => {
    return axios.get(ApiURL);
}


