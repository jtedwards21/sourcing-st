import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section className="box white-box">
            <h2>Who we are</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
        </section>
        <section className="box white-box">
            <h2>Contact Information</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Kangqiao Gardens &bull; Jiaxing, Zhejiang 314000 &bull; China</dd>
                <dt>Phone</dt>
                <dd>(+86) 159 58377430</dd>
                <dt>Email</dt>
                <dd><a href="#">information@untitled.tld</a></dd>
            </dl>
        </section>
        <p className="copyright">&copy; Delta Sourcing</p>
    </footer>
)

export default Footer
