import React, { Component } from 'react'

class FirstClassComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            student1: "Maruti",
            student2: "Abhinav",
            trainer: "",
            response: 0
        }
    }

    changeValues = () => {
        this.setState({
            trainer: "Tanmoy Haldar"
        })
    }

    changeValues2 = () => {
        this.setState({
            trainer: ""
        })
    }

    changeResponse1 = () => {
        this.setState({
            response: 1
        })
    }
    changeResponse2 = () => {
        this.setState({
            response: 2
        })
    }
    changeResponse3 = () => {
        this.setState({
            response: 3
        })
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary m-2" onClick={this.changeValues}>Add Trainer</button>
                <button className="btn btn-info m-2" onClick={this.changeValues2}>Delete Trainer</button> <br />
                <h1 className="bg-dark text-warning m-2 p-3">Hello World</h1>
                <h2 className="bg-danger text-light m-2 p-4" style={{ fontFamily: "cursive" }}>
                    First Student: {this.state.student1}
                    <br />
                    Second Student: {this.state.student2}
                    <br />
                    Trainer: {this.state.trainer}
                </h2>
                <button className="btn btn-danger m-2">Submit</button>

                <br /><br /><br />
                <button className="btn btn-warning" onClick={this.changeResponse1}>Value-1</button>
                <button className="btn btn-primary m-1" onClick={this.changeResponse2}>Value-2</button>
                <button className="btn btn-secondary" onClick={this.changeResponse3}>Value-3</button>
                <h3>This is value-{this.state.response}</h3>
            </div>
        )
    }
}

export default FirstClassComponent;


// Private data will be used
// state - private data
// 'this' object will be used