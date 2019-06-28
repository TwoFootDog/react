import React from 'react';

class PhoneForm extends React.Component {
    state = {
        name: '',
        phone: ''
    }
    
    constructor(props) {
        super(props);
        console.log("PhoneForm constructor");
    }

    componentDidMount () {
        console.log("PhoneForm componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("PhoneForm shouldComponentUpdate");
        return true;
    }

    componentDidUpdate () {
        console.log("PhoneForm componentDidUpdate");
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        this.props.onCreate(this.state);    //상태값을 onCreate를 통해서 부모에게 전달
        this.setState({
            name:'',
            phone:''
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Input 상태관리하기</h1>
                <div>
                    <input placeholder="이름" value={this.state.name} onChange={this.handleChange} name="name" />
                </div>
                <div>
                    <input placeholder="전화번호" value={this.state.phone} onChange={this.handleChange} name="phone" />
                </div>
                <button type="submit">등록</button>
            </form>
            
        );
    }
}

PhoneForm.defautProps = {
    
}

PhoneForm.propTypes = {
    
}

export default PhoneForm;