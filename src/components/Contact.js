import { Component } from "react";
import {Prompt} from 'react-router-dom';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        }
    }
    onClick = (isChecked) => {
        this.setState({
            isChecked: isChecked
        })
    }
    render() {
        var {isChecked} = this.props;
        return (
            <div>
                <h1>Đây là liên hệ</h1><br/>
                
                <button type="button" className="btn btn-info" onClick={() => this.onClick(false)}>Cho phép</button>
                <button type="button" className="btn btn-danger" onClick={() => this.onClick(true)}>Không cho phép</button>
                <Prompt
                    when = {isChecked}
                    message = {location => (`Bạn có chắc muốn đi đến ${location.pathname}`)}
                />
            </div>
        );
    }
}


export default Contact;
