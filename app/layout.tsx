import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Law Firm Lawify',
  description: 'Law Firm Lawify - Expert Legal Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/slick-theme.css" />
        <link rel="stylesheet" href="/css/slick-slider.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/wow.min.css" />
        <link rel="stylesheet" href="/css/app.css" />
      </head>
      <body>
        <div id="cursor"></div>
        <div id="cursor-border"></div>
        
        <div className="page-loader" id="preloader">
          <div className="preloader-container">
            <img src="/images/1.png" className="top-bar" alt="" />
            <div className="preloader">
              <img src="/images/2.png" className="lefthandle" alt="" />
              <img src="/images/3.png" alt="" />
              <img src="/images/2.png" className="righthandle" alt="" />
            </div>
          </div>
        </div>

        <div id="scroll-container" className="main-wrapper">
          {children}
        </div>

        <Script src="/js/jquery-3.6.3.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery-validator.js" strategy="afterInteractive" />
        <Script src="/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.js" strategy="afterInteractive" />
        <Script src="/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
