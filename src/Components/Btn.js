import React, { Component } from 'react'
import ControlledForm from './controlled'
import './style.css'
import UncontrolledForm from './uncontrolled'


class AllBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'React',
            showHideDemo1: false,
            showHideDemo2: false,

        }
        this.hideComponent = this.hideComponent.bind(this)
    }

    hideComponent(name) {
        console.log(name)
        switch (name) {
            case 'showHideDemo1':
                this.setState({ showHideDemo1: !this.state.showHideDemo1 })
                break
            case 'showHideDemo2':
                this.setState({ showHideDemo2: !this.state.showHideDemo2 })
                break

            default:
            // null
        }
    }

    render() {
        const {

            showHideDemo1,
            showHideDemo2,

        } = this.state
        return (
            <div>
                <div className="wrap">
                    <button
                        className='button'
                        onClick={() => this.hideComponent('showHideDemo1')}
                    >
                        Controlled
                    </button>
                    &nbsp;&nbsp;
                    <button
                        className='button'
                        onClick={() => this.hideComponent('showHideDemo2')}
                    >
                        Uncontrolled
                    </button>
                    &nbsp;&nbsp;

                </div>

                {showHideDemo1 && <ControlledForm />}
                {showHideDemo2 && <UncontrolledForm />}

            </div>
        )
    }
}

export default AllBtn
