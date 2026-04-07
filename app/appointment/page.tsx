import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Appointment() {
  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="appointment-sec mb-80 wow fadeInUp animated" data-wow-delay="320ms">
          <div className="container-fluid">
            <img className="appointment-vec d-sm-block d-none" src="/images/appointment-vector.png" alt="" />
            <div className="row row-gap-4 align-items-stretch h-100">
              <div className="col-lg-6">
                <div className="h-100">
                  <h6 className="fw-400 color-sec mb-8">Have Any Questions?</h6>
                  <h2 className="fw-600 mb-32">Book An Appointment</h2>
                  <form method="post" className="contact-form">
                    <div className="row row-gap-4">
                      <div className="col-md-6">
                        <p className="subtitle black mb-8">Your Name</p>
                        <input type="text" name="name" id="firstName" className="form-control" required placeholder="John Deo" />
                      </div>
                      <div className="col-md-6">
                        <p className="subtitle black mb-8">Your Email</p>
                        <input type="email" name="email" id="e-mail" className="form-control" required placeholder="exampleinfo@gmail.com" />
                      </div>
                      <div className="col-md-6">
                        <p className="subtitle black mb-8">Your Phone Number</p>
                        <input type="text" name="tel" id="number-tel" className="form-control" required placeholder="+1 123 456 789" />
                      </div>
                      <div className="col-md-6">
                        <p className="subtitle black mb-8">Practice Area</p>
                        <div className="w-100 drop-container">
                          <div className="wrapper-dropdown form-control" id="dropdown-l2">
                            <div className="d-flex align-items-center justify-content-between">
                              <span className="selected-display" id="desation112">Service</span>
                              <svg id="drop12" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                <path d="M15.787 0.849713C15.503 0.565737 15.0425 0.565688 14.7585 0.849761L8.00017 7.60821L1.24153 0.849713C0.957552 0.565737 0.497042 0.565688 0.213018 0.849761C-0.0710061 1.13379 -0.0710061 1.59425 0.213018 1.87827L7.48594 9.151C7.62233 9.28739 7.8073 9.36399 8.00017 9.36399C8.19304 9.36399 8.37806 9.28734 8.5144 9.15095L15.7869 1.87822C16.071 1.59425 16.071 1.13374 15.787 0.849713Z" fill="#1F1F1F"></path>
                              </svg>
                            </div>
                            <ul className="topbar-dropdown">
                              <li className="item">Criminal Defense</li>
                              <li className="item">Family Law</li>
                              <li className="item">Corporate Law</li>
                              <li className="item">Personal Injury</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <p className="subtitle black mb-8">Message</p>
                        <div className="input-block">
                          <textarea name="message" id="comments" className="form-control" placeholder="Write your message here..."></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="check-block mb-24">
                          <input type="checkbox" id="remember" />
                          <label htmlFor="remember">I consent to the collection and storage of my data.</label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="cus-btn bg-primary" type="submit">
                        <span className="text white">Send Message</span>
                        <i className="fa-solid fa-chevron-right white"></i>
                      </button>
                    </div>
                    <div id="message" className="alert-msg"></div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="h-100">
                  <img className="br-16 w-100 object-fit-cover h-100" src="/images/appiontment-img.jpg" alt="appiontment-img" />
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
