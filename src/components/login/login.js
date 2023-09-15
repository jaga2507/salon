import React, { useState } from 'react';
import "./Login.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import Button from '@mui/material/Button';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';




function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    return (
        <div>
            <div className='form'>
                <div className='login_input' >
                    <EmailOutlinedIcon className='email_logo' />
                    <input
                        type='email'
                        placeholder='enter your email'
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
                </div>
                <br></br>
                <div className='login_input' >
                    <PasswordOutlinedIcon className='email_logo' />
                    <input
                        type='password'
                        placeholder='enter your email'
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                </div>
                <br></br>
                <div className='forgotPass' >
                    <a>Forgot Passaword</a>
                </div>
                <br></br>
                <Link to="/" >
                    <Button
                        variant="contained"
                        className='login_btn'
                    >
                        Sign in
                    </Button>
                </Link>
            </div>
            <ToastContainer
                style={{
                    marginTop: "50px"
                }}
            />
        </div >
    )
}

export default Login;