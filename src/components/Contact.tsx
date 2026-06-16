import { MessageCircle, Phone, Mail } from "lucide-react";
import { contactConfig } from "../data/contact";

const FacebookIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c8a96e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c8a96e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 3v10.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M9 3c1.2 2.5 3.2 4 6 4v3c-2 0-4-.6-6-2v8.5a6.5 6.5 0 1 1-6.5-6.5" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="#c8a96e" stroke="none"/>
  </svg>
)

const channels = [
  {
    label: "Instagram",
    value: "@latenthomes",
    href: contactConfig.instagram,
    isCustom: true,
    customIcon: <InstagramIcon />,
  },
  {
    label: "Facebook",
    value: "Latent Homes",
    href: contactConfig.facebook,
    isCustom: true,
    customIcon: <FacebookIcon />,
  },
  {
    label: "TikTok",
    value: "@latenthomes",
    href: contactConfig.tiktok,
    isCustom: true,
    customIcon: <TikTokIcon />,
  },
  {
    label: "WhatsApp",
    value: "+234 702 518 5401",
    href: contactConfig.whatsapp,
    isCustom: false,
    icon: MessageCircle,
  },
  {
    label: "Phone",
    value: "+234 702 518 5401",
    href: contactConfig.phone,
    isCustom: false,
    icon: Phone,
  },
  {
    label: "Email",
    value: "info@latenthomes.com",
    href: `mailto:${contactConfig.email}`,
    isCustom: false,
    icon: Mail,
  },
];

function Contact() {
  return (
    <section id="inquiry" style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#c8a96e",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          CONTACT US
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "56px",
            fontWeight: "bold",
            color: "#1a1a1a",
            textAlign: "center",
            marginBottom: "20px",
            lineHeight: "1.1",
          }}
        >
          Let's talk
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "15px",
            color: "#888",
            textAlign: "center",
            maxWidth: "520px",
            margin: "0 auto 64px auto",
            lineHeight: "1.8",
          }}
        >
          Reach out on any channel — our team is available 9am to 7pm, Monday to
          Saturday.
        </p>

        {/* Contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: "16px",
          }}
        >
          {channels.map((channel) => {
            return (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "36px 20px",
                  border: "1px solid #eeeeee",
                  borderRadius: "12px",
                  textDecoration: "none",
                  transition: "border-color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "#c8a96e";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "#eeeeee";
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: "#fdf3e7",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  {channel.isCustom
                    ? channel.customIcon
                    : channel.icon
                      ? <channel.icon size={22} color="#c8a96e" />
                      : null
                  } 
                </div>

                {/* Label */}
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    marginBottom: "6px",
                    textAlign: "center",
                  }}
                >
                  {channel.label}
                </p>

                {/* Value */}
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "12px",
                    color: "#999",
                    textAlign: "center",
                  }}
                >
                  {channel.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
