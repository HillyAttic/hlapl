import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CaseStudyDetail() {
  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="case-detail-sec mb-80">
          <div className="container-fluid">
            <div className="row row-gap-4">
              <div className="col-lg-8">
                <img src="/images/project-img-1.jpg" className="w-100 mb-32 br-16" alt="" />
                <h2 className="fw-600 mb-16">Johnson Family Estate Settlement</h2>
                <p className="color-sec mb-32">Family Law</p>
                <h4 className="fw-500 mb-16">Case Overview</h4>
                <p className="mb-24">
                  The Johnson family approached our firm facing a complex estate settlement dispute following the passing of their 
                  patriarch. Multiple family members had conflicting claims to the estate, and tensions were running high. Our team 
                  was tasked with navigating these sensitive family dynamics while ensuring a fair and legal distribution of assets.
                </p>
                <h4 className="fw-500 mb-16">The Challenge</h4>
                <p className="mb-24">
                  The estate included multiple properties, business interests, and personal assets valued at over $5 million. 
                  The will was contested by several family members, and there were questions about the validity of certain provisions. 
                  Additionally, some assets were held in trusts with complex distribution requirements.
                </p>
                <h4 className="fw-500 mb-16">Our Approach</h4>
                <p className="mb-24">
                  We began by conducting a thorough review of all estate documents, including the will, trusts, and related legal 
                  instruments. Our team facilitated family mediation sessions to address concerns and work toward consensus. We also 
                  engaged financial experts to properly value all assets and ensure accurate distribution.
                </p>
                <h4 className="fw-500 mb-16">The Outcome</h4>
                <p className="mb-24">
                  After six months of careful negotiation and legal work, we successfully resolved all disputes and achieved a 
                  settlement that satisfied all parties. The estate was distributed according to a modified plan that honored the 
                  deceased's wishes while addressing legitimate family concerns. The case was resolved without litigation, saving 
                  the family significant time, money, and emotional stress.
                </p>
                <h4 className="fw-500 mb-16">Key Takeaways</h4>
                <ul className="mb-32">
                  <li className="mb-12">Early mediation can prevent costly litigation</li>
                  <li className="mb-12">Clear communication with all parties is essential</li>
                  <li className="mb-12">Expert valuation ensures fair distribution</li>
                  <li className="mb-12">Compassionate legal guidance helps families heal</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="case-sidebar">
                  <h5 className="fw-500 mb-24">Case Details</h5>
                  <div className="detail-item mb-16">
                    <p className="fw-500">Practice Area:</p>
                    <p>Family Law</p>
                  </div>
                  <div className="detail-item mb-16">
                    <p className="fw-500">Duration:</p>
                    <p>6 Months</p>
                  </div>
                  <div className="detail-item mb-16">
                    <p className="fw-500">Result:</p>
                    <p>Successful Settlement</p>
                  </div>
                  <div className="detail-item mb-32">
                    <p className="fw-500">Client:</p>
                    <p>Johnson Family</p>
                  </div>
                  <a href="/contact" className="cus-btn w-100">
                    <span className="text">Contact Us</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
