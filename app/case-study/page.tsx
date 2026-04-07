import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CaseStudy() {
  const cases = [
    { title: 'Johnson Family Estate Settlement', category: 'Family Law', img: 'project-img-1.jpg' },
    { title: 'Global Tech Contract Breach Resolution', category: 'Estate Planning', img: 'project-img-2.jpg' },
    { title: 'Harris Corporate Merger Legal Assistance', category: 'Business Law', img: 'project-img-3.jpg' },
    { title: 'Greenwood Environmental Compliance Case', category: 'Environmental Law', img: 'project-img-4.jpg' },
    { title: 'Davis Workplace Harassment Settlement', category: 'Employment Law', img: 'project-img-5.jpg' },
    { title: 'Miller Patent Protection Case', category: 'Intellectual Property Law', img: 'project-img-6.jpg' },
  ]

  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="case-study-sec mb-80">
          <div className="container-fluid">
            <div className="text-center mb-48">
              <h6 className="fw-400 color-sec mb-16">Case Studies</h6>
              <h2 className="fw-600">Our Success Stories</h2>
            </div>
            <div className="row row-gap-4">
              {cases.map((caseItem, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <a href="/case-study-detail" className="portfolio-block">
                    <img src={`/images/${caseItem.img}`} alt="" />
                    <div className="hover-bg"></div>
                    <span className="block-content">
                      <span className="h5 fw-500 white mb-16">{caseItem.title}</span>
                      <span className="text-16 light-gray">{caseItem.category}</span>
                    </span>
                  </a>
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
