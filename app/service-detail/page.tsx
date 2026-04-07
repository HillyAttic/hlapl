import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServiceDetail() {
  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="service-detail-sec mb-80">
          <div className="container-fluid">
            <div className="row row-gap-4">
              <div className="col-lg-8">
                <img src="/images/img-1.jpg" className="w-100 mb-32 br-16" alt="" />
                <h2 className="fw-600 mb-24">Family Law Services</h2>
                <p className="mb-24">
                  Our family law practice is dedicated to helping families navigate through some of life's most challenging moments. 
                  We understand that family matters are deeply personal and require a compassionate, yet strategic approach.
                </p>
                <h4 className="fw-500 mb-16">Our Family Law Services Include:</h4>
                <ul className="mb-32">
                  <li className="mb-12">Divorce and Separation</li>
                  <li className="mb-12">Child Custody and Support</li>
                  <li className="mb-12">Spousal Support and Alimony</li>
                  <li className="mb-12">Property Division</li>
                  <li className="mb-12">Adoption Services</li>
                  <li className="mb-12">Prenuptial Agreements</li>
                </ul>
                <h4 className="fw-500 mb-16">Why Choose Us?</h4>
                <p className="mb-24">
                  With over 20 years of experience in family law, our attorneys have successfully handled thousands of cases. 
                  We pride ourselves on our client-focused approach, ensuring that your voice is heard and your rights are protected 
                  throughout the legal process.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="service-sidebar">
                  <h5 className="fw-500 mb-24">All Services</h5>
                  <ul className="service-list">
                    <li><a href="/service-detail">Family Law</a></li>
                    <li><a href="/service-detail">Corporate Law</a></li>
                    <li><a href="/service-detail">Criminal Defense</a></li>
                    <li><a href="/service-detail">Personal Injury</a></li>
                    <li><a href="/service-detail">Real Estate Law</a></li>
                    <li><a href="/service-detail">Civil Litigation</a></li>
                  </ul>
                  <div className="contact-box mt-48 p-32 bg-light">
                    <h5 className="fw-500 mb-24">Need Legal Help?</h5>
                    <p className="mb-24">Contact us today for a free consultation</p>
                    <a href="/contact" className="cus-btn w-100">
                      <span className="text">Contact Us</span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </a>
                  </div>
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
