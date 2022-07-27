import React from 'react'
import ReactDOM from 'react-dom/client'
import Controlled from './Components/controlled'
import Uncontrolled from './Components/uncontrolled'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <Controlled />
        {/* <Uncontrolled /> */}
    </>
)

