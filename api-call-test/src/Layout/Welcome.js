import React from 'react';

const Welcome = () => {
    return (
        <div style={{marginTop: '5%'}}>
            <h5>회원가입을 축하합니다.</h5>
            <h5>아래 링크를 클릭하여 로그인 하세요.</h5>
            <a href="/signin">로그인하기</a>
        </div>
    )
}

export default Welcome;