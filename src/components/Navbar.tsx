import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'WHY US', href: '#why-us' },
  { label: 'PROPERTIES', href: '#properties' },
  { label: 'Q & A', href: '#qna' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        backgroundColor: scrolled ? 'rgba(13,13,13,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.5s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '90px',
          padding: '0 80px',
        }}
      >
        {/* Logo + Name */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <img
            src="/images/logo.png"
            alt="Latent Homes Logo"
            style={{ width: '120px', height: '120px', objectFit: 'contain', marginTop: '20px', marginLeft: '20px' }}
          />
          {/*<span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '16px',
              fontWeight: '900',
              letterSpacing: '4px',
              background: 'linear-gradient(180deg, #f5e27a 0%, #c8a96e 40%, #8b6914 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            LATENT HOMES
          </span>*/}
        </a>

        {/* Desktop Links — right of center */}
        <div
          className="hidden md:flex"
          style={{
            alignItems: 'center',
            gap: '32px',
            position: 'absolute',
            left: '58%',
            transform: 'translateX(-50%)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key = { link.label }
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '11px',
                letterSpacing: '2px',
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                padding: '4px 0',
                transition: 'color 0.3s',
                position: 'relative',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff'
                const line = e.currentTarget.querySelector('.underline-slide') as HTMLElement
                if (line) line.style.width = '100%'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                const line = e.currentTarget.querySelector('.underline-slide') as HTMLElement
                if (line) line.style.width = '0%'
              }}
            >
              {link.label}
              <span
                className="underline-slide"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '1px',
                  backgroundColor: '#ffffff',
                  transition: 'width 0.3s ease',
                }}
              />
            </a>
          ))}
        </div>

        {/* Contact Us — right */}
        
        <a
          href="#inquiry"
          onClick={(e) => scrollToSection(e, '#inquiry')}
          className="hidden md:block"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '10px',
            letterSpacing: '2px',
            fontWeight: '600',
            color: '#0d0d0d',
            backgroundColor: '#ffffff',
            padding: '10px 28px',
            borderRadius: '999px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.85)' }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff' }}
        >
          CONTACT US
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '400px' : '0px',
          transition: 'max-height 0.4s ease',
          backgroundColor: '#0d0d0d',
        }}
      >
        <div style={{ padding: '16px 32px 32px 32px', display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                padding: '14px 0',
                letterSpacing: '2px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inquiry"
            onClick={(e) => scrollToSection(e, '#inquiry')}
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              padding: '14px 0',
              letterSpacing: '2px',
              marginTop: '4px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar