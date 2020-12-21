import React from 'react';

import background from '../assets/img/background.svg';
import phone from '../assets/img/picture.svg';
import logo from '../assets/icon/firebase.svg';
import login from '../assets/icon/login.svg';
import mobileMenu from '../assets/icon/menu.svg';

export default function Header() {
    return (
        <header>
            <div className = "container">
                <div className = "navBar">
                    <div className = "logo">
                        <img src = {logo} alt="logo"/>
                    </div>

                    <div className = "links">
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                Articles
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </div>

                    <div className = "accountBtns">
                        <ul>
                            <li>
                                <img src={login} alt="login"/>
                            </li>
                            <li>
                                Sign up
                            </li>
                        </ul>
                    </div>

                    <div className = "mobileMenu">
                        <img src={mobileMenu} alt="mobileMenu"/>
                    </div>
                </div>
                <img className = "background" src = {background} alt="background"/>
                <img className = "phone" src = {phone} alt="phone"/>
                <div className = "data">
                    <h1>Firearticels</h1>
                    <h2>Post articles quickly and easily on our service</h2>
                    <button>
                        Get started
                    </button>
                </div>
            </div>
        </header>
    )
}