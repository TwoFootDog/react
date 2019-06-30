import React from 'react';

class TableSelectButtonComponent extends React.Component {

    ReactTableButtonClick = () => {
        console.log('reactTableButtonClick');
        this.props.onClick(1);
    }

    MaterialTableButtonClick = () => {
        console.log('MaterialTableButtonClick');
        this.props.onClick(2);
    }

    BootStrapTableButtonClick = () => {
        console.log('BootStrapTableButtonClick');
        this.props.onClick(3);
    }
    render() {
        return(
            <div style={{padding: '20px'}} align="center">
            <button className="btn btn-primary" style={{marginRight:'1rem'}} onClick={this.ReactTableButtonClick}>ReactTableButton</button>
            <button className="btn btn-danger" style={{marginRight:'1rem'}} onClick={this.MaterialTableButtonClick}>MaterialTableButton</button>
            <button className="btn btn-warning" style={{marginRight:'20px'}} onClick={this.BootStrapTableButtonClick}>BootStrapTableButton</button>
          </div>
        )
    }
}

export default TableSelectButtonComponent;