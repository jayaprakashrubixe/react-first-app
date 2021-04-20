import React, { Component } from 'react'
import './sass-css/ContactFrom.css';
const initialState = {
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
    nameError: "",
    emailError: "",
    numberError: "",
    subjectError: "",
    messageError: ""
};
class ContactFrom extends Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let nameError = "";
        let emailError = "";
        let numberError = "";
        let subjectError = "";
        let messageError = "";

        if (!this.state.name) {
            nameError = "Name cannot be blank";
        }
        if (!this.state.number) {
            numberError = "Number cannot be blank";
        }
        if (!this.state.subject) {
            subjectError = "Subject cannot be blank";
        }
        if (!this.state.message) {
            messageError = "Message cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "Email cannot be blank";
        }

        if (emailError || nameError || numberError || subjectError || messageError) {
            this.setState({ emailError, nameError, numberError, subjectError, messageError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            // clear form
            this.setState(initialState);
        }
    };
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group mt-4">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange} name="name" />
                                </div>
                                <div className="validate-error">
                                    {this.state.nameError}
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} name="email" />
                                </div>
                                <div className="validate-error">
                                    {this.state.emailError}
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="number">Number:</label>
                                    <input type="number" className="form-control" id="number" placeholder="Enter Phone Number" value={this.state.number} onChange={this.handleChange} name="number" />
                                </div>
                                <div className="validate-error">
                                    {this.state.numberError}
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="subject">Subject:</label>
                                    <input type="text" className="form-control" id="subject" placeholder="Enter Subject" value={this.state.subject} onChange={this.handleChange} name="subject" />
                                </div>
                                <div className="validate-error">
                                    {this.state.subjectError}
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="message">Comment:</label>
                                    <textarea type="text" className="form-control" rows="4" cols="50" id="message" placeholder="Enter Message" value={this.state.message} onChange={this.handleChange} name="message"></textarea>
                                </div>
                                <div className="validate-error">
                                    {this.state.messageError}
                                </div>

                                <button type="submit" className="btn btn-primary mt-4">Submit</button>
                            </form>



                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </>
        )
    }

}

export default ContactFrom
