import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import AboutHeader from '../components/AboutHeader'
import pic04 from '../assets/images/pic04.jpg'
import mappic from '../assets/images/mappic01.png'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="About Us" />
        <AboutHeader />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={mappic} alt="" /></span>
            <h2>Company Location</h2>
            <p>We are located in Jiaxing, just outside of Shanghai. This allows for convenient travel and shipping from the surrounding area, including Suzhou, Hangzhou, Wuxi, and Ningbo. Goods from this area account for about a third of China's exports.</p>
            <p>Many of our services concentrate on products and companies in this area, and includes products from the automotive, textile, and electronics industry, among others.</p>
            <h2>Industry Experience</h2>
            <p>We have been </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
