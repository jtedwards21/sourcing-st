import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import ServicesHeader from '../components/ServicesHeader'
import pic57 from '../assets/images/pic57.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Our Services" />
        <ServicesHeader />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic57} alt="" /></span>
            <h2>Product Sourcing</h2>
            <p>Many companies and individuals don't know how to find suppliers, or don't know how to choose among the many are available. We will help you find an appropriate manufacturer and get their quotation in less than 2 working days.</p>
            <p>If you'd previously had a manufacturer that you weren't satisfied with, we can help you find someone with better price and quality.</p>
            <h2>Product Samples</h2>
            <p>If you're located outside of China, getting samples can often be a waste of time and money.</p>
            <p>It's more time- and cost-efficient for us to receive your samples for you. Anything that doesn't meet basic standards with not be shipped to you and the rest will be consolidated.</p>
            <h2>Product Samples</h2>
            <p>If you're located outside of China, getting samples can often be a waste of time and money.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
