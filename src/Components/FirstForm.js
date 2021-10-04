import React, { Component } from 'react'

export default class FirstForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            mobile: "",
            sport : "Football"
        }
    }
    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changeMobileNumber = (event) => {
        this.setState({
            mobile: event.target.value
        })
    }

    changeSport = (event) => {
        this.setState({
            sport : event.target.value
        })
    }

    submitForm = (event) => {
                 alert(`Welcome ${this.state.username}. You will be provided ${this.state.sport} kit.`)
            event.preventDefault()
    }

    render() {
        return (
            <form className="m-2" onSubmit={this.submitForm}>
                <label>Username: </label>
                <input type="text" placeholder="ENTER USERNAME" onChange={this.changeUsername} value={this.state.username} /> <br />

                <label>Mobile Number: </label>
                <input type="number" placeholder="ENTER MOBILE NUMBER" onChange={this.changeMobileNumber} value={this.state.mobile} /> <br />

                <label>Select Game: </label>
                <select value={this.state.sport} onChange={this.changeSport}>
                    <option value="Football">Football</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Basketball">Basketball</option>
                    <option value="VolleyBall">VolleyBall</option>
                </select> <br /><br />


                <input type="submit" value="Sign-up" />
            </form>
        )
    }
}
