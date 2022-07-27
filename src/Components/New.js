import { Component } from 'react'

class newApp extends Component {
    state = {
        firstName: '',
        lastName: '',
        Age: '',
        gender: '',
        isSubmitted: false
    };

    handleChange = event => {
        const { name, value } = event.target
        console.log(event.target)
        this.setState({ [name]: value })
    };

    handleSubmit = event => {
        this.setState({ isSubmitted: true })
        event.preventDefault()
    };

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="number"
                        name="Age"
                        value={this.state.Age}
                        placeholder="Age"
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === 'male'}
                            onChange={this.handleChange}
                        />{' '}
                        Male
                        <br />
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            checked={this.state.gender === 'female'}
                            value="female"
                            onChange={this.handleChange}
                        />{' '}
                        Female <br /> <br />
                    </label>

                    <label>
                        <textarea>

                        </textarea>
                    </label>
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                {this.state.isSubmitted === true ? (
                    <div>
                        {' '}
                        <p>
                            {' '}
                            Your name: {this.state.firstName}
                            {this.state.lastName}
                        </p>
                        <p> Your age: {this.state.Age} </p>
                        <p> Your gender: {this.state.gender} </p>{' '}
                    </div>
                ) : (
                    <div> </div>
                )}
            </main>
        )
    }
}

export default newApp
