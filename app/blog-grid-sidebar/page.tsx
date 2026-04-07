import Header from '../components/Header'
import Footer from '../components/Footer'

export default function BlogGridSidebar() {
  const blogs = [
    { title: 'Understanding Your Legal Rights in Simple Terms', date: '24 Feb, 2025', author: 'Emily Brooks', time: '5 min Read', img: 'img-1_1.jpg' },
    { title: 'How to Resolve Disputes Without Going to Court', date: '2 Feb, 2025', author: 'Emily Brooks', time: '6 min Read', img: 'img-2_1.jpg' },
    { title: 'Breaking Down Contract Law for Everyday Situations', date: '9 April, 2025', author: 'Emily Brooks', time: '5 min Read', img: 'img-3_1.jpg' },
    { title: 'How Family Law Protects You and Your Loved Ones', date: '24 Feb, 2025', author: 'Emily Brooks', time: '5 min Read', img: 'img-4_1.jpg' },
  ]

  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="blog-sec mb-80">
          <div className="container-fluid">
            <div className="row row-gap-4">
              <div className="col-lg-8">
                <div className="row row-gap-4">
                  {blogs.map((blog, index) => (
                    <div key={index} className="col-md-6">
                      <div className="blog-card">
                        <a href="/blog-detail" className="card-img">
                          <img src={`/images/${blog.img}`} alt="" />
                        </a>
                        <div className="card-content">
                          <div className="d-flex align-items-center gap-8 mb-16">
                            <img src="/images/calender-vector.png" className="card-vectors" alt="" />
                            <p>{blog.date}</p>
                          </div>
                          <a href="/blog-detail" className="h6 fw-500 hover-content mb-16">{blog.title}</a>
                          <div className="d-flex align-items-center gap-12 mb-24">
                            <div className="d-flex align-items-center gap-8">
                              <img src="/images/card-user.png" className="card-user" alt="" />
                              <p>{blog.author}</p>
                            </div>
                            <div className="dot">
                              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#5E5E5E"></circle>
                              </svg>
                            </div>
                            <div className="d-flex align-items-center gap-8">
                              <img src="/images/clock-vector.png" className="card-vectors" alt="" />
                              <p>{blog.time}</p>
                            </div>
                          </div>
                          <a href="/blog-detail" className="card-btn">
                            <span>Read More</span>
                            <i className="fa-solid fa-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="sidebar-widget mb-32">
                    <h5 className="fw-500 mb-24">Search</h5>
                    <form>
                      <input type="text" className="form-control" placeholder="Search..." />
                    </form>
                  </div>
                  <div className="sidebar-widget mb-32">
                    <h5 className="fw-500 mb-24">Categories</h5>
                    <ul className="category-list">
                      <li><a href="#">Family Law</a></li>
                      <li><a href="#">Corporate Law</a></li>
                      <li><a href="#">Criminal Defense</a></li>
                      <li><a href="#">Personal Injury</a></li>
                      <li><a href="#">Real Estate</a></li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h5 className="fw-500 mb-24">Recent Posts</h5>
                    <ul className="recent-posts">
                      <li className="mb-16">
                        <a href="/blog-detail">Understanding Your Legal Rights</a>
                        <p className="text-sm">24 Feb, 2025</p>
                      </li>
                      <li className="mb-16">
                        <a href="/blog-detail">How to Resolve Disputes</a>
                        <p className="text-sm">2 Feb, 2025</p>
                      </li>
                      <li className="mb-16">
                        <a href="/blog-detail">Contract Law Basics</a>
                        <p className="text-sm">9 April, 2025</p>
                      </li>
                    </ul>
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
