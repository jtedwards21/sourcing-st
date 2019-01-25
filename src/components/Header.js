import React from 'react'

import logo from '../assets/images/logo.svg';
import brp from '../assets/images/blue_river_side_text.png';

const Header = (props) => (
    <header id="header" className="alt">
        <div className="box white-box">
        <span className="image"><img src={brp} alt="" /></span>
        <p>Sourcing agents to help you do more<br />
        with your business.</p>
        </div>
    </header>
)

export default Header
