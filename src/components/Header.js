import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Stellar Sourcing</h1>
        <p>Sourcing agents to help you do more<br />
        with your business.</p>
    </header>
)

export default Header
