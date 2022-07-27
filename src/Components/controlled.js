import { Component } from "react"
// import "./style.css"

class Controlled extends Component {
    constructor() {
        super()
        this.state = {
            fullname: "",
            email: "",
            mobileno: "",
            gender: "",
            photo: "",
            errors: {}
        }

        this.setInputValue = this.setInputValue.bind(this)
        this.validate = this.validate.bind(this)
        this.submitForm = this.submitForm.bind(this)
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
        this.setState({ errors: errors })

        if (Object.keys(errors).length === 0) {
            this.submitForm()
        }
    }

    submitForm() {
        console.log(`
    ${this.state.fullname}
    ${this.state.email}
    ${this.state.mobileno}
    ${this.state.gender}
    ${this.state.photo}



    `)

    }

    resetForm() {
        this.setState({
            fullname: "",
            email: "",
            mobileno: "",
            gender: "",
            photo: "",
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
                        placeholder="Enter Your Name"
                        required
                    />
                    <br />
                    {this.state.errors.fullname && (
                        <>
                            <br />
                            <span className="error">{this.state.errors.fullname}</span>
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
                        placeholder="Enter Your Email"
                        noValidate
                        pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                        required
                    />
                    <br />
                    {this.state.errors.email && (
                        <>
                            <br />
                            <span className="error">{this.state.errors.email}</span>
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
                        placeholder="Enter Your Number"
                        noValidate
                        pattern="[7-9]{1}[0-9]{9}"
                        required

                    />
                    <br />
                    {this.state.errors.mobileno && (
                        <>
                            <br />
                            <span className="error">{this.state.errors.mobileno}</span>
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
                        required
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {this.state.errors.gender && (
                        <>
                            <br />
                            <span className="error">{this.state.errors.gender}</span>
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
                        required
                    />
                    {this.state.errors.photo && (
                        <>
                            <br />
                            <span className="error">{this.state.errors.photo}</span>
                        </>
                    )}
                    <br />
                    <br />
                </label>

                <button>Submit</button>
            </form>
        )
    }
}

export default Controlled
