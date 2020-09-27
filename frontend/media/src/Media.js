import React, {Component} from 'react';
import './App.css';
import ReactPlayer from 'react-player';

export class Media extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            url: ""
        }
    }

    handleChange = (event) => {
        this.setState({inputValue : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({url : this.state.inputValue})
    }

    render() {
        return (
            <div className="Media">
                <header className="Media-header">
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input className="form-control" type="text" placeholder="Input the video url" style={{margin: "20px"}} onChange={this.handleChange}/>
                            <button className="btn btn-primary" style={{margin: "20px"}}>PLAY VIDEO</button>
                        </form>
                    </div>
                    <ReactPlayer url={this.state.url} controls={true} />
                </header>
            </div>
        );
    }
}

export default Media;
