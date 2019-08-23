import axios from 'axios';

const batchListUrl = "http://198.13.47.188:8080/tp";
const signInUrl = "http://127.0.0.1:8080/signin";
const signUpUrl = "http://127.0.0.1:8080/signup";
const getUserInfoUrl = "http://127.0.0.1:8080/getUserInfo"

// 배치 전체 리스트 호출 API
export const getBatchList = () => {
    return axios.get(batchListUrl);
}

// 배치 상세정보 호출 API
export const getBatchDetailInfo = (masterBatchId) => {
    const url = batchListUrl + '/' + masterBatchId
    return axios.get(url);
}

// 로그인 API
export const signIn = (user) => {
    return axios.post(signInUrl, JSON.stringify(user), 
        { headers: {'content-type': 'application/json'}} )
}

// 회원가입 API
export const signUp = (user) => {
    return axios.post(signUpUrl, JSON.stringify(user), 
        { headers: {'content-type': 'application/json'}} )
}

// USER 정보 조회 or 웹페이지 접속 시 token 체크
export const getUserInfo = () => {
    return axios.get(getUserInfoUrl, 
        { headers: { 'X-AUTH-TOKEN' : window.localStorage.getItem('token'),
                     'content-type' : 'application/json'}});
}


