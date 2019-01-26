import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section className="box white-box">
            <h2>About Us</h2>
            <p>Our mission is to help your business source products from China with no hassle or worry. It takes many companies years to find and establish a steady business relationship with a supplier in China. We have years of experience working with factories in Eastern China and can help you establish the kind of business relationships you need to be successful.</p>
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
