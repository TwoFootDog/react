import React from 'react'
import PhoneForm from './InputDataManage/PhoneForm'
import PhoneInfoList from './InputDataManage/PhoneInfoList'

class App extends React.Component {
    state = {
        id: 2,
        information: [
            {
                id: 0,
                name: '강민규',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '강승보',
                phone: '010-1111-1111'
            }
        ]
    }

    // input으로 입력된 data 출력
    handleCreate = (data) => {
        const { id, information } = this.state;
        this.setState({
            id: id + 1,
            information: information.concat({ id: id, ...data})
        })
        console.log(data);
    }
    render() {
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate} />
                <PhoneInfoList data={this.state.information} />
            </div>
        )
    }
}

export default App;
