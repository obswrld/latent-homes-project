import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Do you own the properties you sell?",
    answer:
      "We sell properties from our own verified portfolio and also act as a trusted intermediary for reputable developers and private sellers across Nigeria.",
  },
  {
    id: 2,
    question: "How do I know a listing is legitimate?",
    answer:
      "Every listing on Latent Homes is independently verified for title documentation, developer credibility, and legal status before it is presented to any client.",
  },
  {
    id: 3,
    question: "Can I inspect the property before buying?",
    answer:
      "Absolutely. We arrange and accompany you on site inspections at your convenience. We never encourage any client to buy land they have not physically verified.",
  },
  {
    id: 4,
    question: "Do you handle properties outside Lagos?",
    answer:
      "Yes. We have listings and intermediary services covering Lagos, Abuja, Port Harcourt, and other fast-growing cities across Nigeria.",
  },
  {
    id: 5,
    question: "How do I make an inquiry about a property?",
    answer:
      "Simply click any inquiry button on the site or reach us directly via WhatsApp, phone, or our social media channels. We respond within a few hours.",
  },
];

function QnA() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [form, setForm] = useState({ name: "", email: "", question: "" });

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `Name: ${form.name}%0AEmail: ${form.email}%0AQuestion: ${form.question}`;
    window.open(`https://wa.me/2348000000000?text=${message}`, "_blank");
  };

  return (
    <section id="qna" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* Two column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left — Accordion */}
          <div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "36px",
                fontWeight: "bold",
                color: "#1a1a1a",
                marginBottom: "40px",
                lineHeight: "1.2",
              }}
            >
              Frequently asked questions
            </h2>

            {questions.map((q) => (
              <div key={q.id} style={{ borderTop: "1px solid #e8e8e8" }}>
                <button
                  onClick={() => toggle(q.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#1a1a1a",
                      lineHeight: "1.4",
                    }}
                  >
                    {q.question}
                  </span>
                  {openId === q.id ? (
                    <ChevronUp size={18} color="#c8a96e" />
                  ) : (
                    <ChevronDown size={18} color="#888" />
                  )}
                </button>
                {openId === q.id && (
                  <div style={{ paddingBottom: "20px" }}>
                    <p
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: "1.8",
                      }}
                    >
                      {q.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: "1px solid #e8e8e8" }} />
          </div>

          {/* Right — Contact form */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "16px",
              padding: "40px",
              border: "1px solid #eeeeee",
            }}
          >
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#1a1a1a",
                marginBottom: "10px",
              }}
            >
              Ask us anything
            </h3>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "13px",
                color: "#888",
                marginBottom: "32px",
                lineHeight: "1.7",
              }}
            >
              Send your question directly to our team — we typically respond
              within 24 hours.
            </p>

            {/* Your Name */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "Georgia, serif",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#888",
                  marginBottom: "8px",
                }}
              >
                YOUR NAME
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  fontFamily: "Georgia, serif",
                  fontSize: "13px",
                  color: "#1a1a1a",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "Georgia, serif",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#888",
                  marginBottom: "8px",
                }}
              >
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  fontFamily: "Georgia, serif",
                  fontSize: "13px",
                  color: "#1a1a1a",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Question */}
            <div style={{ marginBottom: "28px" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "Georgia, serif",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#888",
                  marginBottom: "8px",
                }}
              >
                YOUR QUESTION
              </label>
              <textarea
                name="question"
                value={form.question}
                onChange={handleChange}
                placeholder="I'd like to know more about..."
                rows={5}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  fontFamily: "Georgia, serif",
                  fontSize: "13px",
                  color: "#1a1a1a",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  outline: "none",
                  resize: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              style={{
                width: "100%",
                padding: "16px",
                fontFamily: "Georgia, serif",
                fontSize: "12px",
                letterSpacing: "2px",
                fontWeight: "bold",
                backgroundColor: "#c8a96e",
                color: "#0d0d0d",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              SEND QUESTION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QnA;
