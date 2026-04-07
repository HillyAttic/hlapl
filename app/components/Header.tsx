import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-top">
        <div className="container-fluid">
          <div className="header-top-wrapper">
            <div className="left-contact-block">
              <div className="info-block">
                <img src="/images/call-vector.png" alt="" />
                <a href="tel:+12125556789" className="hover-content">+1 212-555-6789</a>
              </div>
              <div className="info-block">
                <img src="/images/mail-vector.png" alt="" />
                <a href="mailto:example@gmail.com" className="hover-content">example@gmail.com</a>
              </div>
              <div className="info-block">
                <img src="/images/location-vector.png" alt="" />
                <p className="white">Our Location</p>
              </div>
            </div>
            <div className="right-links-block">
              <a href="#" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M14.6875 4.6875C15.0109 4.6875 15.2734 4.425 15.2734 4.10156V0.585938C15.2734 0.2625 15.0109 0 14.6875 0H11.1719C8.91016 0 7.07031 1.83984 7.07031 4.10156V7.03125H5.3125C4.98906 7.03125 4.72656 7.29375 4.72656 7.61719V11.1328C4.72656 11.4563 4.98906 11.7188 5.3125 11.7188H7.07031V19.4141C7.07031 19.7375 7.33281 20 7.65625 20H11.1719C11.4953 20 11.7578 19.7375 11.7578 19.4141V11.7188H14.1016C14.3879 11.7188 14.6324 11.5117 14.6797 11.2293L15.2656 7.71367C15.2938 7.54375 15.2461 7.36992 15.1348 7.23828C15.0234 7.10703 14.8598 7.03125 14.6875 7.03125H11.7578V4.6875H14.6875ZM11.1719 8.20312H13.9957L13.6051 10.5469H11.1719C10.8484 10.5469 10.5859 10.8094 10.5859 11.1328V18.8281H8.24219V11.1328C8.24219 10.8094 7.97969 10.5469 7.65625 10.5469H5.89844V8.20312H7.65625C7.97969 8.20312 8.24219 7.94063 8.24219 7.61719V4.10156C8.24219 2.48633 9.55664 1.17188 11.1719 1.17188H14.1016V3.51562H11.1719C10.8484 3.51562 10.5859 3.77813 10.5859 4.10156V7.61719C10.5859 7.94063 10.8484 8.20312 11.1719 8.20312Z" fill="#EBEBEB"></path>
                </svg>
              </a>
              <a href="#" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_17753_3781)">
                    <path d="M10.1968 20C10.1306 20 10.0644 20 9.99771 19.9997C8.43002 20.0035 6.9815 19.9637 5.57281 19.878C4.28131 19.7994 3.10242 19.3531 2.16339 18.5874C1.25732 17.8485 0.63858 16.8495 0.324402 15.6185C0.0509644 14.5467 0.0364685 13.4946 0.022583 12.477C0.0125122 11.7469 0.00213623 10.8817 0 10.0019C0.00213623 9.11838 0.0125122 8.25321 0.022583 7.52307C0.0364685 6.50562 0.0509644 5.45352 0.324402 4.38159C0.63858 3.15052 1.25732 2.15152 2.16339 1.41269C3.10242 0.647006 4.28131 0.200687 5.57297 0.122104C6.98166 0.036502 8.43048 -0.00347599 10.0015 0.000338713C11.5697 -0.00301822 13.0177 0.036502 14.4264 0.122104C15.7179 0.200687 16.8968 0.647006 17.8358 1.41269C18.7421 2.15152 19.3607 3.15052 19.6748 4.38159C19.9483 5.45337 19.9628 6.50562 19.9767 7.52307C19.9867 8.25321 19.9972 9.11838 19.9992 9.9982V10.0019C19.9972 10.8817 19.9867 11.7469 19.9767 12.477C19.9628 13.4944 19.9484 14.5465 19.6748 15.6185C19.3607 16.8495 18.7421 17.8485 17.8358 18.5874C16.8968 19.3531 15.7179 19.7994 14.4264 19.878C13.0774 19.9601 11.6916 20 10.1968 20ZM9.99771 18.761C11.5399 18.7647 12.9559 18.7256 14.3315 18.642C15.3081 18.5826 16.46 17.9421 17.1537 17.3764C17.7948 16.8535 18.2364 16.1321 18.4661 15.2321C18.6937 14.3399 18.7069 13.382 18.7195 12.4556C18.7294 11.7304 18.7398 10.8713 18.7419 10C18.7398 9.1286 18.7294 8.26969 18.7195 7.54444C18.7069 6.61807 18.6937 5.66013 18.4661 4.76779C18.2364 3.86783 17.7948 3.1464 17.1537 2.62348C16.46 2.05799 15.3081 1.43619 14.3315 1.37683C12.9559 1.29306 11.5399 1.25445 10.0014 1.25781C8.45947 1.25415 7.0433 1.29764 5.66772 1.38141C4.69116 1.44077 3.64605 1.85959 2.95239 2.42508C2.31121 2.948 1.75088 3.86783 1.52123 4.76779C1.29357 5.66013 1.28045 6.61792 1.26779 7.54444C1.25787 8.2703 1.24749 9.12982 1.24535 10.0019C1.24749 10.8701 1.25787 11.7298 1.26779 12.4556C1.28045 13.382 1.29357 14.3399 1.52123 15.2321C1.75088 16.1321 2.19247 16.8535 2.83364 17.3764C3.52731 17.9419 4.69116 18.5826 5.66772 18.642C7.0433 18.7258 8.45978 18.7648 9.99771 18.761ZM9.96048 14.8828C7.26822 14.8828 5.07767 12.6924 5.07767 10C5.07767 7.30762 7.26822 5.11722 9.96048 5.11722C12.6529 5.11722 14.8433 7.30762 14.8433 10C14.8433 12.6924 12.6529 14.8828 9.96048 14.8828ZM10.0014 6.25416C7.80598 6.25416 6.26095 7.7992 6.26095 9.9982C6.26095 11.829 7.6453 13.7609 9.97978 13.7609C11.8107 13.7609 13.7142 12.0264 13.7142 9.9982C13.7142 8.16745 12.3175 6.25416 10.0014 6.25416ZM15.3902 3.55472C14.743 3.55472 14.2183 4.07932 14.2183 4.7266C14.2183 5.37387 14.743 5.89847 15.3902 5.89847C16.0374 5.89847 16.562 5.37387 16.562 4.7266C16.562 4.07932 16.0374 3.55472 15.3902 3.55472Z" fill="#EBEBEB"></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_17753_3783)">
                    <path d="M11.8683 8.46864L19.1537 0H17.4273L11.1014 7.3532L6.04897 0H0.221558L7.86186 11.1193L0.221558 20H1.94805L8.62833 12.2348L13.9641 20H19.7915L11.8679 8.46864H11.8683ZM9.50367 11.2173L8.72954 10.1101L2.57013 1.29967H5.22192L10.1926 8.40994L10.9668 9.51718L17.4281 18.7594H14.7763L9.50367 11.2177V11.2173Z" fill="#EBEBEB"></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_17753_3785)">
                    <path d="M4.70306 6.27594H0.9375C0.613861 6.27594 0.351562 6.53839 0.351562 6.86188V19.4141C0.351562 19.7377 0.613861 20 0.9375 20H4.70306C5.0267 20 5.289 19.7377 5.289 19.4141V6.86188C5.289 6.53839 5.0267 6.27594 4.70306 6.27594ZM4.11713 18.8281H1.52344V7.44781H4.11713V18.8281Z" fill="#EBEBEB"></path>
                    <path d="M2.82043 0C1.45905 0 0.351562 1.10748 0.351562 2.46857C0.351562 3.82996 1.45905 4.93729 2.82043 4.93729C4.18167 4.93729 5.289 3.8298 5.289 2.46857C5.289 1.10748 4.18167 0 2.82043 0ZM2.82043 3.76541C2.10526 3.76541 1.52344 3.18375 1.52344 2.46857C1.52344 1.75354 2.10526 1.17188 2.82043 1.17188C3.53546 1.17188 4.11713 1.75354 4.11713 2.46857C4.11713 3.18375 3.53546 3.76541 2.82043 3.76541Z" fill="#EBEBEB"></path>
                    <path d="M14.1176 6.19308C13.2269 6.19308 12.3491 6.40778 11.563 6.80939C11.5363 6.51047 11.2852 6.27594 10.9793 6.27594H7.21344C6.88995 6.27594 6.6275 6.53839 6.6275 6.86188V19.4141C6.6275 19.7377 6.88995 20 7.21344 20H10.9793C11.3029 20 11.5652 19.7377 11.5652 19.4141V12.5104C11.5652 11.6223 12.2879 10.8998 13.176 10.8998C14.064 10.8998 14.7864 11.6223 14.7864 12.5104V19.4141C14.7864 19.7377 15.0488 20 15.3723 20H19.138C19.4617 20 19.724 19.7377 19.724 19.4141V11.7995C19.724 8.70804 17.209 6.19308 14.1176 6.19308ZM18.5521 18.8281H15.9584V12.5104C15.9584 10.9761 14.7102 9.72794 13.1761 9.72794C11.6417 9.72794 10.3934 10.9761 10.3934 12.5104V18.8281H7.79953V7.44781H10.3934V7.88071C10.3934 8.10608 10.5226 8.31146 10.7259 8.40897C10.929 8.50647 11.17 8.4787 11.346 8.33786C12.1394 7.70142 13.098 7.36496 14.1176 7.36496C16.5628 7.36496 18.5521 9.35425 18.5521 11.7995V18.8281Z" fill="#EBEBEB"></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <header className="main-menu">
        <div className="header-section">
          <div className="container-fluid">
            <div className="header-center">
              <div className="row align-items-center justify-content-between gap-24">
                <div className="col-xl-2 col-lg-3 col-5">
                  <Link href="/" className="header-logo">
                    <img src="/images/logo.png" alt="" />
                  </Link>
                </div>
                <div className="col-lg-5 col-1 d-md-flex d-none">
                  <nav className="navigation">
                    <div className="menu-button-right">
                      <div className="main-menu__nav">
                        <ul className="main-menu__list">
                          <li>
                            <Link href="/" className="active">Home</Link>
                          </li>
                          <li className="dropdown">
                            <a href="#">Service</a>
                            <ul className="sub-menu">
                              <li><Link href="/services">Services</Link></li>
                              <li><Link href="/service-detail">Service Detail</Link></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Team</a>
                            <ul className="sub-menu">
                              <li><Link href="/team">Team</Link></li>
                              <li><Link href="/team-detail">Team Detail</Link></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Blogs</a>
                            <ul>
                              <li><Link href="/blog-grid">Blog Grid</Link></li>
                              <li><Link href="/blog-grid-sidebar">Blog Grid Sidebar</Link></li>
                              <li><Link href="/blog-detail">Blog Detail</Link></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="#">Pages</a>
                            <ul>
                              <li><Link href="/about">About Us</Link></li>
                              <li><Link href="/case-study">Case Study</Link></li>
                              <li><Link href="/case-study-detail">Case Study List</Link></li>
                              <li><Link href="/appointment">Get Appointment</Link></li>
                              <li><Link href="/coming-soon">Coming soon</Link></li>
                              <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="col-xl-4 col-lg-3 col-5 p-0">
                  <div className="header-buttons">
                    <div className="right-nav d-sm-flex d-none">
                      <form action="/">
                        <div className="search-block">
                          <input type="text" className="input-search form-control" name="search" id="searchbar" placeholder="Search..." />
                          <a href="#" className="button-block search-toggler">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M9.74062 0C15.1116 0 19.4812 4.36964 19.4812 9.74063C19.4812 12.1734 18.5847 14.4008 17.1047 16.1097L23.7941 22.7997C24.0687 23.0743 24.0686 23.5195 23.794 23.7941C23.5194 24.0687 23.0743 24.0686 22.7997 23.7941L16.1104 17.1041C14.4014 18.5845 12.1738 19.4813 9.74062 19.4813C4.36964 19.4813 0 15.1116 0 9.74063C0 4.36964 4.36964 0 9.74062 0ZM9.74062 18.075C14.3362 18.075 18.075 14.3362 18.075 9.74063C18.075 5.14505 14.3362 1.40625 9.74062 1.40625C5.14505 1.40625 1.40625 5.14505 1.40625 9.74063C1.40625 14.3362 5.14505 18.075 9.74062 18.075Z" fill="#1E1F20"></path>
                            </svg>
                          </a>
                        </div>
                      </form>
                      <Link href="/appointment" className="header-cus-btn">
                        <span className="text">Get Appointment</span>
                      </Link>
                    </div>

                    <a href="#" className="main-menu__toggler mobile-nav__toggler">
                      <img src="/images/menu-2.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
