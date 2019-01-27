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
            <h2>Production Follow-Up</h2>
            <p>Follow-up is generally more time-consuming than looking for a supplier, and for many companies is ongoing.</p>
            <p>Follow-up means that while ensure that everything is produced on time and to requirements, and that we periodically as the status of your order.</p>
            <p>We also ensure that the import and export process goes smoothly.</p>
            <h2>Shipping</h2>
            <p>We will calculate all costs for shipping as well as the time-frame in which you should expect to receive the goods. This way we can find the shipping method that works best for you.</p>
            <h2>Infromational Materials, Photography and Design</h2>
            <p>We also provide this type of service.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
