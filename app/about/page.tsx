import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="about-sec mb-80 wow fadeInUp animated" data-wow-delay="200ms">
          <div className="container-fluid">
            <div className="text-center mb-48">
              <h6 className="fw-400 color-sec font-sec mb-16">About Us</h6>
              <h2 className="fw-600">Where Truth Meets Justice</h2>
            </div>
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
                    Whether it's navigating complex corporate disputes, protecting your family's rights, or fighting for justice in criminal cases, 
                    we are committed to standing by your side.
                  </p>
                  <h5 className="fw-500 mb-24">Our Best Service Benefits:</h5>
                  <h6 className="fw-400 mb-16">Proven track record of success.</h6>
                  <h6 className="fw-400 mb-16">Client-focused and compassionate approach.</h6>
                  <h6 className="fw-400 mb-16">Expertise across a wide range of legal services.</h6>
                  <h6 className="fw-400 mb-32">Transparent communication and ethical representation.</h6>
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
