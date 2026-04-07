import Header from '../components/Header'
import Footer from '../components/Footer'

export default function BlogDetail() {
  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="blog-detail-sec mb-80">
          <div className="container-fluid">
            <div className="row row-gap-4">
              <div className="col-lg-8">
                <img src="/images/img-1_1.jpg" className="w-100 mb-32 br-16" alt="" />
                <div className="d-flex align-items-center gap-12 mb-24">
                  <div className="d-flex align-items-center gap-8">
                    <img src="/images/calender-vector.png" className="card-vectors" alt="" />
                    <p>24 Feb, 2025</p>
                  </div>
                  <div className="dot">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="#5E5E5E"></circle>
                    </svg>
                  </div>
                  <div className="d-flex align-items-center gap-8">
                    <img src="/images/card-user.png" className="card-user" alt="" />
                    <p>Emily Brooks</p>
                  </div>
                  <div className="dot">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="#5E5E5E"></circle>
                    </svg>
                  </div>
                  <div className="d-flex align-items-center gap-8">
                    <img src="/images/clock-vector.png" className="card-vectors" alt="" />
                    <p>5 min Read</p>
                  </div>
                </div>
                <h2 className="fw-600 mb-24">Understanding Your Legal Rights in Simple Terms</h2>
                <p className="mb-24">
                  Legal rights are fundamental protections that every individual possesses under the law. Understanding these rights 
                  is crucial for navigating various situations in life, from workplace disputes to family matters. In this comprehensive 
                  guide, we'll break down the most important legal rights you should know about.
                </p>
                <h4 className="fw-500 mb-16">Your Constitutional Rights</h4>
                <p className="mb-24">
                  The Constitution provides several fundamental rights that protect citizens from government overreach. These include 
                  freedom of speech, the right to a fair trial, protection against unreasonable searches, and many others. Understanding 
                  these rights helps you recognize when they might be violated and how to protect them.
                </p>
                <h4 className="fw-500 mb-16">Rights in the Workplace</h4>
                <p className="mb-24">
                  As an employee, you have numerous rights that protect you from discrimination, harassment, and unfair treatment. 
                  These include the right to a safe working environment, fair wages, and protection from wrongful termination. 
                  Knowing your workplace rights empowers you to stand up against violations.
                </p>
                <h4 className="fw-500 mb-16">Consumer Rights</h4>
                <p className="mb-24">
                  When you purchase goods or services, you have rights that protect you from fraud, defective products, and unfair 
                  business practices. Understanding consumer protection laws helps you make informed decisions and seek remedies 
                  when things go wrong.
                </p>
                <h4 className="fw-500 mb-16">When to Seek Legal Help</h4>
                <p className="mb-24">
                  While understanding your rights is important, there are times when professional legal assistance is necessary. 
                  If you're facing a complex legal situation, criminal charges, or a significant dispute, consulting with an attorney 
                  can help protect your interests and ensure the best possible outcome.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="sidebar-widget mb-32">
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
                  <div className="sidebar-widget">
                    <h5 className="fw-500 mb-24">Categories</h5>
                    <ul className="category-list">
                      <li><a href="#">Family Law</a></li>
                      <li><a href="#">Corporate Law</a></li>
                      <li><a href="#">Criminal Defense</a></li>
                      <li><a href="#">Personal Injury</a></li>
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
