import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SupplierHeader from '../components/SupplierHeader'
import pic04 from '../assets/images/pic04.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic11 from '../assets/images/pic11.jpg'
import pic12 from '../assets/images/pic12.jpeg'
import pic09 from '../assets/images/pic09.jpg'
import pic99 from '../assets/images/pic99.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Our Suppliers" />
        <SupplierHeader />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic99} alt="" /></span>
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Packaging</h2>
                </header>
                <p>Suppliers typically offer a variety of different options for packaging and shipping, according to customer requirements. Many customers choose to finish all packaging before the product has left China. This may include cardboard boxes, tags, labels and information includeds in the packaging.</p>
                <p>Please let us know what your requirements are and we can take care of thise as quickly as possible.</p>
              </div>
              <span className="image"><img src={pic07} alt="" /></span>
            </div>
          </section>
          <section id="twos" className="main special">
            <header className="major">
              <h2>Shipping, Assembly and Consolidation</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon image main"><img src={pic11} alt="" /></span>
                <h3>Create supplier shortlists</h3>
                <p>Shipping options you should consider depend on your order size, product and the time-frame in which you'd like your product to arrive. Options include sea freight, air freight and express services.</p>
              </li>
              <li>
                <span className="icon image main"><img src={pic12} alt="" /></span>
                <h3>Verification of QC reports</h3>
                <p>If you have a product, that needs to be assembled, our suppliers can assign and train workers to do this process for you without shipping components to a third party.</p>
              </li>
              <li>
                <span className="icon image main"><img src={pic09} alt="" /></span>
                <h3>Offloading of RFQ and price negotiations</h3>
                <p>If you have multiple products or components that you would like shipped together, we can arrange for them to be stored together at no extra cost.</p>
              </li>
            </ul>
          </section>
          <section id="threes" className="main">
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
