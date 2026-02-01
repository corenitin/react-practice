import { useState } from 'react'
import './LoginForm.css'

function Loginform() {

    const [showState, setHideState] = useState('Show')

    function hideButton() {
        setHideState('Hide')
    }

    return (
        <>
            <div>
                <input className="input-email" type="email" placeholder="Email" />
            </div>
            <div>
                <input className="input-password" type={showState === "Show" ? "password" : "text"} placeholder="Password" />
                <button className="password-show-btn" onClick={hideButton}>{showState}</button>
            </div>
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign up</button>
        </>
    )
}

export default Loginform