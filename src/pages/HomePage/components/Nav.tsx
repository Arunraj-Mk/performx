import { useRef, useState } from 'react'
import logo from '@/svg/logo.svg'

const Nav = () => {
  const blobRef = useRef<HTMLSpanElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget
    const blob = blobRef.current
    if (!blob) return

    const rect = button.getBoundingClientRect()
    blob.style.left = `${rect.width / 2}px`
    blob.style.top = `${rect.height}px`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget
    const blob = blobRef.current
    if (!blob) return

    const rect = button.getBoundingClientRect()
    blob.style.left = `${rect.width / 2}px`
    blob.style.top = `${rect.height}px`
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    closeMobileMenu()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className="backdrop-blur-md rounded-[41px] overflow-hidden flex justify-center items-center mx-4 mt-4 md:mx-auto md:max-w-[1139px]"
        style={{
          padding: '17px 41px',
          borderRadius: '41px',
          background: 'rgba(255, 255, 255, 0.10)',
          boxShadow:
            '0 432px 121px 0 rgba(0, 0, 0, 0.00), 0 277px 111px 0 rgba(0, 0, 0, 0.01), 0 156px 93px 0 rgba(0, 0, 0, 0.03), 0 69px 69px 0 rgba(0, 0, 0, 0.05), 0 17px 38px 0 rgba(0, 0, 0, 0.06)',
          border: 'none'
        }}
      >
        <div className="flex justify-between items-center w-full">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center bg-transparent border-none cursor-pointer"
          >
            <img src={logo} alt="Perform 100x Logo" style={{ height: '34px' }} />
          </button>

          <div className="hidden md:flex items-center gap-10 opacity-70">
            <button
              onClick={() => scrollToSection('services')}
              className="text-black hover:opacity-100 text-base transition-opacity flex items-center gap-1.5 bg-transparent border-none"
            >
              <span>Service</span>
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-black hover:opacity-100 text-base transition-opacity bg-transparent border-none"
            >
              About us
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-black hover:opacity-100 text-base transition-opacity bg-transparent border-none"
            >
              How it works
            </button>
          </div>

          <div className="hidden md:block">
            <a
              href="https://calendly.com/ceo-perform100x/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="blob-btn relative px-5 py-2.5 text-[13px] font-medium flex items-center gap-1.5 z-10 overflow-hidden"
              style={{
                color: '#ffffff',
                backgroundColor: '#256BF1',
                borderRadius: '100px',
                transition: 'color 0.5s'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10">Work with us</span>
              <svg
                className="w-5 h-5 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
              <span ref={blobRef} className="blob-btn__blob"></span>
            </a>
          </div>

          <button
            className="md:hidden text-black hover:opacity-70 transition-opacity p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed left-0 right-0 w-full backdrop-blur-md transition-all duration-300 z-[60] ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{
          top: '0',
          background: 'rgba(255,255,255,0.95)',
          paddingTop: '20px',
          paddingBottom: '20px'
        }}
      >
        <div className="flex flex-col items-center gap-6 px-4">
          <button onClick={() => scrollToSection('services')}>Service</button>
          <button onClick={() => scrollToSection('about')}>About us</button>
          <button onClick={() => scrollToSection('how-it-works')}>How it works</button>

          <a
            href="https://calendly.com/ceo-perform100x/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="blob-btn relative px-5 py-2.5 text-[13px] font-medium flex items-center gap-1.5 z-10 mt-2"
            style={{
              color: '#ffffff',
              backgroundColor: '#256BF1',
              borderRadius: '100px'
            }}
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Work with us</span>
          </a>
        </div>
      </div>

      <style>{`
        .blob-btn { position: relative; }
        .blob-btn__blob {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #ffffff;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: width .4s ease, height .4s ease;
          z-index: -1;
        }
        .blob-btn:hover .blob-btn__blob {
          width: 300px;
          height: 300px;
          opacity: 1;
        }
      `}</style>
    </nav>
  )
}

export default Nav
