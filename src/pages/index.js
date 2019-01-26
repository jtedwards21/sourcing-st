import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="DS - Delta Sourcing" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Our Business</h2>
                </header>
                <p>With years of experience in sourcing, manufacturing and the export industry, we are here to help you with improve your bottom line.</p>
                <p>Our experience and services cover both small and large companies.</p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Experience and Services</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Create supplier shortlists</h3>
                <p>We sort through listing, contacting individual companies who have shown themselves to deliver quality at a great value.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Verification of QC reports</h3>
                <p>We check shipments before they leave the factory to ensure that manufacturer testing has been done properly.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Offloading of RFQ and price negotiations</h3>
                <p>We negotiate pricing for product and shipping to make sure you reach your goals.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Our Suppliers</h2>
              <p>We personally tour our suppliers' facilities to ensure that they meet our standards <br />as well as those of our customers.</p>
            </header>

              <footer className="major">
                <ul className="actions">
                  <li><Link to="/suppliers" className="button">Learn More</Link></li>
                </ul>
              </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Get Started</h2>
              <p>Contact us today for an estimate. We enjoy meeting new people and learning about their business.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/contact" className="button">Contact Us</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
