import * as React from 'react';
import "./Login.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Button from '@mui/material/Button';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

function Login(props) {


    return (
        <div>
            <div className='form'>
                <div className='login_input' >
                    <BusinessIcon className='email_logo' />
                    <input type='text' placeholder='enter your Business Name' />
                </div>
                <br></br>
                <div className='login_input' >
                    <PersonIcon className='email_logo' />
                    <input type='text' placeholder='enter your Name' />
                </div>
                <br></br>
                <div className='login_input' >
                    <ContactPhoneIcon className='email_logo' />
                    <input type='number' placeholder='enter your Business number' />
                </div>
                <br></br>
                <div className='login_input' >
                    <LocalPhoneOutlinedIcon className='email_logo' />
                    <input type='number' placeholder='enter your number' />
                </div>
                <br></br>
                <div className='login_input' >
                    <EmailOutlinedIcon className='email_logo' />
                    <input type='email' placeholder='enter your Business email' />
                </div>
                <br></br>
                <div className='login_input' >
                    <LocationOnIcon className='email_logo' />
                    <textarea type='text' placeholder='enter your Office Address' />
                </div>
                <br></br>
                <div className='login_input' >
                    <PasswordOutlinedIcon className='email_logo' />
                    <input type='password' placeholder='enter your Office Address' />
                </div>
                <br></br>
                <div>
                    <Button variant="contained" className='login_btn'>
                        Signup
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Login;