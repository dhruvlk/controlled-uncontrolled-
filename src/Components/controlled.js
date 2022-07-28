import { Component } from "react"
import "./style.css"

class ControlledForm extends Component {
    constructor() {
        super()
        this.state = {
            fullname: "",
            email: "",
            mobileno: "",
            gender: "",
            birthdate: "",
            age: "31-60",
            feedback: "",
            photo: "",
            termsConfirm: false,
            errors: {}
        }

        this.setInputValue = this.setInputValue.bind(this)
        this.validate = this.validate.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.resetForm = this.resetForm.bind(this)
    }

    setInputValue(e) {
        if (e.target.type === "checkbox") {
            this.setState({ [e.target.name]: e.target.checked })
            return
        }
        this.setState({ [e.target.name]: e.target.value })
    }

    validate(e) {
        if (e) e.preventDefault()

        const errors = {}
        const errorMessages = {
            EMPTY_FIELD: "Please fill up this input field",
            INVALID_EMAIL: "Please enter a valid email address",
            FEEDBACK_ERROR:
                "Please write your Message here. This helps us improve our services.",
            PHOTO_ERROR: "Please upload the photo",
            AGREE_TERMS_ERROR: "By filling this form, you need to agree to the terms.",

        }

        for (let i = 0, e = Object.entries(this.state);i < e.length;i++) {
            let currentInput = e[i]

            if (currentInput[1] === "") {
                if (currentInput[0] === "feedback") {
                    errors[currentInput[0]] = errorMessages.FEEDBACK_ERROR
                } else if (currentInput[0] === "photo") {
                    errors[currentInput[0]] = errorMessages.PHOTO_ERROR
                } else {
                    errors[currentInput[0]] = errorMessages.EMPTY_FIELD
                }
            } else {
                if (
                    currentInput[0] === "email" &&
                    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(currentInput[1].trim())
                ) {
                    errors[currentInput[0]] = errorMessages.INVALID_EMAIL
                }

                if (currentInput[0] === "termsConfirm" && !currentInput[1]) {
                    errors[currentInput[0]] = errorMessages.AGREE_TERMS_ERROR
                }
            }
        }
        this.setState({ errors: errors })

        if (Object.keys(errors).length === 0) {
            this.submitForm()
            this.resetForm()
        }
    }

    submitForm() {
        console.log(`


   ${this.state.fullname}
   ${this.state.email}
   ${this.state.mobileno}
   ${this.state.gender}
   ${this.state.birthdate}
   ${this.state.age}
   ${this.state.photo}
   ${this.state.feedback}


    `)

        alert("Feedback submitted sucessfully.")
    }

    resetForm() {
        this.setState({
            fullname: "",
            email: "",
            mobileno: "",
            gender: "",
            birthdate: "",
            age: "",
            feedback: "",
            photo: "",
            termsConfirm: false,
            errors: {}
        })
    }

    render() {
        return (
            <form onSubmit={this.validate}>
                <h1>Controlled</h1>
                <label htmlFor="fullname">
                    Full Name: <br />
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={this.state.fullname}
                        onChange={this.setInputValue}

                    />
                    {this.state.errors.fullname && (
                        <>
                            <br />
                            <span className="error-text">{this.state.errors.fullname}</span>
                        </>
                    )}
                    <br />
                </label>
                <label htmlFor="email">
                    Email Address:
                    <br />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.setInputValue}
                        noValidate
                        pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"

                    />
                    {this.state.errors.email && (
                        <>
                            <br />
                            <span className="error-text">{this.state.errors.email}</span>
                        </>
                    )}
                    <br />
                </label>
                <label htmlFor="mobileno">
                    Mobile number:
                    <br />
                    <input
                        type="tel"
                        name="mobileno"
                        id="mobileno"
                        value={this.state.mobileno}
                        onChange={this.setInputValue}
                        noValidate
                        pattern="[7-9]{1}[0-9]{9}"

                    />
                    {this.state.errors.mobileno && (
                        <>
                            <br />
                            <span className="error-text">{this.state.errors.mobileno}</span>
                        </>
                    )}
                    <br />
                </label>
                <label htmlFor="gender">
                    Gender:
                    <br />
                    <select
                        name="gender"
                        id="gender"
                        value={this.state.gender}
                        onChange={this.setInputValue}

                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {this.state.errors.gender && (
                        <>
                            <br />
                            <span className="error-text">{this.state.errors.gender}</span>
                        </>
                    )}
                    <br />
                </label>
                <label htmlFor="birthdate">
                    Birthdate:
                    <br />
                    <input
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        onChange={this.setInputValue}

                    />
                    {this.state.errors.birthdate && (
                        <>
                            <br />
                            <span className="error-text">{this.state.errors.birthdate}</span>
                        </>
                    )}
                    <br />
                </label>
                <div  >
                    <p>Please select your age:</p>
                    <input type="radio" id="age1" name="age" value="0-30" checked={this.state.age === '0-30'} onChange={this.setInputValue} />
                    <label for="age1">0 - 30</label><br />
                    <input type="radio" id="age2" name="age" value="31-60" checked={this.state.age === '31-60'} onChange={this.setInputValue} />
                    <label for="age2">31 - 60</label><br />
                </div>
                {this.state.errors.birthdate && (
                    <>
                        <br />
                        <span className="error-text">{this.state.errors.birthdate}</span>
                    </>
                )}
                <br />
                <br />
                <label htmlFor="feedback">
                    Message:
                    <br />
                    <textarea
                        placeholder="eg. Excellent experience so far"
                        name="feedback"
                        id="feedback"
                        value={this.state.feedback}
                        onChange={this.setInputValue}
                        cols="30"
                        rows="6"
                    ></textarea>
                    {this.state.errors.feedback && (
                        <>
                            <br />
                            <span className="error-text">{this.state.errors.feedback}</span>
                        </>
                    )}
                    <br />
                </label>
                <label htmlFor="photo">
                    <br />

                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        onChange={this.setInputValue}

                    />
                    {this.state.errors.photo && (
                        <>
                            <br />
                            <span className="error-text">{this.state.errors.photo}</span>
                        </>
                    )}
                    <br />
                    <br />
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.termsConfirm}
                        name="termsConfirm"
                        onChange={this.setInputValue}

                    />
                    I agree
                    {this.state.errors.termsConfirm && (
                        <>
                            <br />
                            <span className="error-text">{this.state.errors.termsConfirm}</span>
                        </>
                    )}
                    <br />
                    <br />
                </label>

                <button className='button'>Submit</button>

            </form>
        )
    }
}

export default ControlledForm
