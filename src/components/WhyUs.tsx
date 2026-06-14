import { Shield, Users, Award, Home } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified Listings Only",
    description:
      "Every property is independently verified for title, documentation and developer credibility before it reaches you.",
  },
  {
    icon: Users,
    title: "Buyer-First Brokerage",
    description:
      "We represent you — not the seller. Our advisors negotiate on your behalf for the best price and terms.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description:
      "A decade of closing residential and commercial deals across major markets with zero failed transactions.",
  },
  {
    icon: Home,
    title: "End-to-End Support",
    description:
      "From site inspection and paperwork to financing and handover — we walk the entire journey with you.",
  },
];

function WhyUs() {
  return (
    <section id="why-us" style={{ backgroundColor: '#0d0d0d', padding: '80px 24px' }}>
      {/* Eyebrow */}
      <p
        className="text-center"
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "11px",
          letterSpacing: "4px",
          color: "#c8a96e",
          marginBottom: "24px",
        }}
      >
        WHY CHOOSE US
      </p>

      {/* Heading */}
      <h2
        className="text-center"
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "48px",
          fontWeight: "bold",
          color: "#f0ebe2",
          lineHeight: "1.2",
          marginBottom: "20px",
        }}
      >
        A decade of trust, thousands of homes
      </h2>

      {/* Subtext */}
      <p
        className="text-center"
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "15px",
          color: "rgba(255,255,255,0.45)",
          marginBottom: "72px",
          maxWidth: "500px",
          margin: "0 auto 72px auto",
        }}
      >
        Numbers that speak for our commitment to every client we serve.
      </p>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "12px",
                padding: "36px 28px",
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgba(200,169,110,0.15)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                }}
              >
                <Icon size={22} color="#c8a96e" />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#f0ebe2",
                  marginBottom: "14px",
                  lineHeight: "1.3",
                }}
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: "1.8",
                }}
              >
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyUs;
