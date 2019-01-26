import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>Packaging</h2>
            <p>Suppliers typically offer a variety of different options for packaging and shipping, according to customer requirements. Many customers choose to finish all packaging before the product has left China. This may include cardboard boxes, tags, labels and information includeds in the packaging.</p>
            <p>Please let us know what your requirements are and we can take care of thise as quickly as possible.</p>
            <h2>Shipping, Assembly and Consolidation</h2>
            <p>Shipping options you should consider depend on your order size, product and the time-frame in which you'd like your product to arrive. Options include sea freight, air freight and express services.</p>
            <p>If you have a product, that needs to be assembled, our suppliers can assign and train workers to do this process for you without shipping components to a third party.</p>
            <p>If you have multiple products or components that you would like shipped together, we can arrange for them to be stored together at no extra cost.</p>
            <h2>Inspection and Quality Guarantee</h2>
            <p>Our suppliers are interested in having a long-term business relationship with customers, and most are willing to offer a guarantee that the product received is consistent with the samples received prior to mass production.</p>
            <p>Depending on the product, what we typically offer is the inspection of each individual product, until we can confirm that the shipment is 100% composed of </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
