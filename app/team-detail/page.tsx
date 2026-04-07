import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TeamDetail() {
  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="team-detail-sec mb-80">
          <div className="container-fluid">
            <div className="row row-gap-4">
              <div className="col-lg-4">
                <img src="/images/team-1.jpg" className="w-100 br-16 mb-24" alt="" />
                <div className="contact-info p-32 bg-light br-16">
                  <h5 className="fw-500 mb-24">Contact Information</h5>
                  <div className="mb-16">
                    <p className="fw-500 mb-8">Email:</p>
                    <a href="mailto:william.garcia@lawify.com">william.garcia@lawify.com</a>
                  </div>
                  <div className="mb-16">
                    <p className="fw-500 mb-8">Phone:</p>
                    <a href="tel:+12125556789">+1 212-555-6789</a>
                  </div>
                  <div className="social-links mt-24">
                    <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="me-3"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <h2 className="fw-600 mb-16">William Garcia</h2>
                <h5 className="fw-400 color-sec mb-32">Criminal Defense Attorney</h5>
                <p className="mb-24">
                  William Garcia is a seasoned criminal defense attorney with over 15 years of experience defending clients 
                  in complex criminal cases. His dedication to justice and unwavering commitment to his clients have earned 
                  him a reputation as one of the top criminal defense lawyers in the region.
                </p>
                <h4 className="fw-500 mb-16">Education & Credentials</h4>
                <ul className="mb-32">
                  <li className="mb-12">Juris Doctor (J.D.) - Harvard Law School</li>
                  <li className="mb-12">Bachelor of Arts in Political Science - Yale University</li>
                  <li className="mb-12">Licensed to practice in New York and Federal Courts</li>
                  <li className="mb-12">Member of the American Bar Association</li>
                </ul>
                <h4 className="fw-500 mb-16">Areas of Expertise</h4>
                <ul className="mb-32">
                  <li className="mb-12">White Collar Crimes</li>
                  <li className="mb-12">Drug Offenses</li>
                  <li className="mb-12">DUI/DWI Defense</li>
                  <li className="mb-12">Assault and Battery</li>
                  <li className="mb-12">Federal Crimes</li>
                </ul>
                <h4 className="fw-500 mb-16">Notable Cases</h4>
                <p className="mb-24">
                  William has successfully defended numerous high-profile cases, securing acquittals and reduced sentences 
                  for his clients. His strategic approach and thorough preparation have resulted in a 90% success rate in 
                  criminal defense cases.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
