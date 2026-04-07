import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services() {
  const services = [
    { title: 'Family Law', img: 'img-1.jpg', icon: 'icon-vec-1.png', desc: 'Protecting your family rights with compassionate legal support.' },
    { title: 'Corporate Law', img: 'img-2.jpg', icon: 'icon-vec-2.png', desc: 'Expert guidance for your business legal needs.' },
    { title: 'Criminal Defense', img: 'img-3.jpg', icon: 'icon-vec-3.png', desc: 'Strong defense for your rights and freedom.' },
    { title: 'Personal Injury', img: 'img-4.jpg', icon: 'icon-vec-4.png', desc: 'Fighting for the compensation you deserve.' },
    { title: 'Real Estate Law', img: 'img-1.jpg', icon: 'icon-vec-1.png', desc: 'Comprehensive legal services for property matters.' },
    { title: 'Civil Litigation', img: 'img-2.jpg', icon: 'icon-vec-2.png', desc: 'Experienced representation in civil disputes.' },
  ]

  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="service-sec mb-80 wow fadeInUp animated" data-wow-delay="220ms">
          <img src="/images/service-bg-vector.png" className="service-vector" alt="" />
          <div className="container-fluid">
            <div className="text-center mb-48">
              <h6 className="fw-400 color-sec mb-16">Our Services</h6>
              <h2 className="fw-600">Our Legal Practice Areas</h2>
              <p className="mt-3">Comprehensive legal solutions tailored to your needs</p>
            </div>
            <div className="row row-gap-4">
              {services.map((service, index) => (
                <div key={index} className="col-xl-4 col-md-6">
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
                      <p className="mb-24">{service.desc}</p>
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
