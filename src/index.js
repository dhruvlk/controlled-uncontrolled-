import React from 'react'
import ReactDOM from 'react-dom/client'
import Controlled from './Components/controlled'
import Uncontrolled from './Components/uncontrolled'
import New from './Components/New'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        {/* <Controlled /> */}
        {/* <New /> */}
        <Uncontrolled />
    </>
)

