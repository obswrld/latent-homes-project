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
          Trusted property sales and brokerage
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
          Latent Homes sells premium properties from its own portfolio and acts
          as a trusted intermediary for customers looking to buy properties from
          other reputable companies and developers. We bridge the gap between
          buyers and sellers — handling discovery, verification, negotiation and
          paperwork so every transaction is transparent, secure and stress-free.
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
