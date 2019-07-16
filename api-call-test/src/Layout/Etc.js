import React from 'react';
import { withRouter } from 'react-router-dom';

const Etc = (props) => {
    if (!props.isLogin) {
        console.log('not signin');
        props.history.push('/signin');
    }
    return (
        <div>
            <h2>미개발 페이지입니다.</h2>
        </div>
    )
}

export default withRouter(Etc);