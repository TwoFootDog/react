import React from 'react';
import { withRouter } from 'react-router-dom';

const About = (props) => {
    if (!props.isLogin) {
        console.log('not signin');
        props.history.push('/signin');
    }
    return (
        <div>
            <h2>정산배치스케쥴러 Page입니다</h2>
        </div>
    )
}

export default withRouter(About);