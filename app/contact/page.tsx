import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="contact-sec mb-80">
          <div className="container-fluid">
            <div className="text-center mb-48">
              <h6 className="fw-400 color-sec mb-16">Contact Us</h6>
              <h2 className="fw-600">Get In Touch</h2>
            </div>
            <div className="row row-gap-4">
              <div className="col-lg-6">
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
                      <p className="subtitle black mb-8">Subject</p>
                      <input type="text" name="subject" className="form-control" required placeholder="Subject" />
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
              <div className="col-lg-6">
                <div className="contact-info">
                  <h4 className="fw-500 mb-32">Contact Information</h4>
                  <div className="info-item mb-24">
                    <div className="d-flex align-items-start gap-16">
                      <img src="/images/call-vector.png" alt="" />
                      <div>
                        <h6 className="fw-500 mb-8">Phone</h6>
                        <a href="tel:+12125556789">+1 212-555-6789</a>
                      </div>
                    </div>
                  </div>
                  <div className="info-item mb-24">
                    <div className="d-flex align-items-start gap-16">
                      <img src="/images/mail-vector.png" alt="" />
                      <div>
                        <h6 className="fw-500 mb-8">Email</h6>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="info-item mb-24">
                    <div className="d-flex align-items-start gap-16">
                      <img src="/images/location-vector.png" alt="" />
                      <div>
                        <h6 className="fw-500 mb-8">Address</h6>
                        <p>456 Fifth Avenue, NY City, USA</p>
                      </div>
                    </div>
                  </div>
                  <div className="info-item">
                    <h6 className="fw-500 mb-16">Office Hours</h6>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
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
