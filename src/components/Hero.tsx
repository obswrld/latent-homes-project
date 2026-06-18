function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-[#0d0d0d]/20" />

      {/* Center branding */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-4">
        {/* LH Logo */}
        <img
          src="/images/logo.png"
          alt="Latent Homes Logo"
          style={{
            width: "200px",
            height: "180px",
            objectFit: "contain",
            marginBottom: "-80px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        {/* Company name */}
        <h2
          className="font-black tracking-[10px] mb-4"
          style={{
            fontSize: "24px",
            color: "#c8a96e",
            fontFamily: "Georgia, serif",
          }}
        >
          LATENT HOMES
        </h2>

        {/* Gold divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent mb-4" />

        {/* Motto */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          <div className="w-10 h-px bg-[#c8a96e]/60" />
          <span className="text-white/50 text-[11px] tracking-[4px] italic">
            Private Property Investment
          </span>
          <div className="w-10 h-px bg-[#c8a96e]/60" />
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <a
            href="#properties"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#properties")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "11px",
              letterSpacing: "2px",
              backgroundColor: "#c8a96e",
              color: "#0d0d0d",
              padding: "14px 32px",
              fontWeight: "bold",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            EXPLORE PROPERTIES
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
