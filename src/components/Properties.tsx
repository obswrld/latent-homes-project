import { MapPin } from "lucide-react";
import { contactConfig } from "../data/contact";

const properties = [
  {
    id: 1,
    title: "Aurora Villa Estate",
    location: "Lekki, Lagos",
    price: "₦ 480M",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 2,
    title: "Maple Court Duplex",
    location: "Abuja",
    price: "₦ 220M",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    id: 3,
    title: "Skyline Residences",
    location: "Victoria Island",
    price: "₦ 1.1B",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    id: 4,
    title: "Heritage Manor",
    location: "Ikoyi",
    price: "₦ 950M",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
];

function Properties() {
  return (
    <section id="properties" style={{ backgroundColor: '#0d0d0d', padding: '80px 24px' }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#f0ebe2",
            marginBottom: "10px",
          }}
        >
          Featured Properties
        </h2>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "14px",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          A selection of homes currently available.
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                height: "220px",
                backgroundImage: `url('${property.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Card body */}
            <div style={{ padding: "20px" }}>
              {/* Title */}
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#f0ebe2",
                  marginBottom: "8px",
                }}
              >
                {property.title}
              </h3>

              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginBottom: "14px",
                }}
              >
                <MapPin size={12} color="rgba(255,255,255,0.4)" />
                <span
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {property.location}
                </span>
              </div>

              {/* Price */}
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#c8a96e",
                  marginBottom: "16px",
                }}
              >
                {property.price}
              </p>

              {/* Inquiry button */}
              <a
                href={contactConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "Georgia, serif",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "#0d0d0d",
                  backgroundColor: "#c8a96e",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                MAKE INQUIRY
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Properties;
