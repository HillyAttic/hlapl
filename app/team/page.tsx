import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Team() {
  const teamMembers = [
    { name: 'William Garcia', role: 'Criminal Defense', img: 'team-1.jpg' },
    { name: 'Emma Johnson', role: 'Family Law Expert', img: 'team-2.jpg' },
    { name: 'Alexander Smith', role: 'Legal Consultant', img: 'team-3.jpg' },
    { name: 'Sophia Martinez', role: 'Corporate Lawyer', img: 'team-4.jpg' },
    { name: 'Michael Brown', role: 'Real Estate Attorney', img: 'team-1.jpg' },
    { name: 'Olivia Davis', role: 'Civil Litigation', img: 'team-2.jpg' },
    { name: 'James Wilson', role: 'Personal Injury', img: 'team-3.jpg' },
    { name: 'Isabella Taylor', role: 'Estate Planning', img: 'team-4.jpg' },
  ]

  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="trusted-team-sec mb-80">
          <div className="container-fluid">
            <div className="text-center mb-48">
              <h6 className="fw-400 color-sec mb-16">Our Attorneys</h6>
              <h2 className="fw-600">Trusted Legal Experts</h2>
              <p className="mt-3">Meet our experienced team of legal professionals</p>
            </div>
            <div className="row row-gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-lg-3 col-md-4">
                  <div className="team-card">
                    <div className="card-image">
                      <a href="/team-detail">
                        <img src={`/images/${member.img}`} className="card-img" alt="card-img" />
                      </a>
                      <div className="shap-img_icon">
                        <img src="/images/team-card-vector.png" className="card-shape" alt="" />
                        <div className="team-social">
                          <div className="team-social-share">
                            <img src="/images/shere-vec.png" width="15" height="17" alt="Share Icon" />
                          </div>
                          <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-contant">
                      <a href="/team-detail" className="fw-500 h5 mb-12">{member.name}</a>
                      <p>{member.role}</p>
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
