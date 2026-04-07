export default function ComingSoon() {
  return (
    <div className="coming-soon-wrapper" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="container">
        <div className="text-center">
          <h1 className="display-1 fw-bold white mb-24">Coming Soon</h1>
          <p className="h4 white mb-48">We're working on something amazing. Stay tuned!</p>
          <div className="countdown mb-48">
            <div className="d-flex justify-content-center gap-32">
              <div className="countdown-item">
                <h2 className="fw-700 white mb-8">30</h2>
                <p className="white">Days</p>
              </div>
              <div className="countdown-item">
                <h2 className="fw-700 white mb-8">12</h2>
                <p className="white">Hours</p>
              </div>
              <div className="countdown-item">
                <h2 className="fw-700 white mb-8">45</h2>
                <p className="white">Minutes</p>
              </div>
              <div className="countdown-item">
                <h2 className="fw-700 white mb-8">30</h2>
                <p className="white">Seconds</p>
              </div>
            </div>
          </div>
          <a href="/" className="cus-btn">
            <span className="text">Back to Home</span>
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
