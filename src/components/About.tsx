const stats = [
  { number: "1,200+", label: "PROPERTIES SOLD" },
  { number: "30+", label: "TRUSTED DEVELOPERS" },
  { number: "15", label: "CITIES COVERED" },
  { number: "98%", label: "CLIENT SATISFACTION" },
];

function About() {
  return (
    <section id="about" className="bg-white">
      <div
        className="text-center"
        style={{ padding: '80px 24px 80px 24px' }}
      >
        {/* Eyebrow */}
        <p
          className="text-[#c8a96e] mb-6"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "11px",
            letterSpacing: "4px",
          }}
        >
          ABOUT US
        </p>

        {/* Heading */}
        <h2
          className="text-[#1a1a1a] font-bold mb-10"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "48px",
            lineHeight: "1.2",
            maxWidth: "900px",
            margin: "0 auto 40px auto",
          }}
        >
          Your Trusted Real Estate Investment Company In Asaba, Delta State.
        </h2>

        {/* Body paragraph */}
        <p
          className="text-[#555] mb-16"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            lineHeight: "1.9",
            maxWidth: "760px",
            margin: "0 auto 80px auto",
            textAlign: "center",
          }}
        >
          Latent Homes is a leading real estate investment and property development company based in Asaba,
          Delta State, Nigeria. We specialize in helping individuals, families, and investors acquire secure,
          well-documented land and property in high-growth locations with excellent investment potential.
          <p>
            Our mission is to make property ownership simple, transparent, and rewarding by providing carefully selected real estate opportunities backed by verified documentation,
            strategic locations, and quality infrastructure. Whether you are buying your first plot of land, building your dream home, or expanding your investment portfolio,
            Latent Homes is committed to guiding you every step of the way.
          </p>
        </p>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                border: "1px solid #e8e8e8",
                borderRadius: "12px",
                padding: "40px 16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#c8a96e",
                  marginBottom: "10px",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#999",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
