import { Component, createRef } from "react"

class Uncontrolled extends Component {
    constructor() {
        super()

        this.inputRefs = {
            fullname: createRef(),
            email: createRef(),
            mobileno: createRef(),
            gender: createRef(),
            photo: createRef(),
        }

        this.submitForm = this.submitForm.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate() {
        let errorCount = 0
        return errorCount
    }

    submitForm(e) {
        e.preventDefault()

        if (this.validate() === 0) {
            console.log(`
         ${this.inputRefs.fullname.current.value}
         ${this.inputRefs.email.current.value}
         ${this.inputRefs.mobileno.current.value}
         ${this.inputRefs.gender.current.value}
         ${this.inputRefs.photo.current.value}
      `)
            // alert("Feedback submitted sucessfully.")
        }
    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <h1>Uncontrolled</h1>
                <div>
                    <label htmlFor="fullname">Full name</label>
                    <br />
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Enter Your Name"
                        id="fullname"
                        ref={this.inputRefs.fullname}
                        // pattern="[A-Za-z]"
                        // maxLength="10"
                        required
                    />
                    <br />
                    <br />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                        pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                        // pattern=".+@globex\.com"
                        placeholder="Enter Your Email"
                        ref={this.inputRefs.email}
                        required
                    />
                    <br />
                    <br />
                </div>
                <div>
                    <label htmlFor="mobileno">Mobile number:</label>
                    <br />
                    <input
                        type="tel"
                        name="mobileno"
                        id="mobileno"
                        placeholder="Enter Your Number"
                        ref={this.inputRefs.mobileno}
                        pattern="[7-9]{1}[0-9]{9}"
                        required
                    />
                    <br />
                    <br />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <br />
                    <select name="gender" id="gender" ref={this.inputRefs.gender} required>
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>


                </div>


                <div>
                    <label htmlFor="photo"></label>
                    <br />
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        ref={this.inputRefs.photo}
                        required
                    />
                    <br />
                    <br />
                </div>

                <div>
                    <br />
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default Uncontrolled
