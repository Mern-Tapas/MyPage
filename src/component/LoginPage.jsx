import React from 'react'
import LoginForm from './LoginForm'
import { Routes, Route, Link } from 'react-router-dom'

function LoginPage() {
    return (
        <>
            <div className="col login-page">
                <div className="row h-100 d-flex">
                    <Routes>
                        <Route path='/' element={<LoginForm />}/>
                        <Route path='/register' element={<LoginForm/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default LoginPage