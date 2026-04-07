import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="stricky-header stricked-menu">
        <div className="sticky-header__content"></div>
      </div>

      <main className="main-wrapper">
        {/* Hero Section */}
        <section className="hero-sec mb-80">
          <div className="container-fluid">
            <div className="row row-gap-4">
              <div className="col-lg-6 col-sm-9 col-12">
                <div className="hero-wrapper wow fadeInUp animated" data-wow-delay="2000ms">
                  <h6 className="fw-400 white font-sec mb-8">Welcome To Lawify</h6>
                  <h1 className="white mb-24 pe-2">We Are Experts In Legal <span className="color-sec">Profession</span></h1>
                  <p className="light-gray pe-sm-5 pe-0 mb-40">
                    For over two decades, we have been serving our clients with unparalleled dedication and expertise. Our team of experienced attorneys...
                  </p>
                  <div className="btn-block mb-48">
                    <a href="/appointment" className="cus-btn">
                      <span className="text">Get Started</span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </a>
                    <a href="/services" className="cus-btn-2">
                      <span className="text">Explore Our Services</span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </a>
                  </div>
                  <div className="user-review-block wow zoomIn animated" data-wow-delay="2200ms">
                    <div className="img-block">
                      <img src="/images/hero-user-1.png" alt="user-1" />
                      <img src="/images/hero-user-2.png" alt="user-1" />
                      <img src="/images/hero-user-3.png" alt="user-1" />
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-8 gap-4p">
                        {[...Array(4)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                            <path d="M7.04894 1.42705C7.3483 0.505739 8.6517 0.50574 8.95106 1.42705L10.0206 4.71885C10.1545 5.13087 10.5385 5.40983 10.9717 5.40983H14.4329C15.4016 5.40983 15.8044 6.64945 15.0207 7.21885L12.2205 9.25329C11.87 9.50793 11.7234 9.9593 11.8572 10.3713L12.9268 13.6631C13.2261 14.5844 12.1717 15.3506 11.388 14.7812L8.58778 12.7467C8.2373 12.4921 7.7627 12.4921 7.41221 12.7467L4.61204 14.7812C3.82833 15.3506 2.77385 14.5844 3.0732 13.6631L4.14277 10.3713C4.27665 9.9593 4.12999 9.50793 3.7795 9.25329L0.979333 7.21885C0.195619 6.64945 0.598395 5.40983 1.56712 5.40983H5.02832C5.46154 5.40983 5.8455 5.13087 5.97937 4.71885L7.04894 1.42705Z" fill="#FFA500"></path>
                          </svg>
                        ))}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                          <path d="M7.64335 1.62019C7.75561 1.27469 8.24439 1.27469 8.35665 1.62019L9.42622 4.91198C9.64376 5.58152 10.2677 6.03483 10.9717 6.03483H14.4329C14.7962 6.03483 14.9472 6.49968 14.6533 6.71321L11.8531 8.74765C11.2836 9.16145 11.0453 9.89492 11.2628 10.5645L12.3324 13.8563C12.4446 14.2017 12.0492 14.489 11.7553 14.2755L8.95515 12.2411C8.38561 11.8273 7.61439 11.8273 7.04485 12.2411L4.24468 14.2755C3.95079 14.489 3.55536 14.2017 3.66761 13.8563L4.73718 10.5645C4.95473 9.89492 4.71641 9.16145 4.14687 8.74765L1.3467 6.71321C1.05281 6.49969 1.20385 6.03483 1.56712 6.03483H5.02832C5.73231 6.03483 6.35624 5.58152 6.57378 4.91198L7.64335 1.62019Z" stroke="#FFA500" strokeWidth="1.25"></path>
                        </svg>
                      </div>
                      <p className="white">4.5/5 (100+ Reviews)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-sec mb-80 wow fadeInUp animated" data-wow-delay="200ms">
          <div className="container-fluid">
            <div className="row row-gap-4 align-items-center">
              <div className="col-lg-6">
                <div className="img-block">
                  <img src="/images/about-img.jpg" className="about-img" alt="" />
                  <div className="about-content-wrapper">
                    <img src="/images/about-shape.png" className="about-vector" alt="" />
                    <div className="about-content wow zoomIn animated" data-wow-delay="210ms">
                      <h3 className="fw-700 white mb-12 font-sec">500+</h3>
                      <h5 className="white fw-400 white font-sec">Successful<br />Cases</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-md-5 pe-md-5">
                  <h6 className="fw-400 color-sec font-sec mb-16">Who We Are</h6>
                  <h2 className="fw-600 mb-16">Where Truth Meets Justice</h2>
                  <p className="mb-32">
                    Welcome to Lawify, where truth meets justice. Our firm is built on the pillars of integrity, dedication, and expertise. 
                    With years of experience, we have been empowering individuals, families, and businesses by providing tailored legal solutions.
                  </p>
                  <h5 className="fw-500 mb-24">Our Best Service Benefits:</h5>
                  <h6 className="fw-400 mb-16">Proven track record of success.</h6>
                  <h6 className="fw-400 mb-16">Client-focused and compassionate approach.</h6>
                  <h6 className="fw-400 mb-16">Expertise across a wide range of legal services.</h6>
                  <h6 className="fw-400 mb-32">Transparent communication and ethical representation.</h6>
                  <a href="/about" className="cus-btn-3">
                    <span className="text">Read More</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Block */}
        <section className="about-block mb-80 wow fadeInUp animated" data-wow-delay="210ms">
          <img src="/images/gavel-vector.png" className="gavel-vector" alt="" />
          <div className="container-fluid">
            <div className="block-content">
              <div className="block-1">
                <img className="num-vector" src="/images/successfull-cases.png" alt="" />
                <div>
                  <h3 className="fw-700 mb-8 counter" data-target="200">0</h3>
                  <h6 className="fw-400">Successful Cases</h6>
                </div>
              </div>
              <div className="vr-line"></div>
              <div className="block-1">
                <img className="num-vector" src="/images/family.png" alt="" />
                <div>
                  <h3 className="fw-700 mb-8 counter" data-target="10">0</h3>
                  <h6 className="fw-400">Expert Attorneys</h6>
                </div>
              </div>
              <div className="vr-line d-sm-block d-none"></div>
              <div className="block-1">
                <img className="num-vector" src="/images/happy-member.png" alt="" />
                <div>
                  <h3 className="fw-700 mb-8 counter" data-target="320">0</h3>
                  <h6 className="fw-400">Happy Client</h6>
                </div>
              </div>
              <div className="vr-line"></div>
              <div className="block-1">
                <img className="num-vector" src="/images/medal.png" alt="" />
                <div>
                  <h3 className="fw-700 mb-8 counter" data-target="20">0</h3>
                  <h6 className="fw-400">Award Winning</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="service-sec mb-80 wow fadeInUp animated" data-wow-delay="220ms">
          <img src="/images/service-bg-vector.png" className="service-vector" alt="" />
          <div className="container-fluid">
            <div className="heading mb-32">
              <div>
                <h6 className="fw-400 color-sec mb-16">Our Services</h6>
                <h2 className="fw-600">Our Legal Practice Areas</h2>
              </div>
              <a href="/services" className="cus-btn-2 border-black">
                <span className="text">View All Services</span>
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="row row-gap-4">
              {[
                { title: 'Family Law', img: 'img-1.jpg', icon: 'icon-vec-1.png' },
                { title: 'Corporate Law', img: 'img-2.jpg', icon: 'icon-vec-2.png' },
                { title: 'Criminal Defense', img: 'img-3.jpg', icon: 'icon-vec-3.png' },
                { title: 'Personal Injury', img: 'img-4.jpg', icon: 'icon-vec-4.png' }
              ].map((service, index) => (
                <div key={index} className="col-xl-3 col-md-4">
                  <div className="service-card">
                    <a href="/service-detail" className="card-image">
                      <img src={`/images/${service.img}`} className="card-img" alt="card-img" />
                      <span className="shap-img_icon">
                        <img src="/images/service-card-shape.png" className="card-shap" alt="" />
                        <span className="card-icon">
                          <img src={`/images/${service.icon}`} alt="" />
                        </span>
                      </span>
                    </a>
                    <div className="card-contant">
                      <a href="/service-detail" className="h5 fw-500 hover-content mb-12">{service.title}</a>
                      <p className="mb-24">Free shipping on every item, delivered hassle-free to your door...</p>
                      <a href="/service-detail" className="card-btn">
                        <span className="fw-600 text-16">View Detail</span>
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
