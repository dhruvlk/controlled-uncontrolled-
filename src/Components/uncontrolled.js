import { Component, createRef } from "react"

class UncontrolledForm extends Component {
    constructor() {
        super()

        this.inputRefs = {
            fullname: createRef(),
            email: createRef(),
            mobileno: createRef(),
            gender: createRef(),
            birthdate: createRef(),
            myAgeValue: createRef(),
            myAgeValue1: createRef(),

            feedback: createRef(),
            photo: createRef(),
            terms: createRef()
        }

        this.error = {
            fullname: createRef(),
            email: createRef(),
            mobileno: createRef(),
            gender: createRef(),
            birthdate: createRef(),
            myAgeValue: createRef(),

            feedback: createRef(),
            photo: createRef(),
            terms: createRef()
        }

        this.submitForm = this.submitForm.bind(this)
        this.validate = this.validate.bind(this)
    }


    validate() {
        let errorCount = 0

        const errorMessages = {
            EMPTY_FIELD: "Please fill up this input field",
            EMPTY_AGEE: "Please fill up",
            INVALID_EMAIL: "Please enter a valid email address",
            FEEDBACK_ERROR:
                "Please write your feedback here. This helps us improve our services.",
            PHOTO_ERROR: "Please upload the photo to complete the feedback process",
            AGREE_TERMS_ERROR: "By filling this form, you need to agree to the terms."
        }

        if (this.inputRefs.fullname.current.value.trim() === "") {
            this.error.fullname.current.innerText = "Please enter your name here"
            errorCount++
        }

        if (this.inputRefs.email.current.value.trim() === "") {
            this.error.email.current.innerText =
                "Please enter your email address here."
            errorCount++
        }

        if (
            !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
                this.inputRefs.email.current.value.trim()
            )
        ) {
            this.error.email.current.innerText = errorMessages.INVALID_EMAIL
            errorCount++
        }

        if (this.inputRefs.mobileno.current.value.trim() === "") {
            this.error.mobileno.current.innerText = errorMessages.EMPTY_FIELD
            errorCount++
        }

        // if (this.inputRefs.age.current.value.trim() === "") {
        //     this.error.age.current.innerText = "Please enter your name here"
        //     errorCount++
        // }

        if (this.inputRefs.gender.current.value.trim() === "") {
            this.error.gender.current.innerText = "Please select your gender."
            errorCount++
        }


        if (this.inputRefs.birthdate.current.value.trim() === "") {
            this.error.birthdate.current.innerText = "Please select your birth date."
            errorCount++
        }


        if (this.inputRefs.feedback.current.value.trim() === "") {
            this.error.feedback.current.innerText = errorMessages.FEEDBACK_ERROR
            errorCount++
        }

        if (this.inputRefs.photo.current.value.trim() === "") {
            this.error.photo.current.innerText = errorMessages.PHOTO_ERROR
            errorCount++
        }

        if (!this.inputRefs.terms.current.checked) {
            this.error.terms.current.innerText = errorMessages.AGREE_TERMS_ERROR
            errorCount++
        }

        return errorCount
    }

    submitForm(e) {
        e.preventDefault()
        console.log('this => ', this.inputRefs.myAgeValue.current.value)
        console.log('this => ', this.inputRefs.myAgeValue1.current.value)

        if (this.validate() === 0) {
            console.log(`


      ${this.inputRefs.fullname.current.value}
      ${this.inputRefs.email.current.value}
      ${this.inputRefs.mobileno.current.value}
      ${this.inputRefs.gender.current.value}
      ${this.inputRefs.birthdate.current.value}
      ${this.inputRefs.myAgeValue.current.value}
      ${this.inputRefs.photo.current.value}
      ${this.inputRefs.feedback.current.value}
      `)

            alert("Feedback submitted sucessfully.")

            this.resetForm()
        }
    }

    resetForm() {
        this.inputRefs.fullname.current.value = ""
        this.inputRefs.email.current.value = ""
        this.inputRefs.mobileno.current.value = ""
        this.inputRefs.gender.current.value = ""
        this.inputRefs.birthdate.current.value = ""
        this.inputRefs.myAgeValue.current.value = ""
        // this.inputRefs.myAgeData.current.select = ""
        this.inputRefs.feedback.current.value = ""
        this.inputRefs.photo.current.value = ""
        this.inputRefs.terms.current.checked = false

        this.error.fullname.current.innerText = ""
        this.error.email.current.innerText = ""
        this.error.mobileno.current.innerText = ""
        this.error.gender.current.innerText = ""
        this.error.birthdate.current.innerText = ""
        this.error.myAgeValue.current.innerText = ""
        // this.error.myAgeData.current.innerText = ""
        this.error.feedback.current.innerText = ""
        this.error.photo.current.innerText = ""
        this.error.terms.current.innerText = ""
    }

    render() {
        // console.log(this.inputRefs.myAgeValue)
        return (
            <form onSubmit={this.submitForm}>
                <h1>Uncontrolled</h1>
                <div>
                    <label htmlFor="fullname">Full name</label>
                    <br />
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        ref={this.inputRefs.fullname}

                    />
                    <br />

                    <span className="error-text" ref={this.error.fullname}></span>

                    <br />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        ref={this.inputRefs.email}
                        pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"

                    />
                    <br />
                    <span className="error-text" ref={this.error.email}></span>
                    <br />
                </div>
                <div>
                    <label htmlFor="mobileno">Mobile number:</label>
                    <br />
                    <input
                        type="tel"
                        name="mobileno"
                        id="mobileno"
                        ref={this.inputRefs.mobileno}
                        pattern="[7-9]{1}[0-9]{9}"

                    />
                    <br />
                    <span className="error-text" ref={this.error.mobileno}></span>
                    <br />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <br />
                    <select name="gender" id="gender" ref={this.inputRefs.gender} >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <br />
                    <span className="error-text" ref={this.error.gender}></span>
                    <br />
                </div>
                <div>
                    <label htmlFor="birthdate">Birth date:</label>
                    <br />
                    <input
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        ref={this.inputRefs.birthdate}
                    />
                    <br />
                    <span className="error-text" ref={this.error.birthdate}></span>
                    <br />
                </div>

                <div >
                    <p>Please select your age:</p>

                    <input type="radio" id="age1" name="age" value="0-30" ref={this.inputRefs.myAgeValue} />
                    <label for="age1">0 - 30</label><br />

                    <input type="radio" id="age2" name="age" value="31-60" ref={this.inputRefs.myAgeValue1} />
                    <label for="age2">31 - 60</label><br />
                </div>

                <div>
                    <label htmlFor="feedback">Message:</label>
                    <br />
                    <textarea
                        name="feedback"
                        id="feedback"
                        cols="30"
                        rows="4"
                        ref={this.inputRefs.feedback}
                    ></textarea>
                    <br />
                    <span className="error-text" ref={this.error.feedback}></span>
                    <br />
                </div>
                <div>
                    <label htmlFor="photo"></label>
                    <br />
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        ref={this.inputRefs.photo}
                    />
                    <br />
                    <span className="error-text" ref={this.error.photo}></span>
                    <br />
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        ref={this.inputRefs.terms}
                    />
                    <label htmlFor="terms">
                        I agree
                    </label>
                    <br />
                    <span className="error-text" ref={this.error.terms}></span>
                </div>
                <div>
                    <br />
                    <button className='button'>Submit</button>
                </div>
            </form>
        )
    }
}

export default UncontrolledForm
