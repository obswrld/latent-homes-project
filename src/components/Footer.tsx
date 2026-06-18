import { contactConfig } from "../data/contact";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Q & A", href: "#qna" },
  { label: "Contact Us", href: "#inquiry" },
];

const partners = [
  "UrbanBank",
  "TitleSure",
  "MetroDevs",
  "HavenMortgage",
  "PrimeNotary",
];

const FacebookIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,255,255,0.6)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,255,255,0.6)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="rgba(255,255,255,0.6)"
      stroke="none"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,255,255,0.6)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function Footer() {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: '60px 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          alignItems: "start",
        }}
      >
        {/* Left — Brand */}
        <div>
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {/*<span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "20px",
                fontWeight: "black",
                background:
                  "linear-gradient(180deg, #f5e27a 0%, #c8a96e 40%, #8b6914 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-1px",
              }}
            >
              LH
            </span>*/}
            <img
              src="/images/logo.png"
              alt="Latent Homes Logo"
              style={{ width: '120px', height: '120px', objectFit: 'contain', marginTop: '20px' }}
            />
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#ffffff",
                letterSpacing: "2px",
              }}
            >
              Latent <span style={{ color: "#c8a96e", paddingLeft:'-49px' }}>Homes</span>
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: "1.8",
              marginBottom: "28px",
              maxWidth: "300px",
            }}
          >
            Premium properties and trusted real-estate brokerage. We help buyers
            find, verify and acquire homes with absolute confidence.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { icon: <InstagramIcon />, href: contactConfig.instagram },
              { icon: <FacebookIcon />, href: contactConfig.facebook },
              { icon: <WhatsAppIcon />, href: contactConfig.whatsapp },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Center — Explore links */}
        <div>
          <h4
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "15px",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "24px",
            }}
          >
            Explore
          </h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "Georgia, serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  padding: "0",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right — Get in touch */}
        <div>
          <h4
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "15px",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "24px",
            }}
          >
            Get in touch
          </h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {[
              contactConfig.email,
              "+234 702 518 5401",
              "Lagos · Abuja · London",
            ].map((item) => (
              <p
                key={item}
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Partners strip */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "32px 60px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "9px",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.25)",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          TRUSTED PARTNERS & SPONSORS
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          {partners.map((partner) => (
            <span
              key={partner}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 60px",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          © 2026 Latent Homes. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Built with care for buyers worldwide.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
