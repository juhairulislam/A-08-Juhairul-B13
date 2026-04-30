"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Slide data ──────────────────────────────────────────────────────────────
const SLIDES = [
  {
    hl: "Own the Summer — Up to 50% OFF ☀️",
    sl: "Hot Picks for Hot Days 🔥 | Sunglasses, Outfits & Essentials",
    svgKey: "s0",
    pn: "UV Shield Pro",
    pp: "৳899",
    po: "৳1,799",
  },
  {
    hl: "Outfit the Season — 40% OFF Looks 👙",
    sl: "Breezy Fits & Beachwear | Style That Beats the Heat",
    svgKey: "s1",
    pn: "Breeze Linen Set",
    pp: "৳1,299",
    po: "৳2,199",
  },
  {
    hl: "Protect Your Skin — SPF Essentials 🧴",
    sl: "Summer Skincare | Sunscreen, Hats & More",
    svgKey: "s2",
    pn: "Golden Hour SPF50",
    pp: "৳649",
    po: "৳929",
  },
];

const TICKER_ITEMS = [
  "☀️ Summer Sale — Up to 50% OFF",
  "🚚 Free delivery over ৳999",
  "👍 Easy 30-day returns",
  "🎉 New arrivals every Friday",
];

// ─── SVG Illustrations ───────────────────────────────────────────────────────
function SunglassesSVG() {
  return (
    <g>
      <circle cx="190" cy="50" r="28" fill="#FFD23F" opacity=".95" />
      <g stroke="#FFD23F" strokeWidth="3" strokeLinecap="round" opacity=".7">
        <line x1="190" y1="14" x2="190" y2="6" />
        <line x1="190" y1="86" x2="190" y2="94" />
        <line x1="154" y1="50" x2="146" y2="50" />
        <line x1="226" y1="50" x2="234" y2="50" />
        <line x1="165" y1="25" x2="159" y2="19" />
        <line x1="215" y1="75" x2="221" y2="81" />
        <line x1="215" y1="25" x2="221" y2="19" />
        <line x1="165" y1="75" x2="159" y2="81" />
      </g>
      <rect x="0" y="155" width="240" height="85" fill="#1E88E5" opacity=".6" />
      <rect x="0" y="165" width="240" height="75" fill="#1565C0" opacity=".5" />
      <path
        d="M0 162 Q30 154 60 162 Q90 170 120 162 Q150 154 180 162 Q210 170 240 162 L240 168 Q210 176 180 168 Q150 160 120 168 Q90 176 60 168 Q30 160 0 168Z"
        fill="white"
        opacity=".25"
      />
      <path
        d="M0 178 Q40 170 80 178 Q120 186 160 178 Q200 170 240 178 L240 183 Q200 175 160 183 Q120 191 80 183 Q40 175 0 183Z"
        fill="white"
        opacity=".18"
      />
      <ellipse cx="120" cy="210" rx="130" ry="40" fill="#F9A825" opacity=".7" />
      <ellipse cx="120" cy="220" rx="140" ry="35" fill="#FFB300" opacity=".5" />
      <rect x="38" y="100" width="7" height="80" rx="3" fill="#5D4037" />
      <ellipse cx="41" cy="100" rx="28" ry="14" fill="#388E3C" opacity=".9" />
      <ellipse
        cx="24"
        cy="92"
        rx="22"
        ry="10"
        fill="#43A047"
        opacity=".85"
        transform="rotate(-20 24 92)"
      />
      <ellipse
        cx="58"
        cy="88"
        rx="20"
        ry="9"
        fill="#2E7D32"
        opacity=".8"
        transform="rotate(15 58 88)"
      />
      <rect x="72" y="118" width="44" height="28" rx="8" fill="#1A1A2E" opacity=".9" />
      <rect x="126" y="118" width="44" height="28" rx="8" fill="#1A1A2E" opacity=".9" />
      <rect x="116" y="128" width="10" height="4" rx="2" fill="#333" />
      <rect x="60" y="122" width="12" height="3" rx="1.5" fill="#1A1A2E" opacity=".7" />
      <rect x="170" y="122" width="12" height="3" rx="1.5" fill="#1A1A2E" opacity=".7" />
      <rect x="80" y="124" width="28" height="14" rx="5" fill="#00BCD4" opacity=".45" />
      <rect x="134" y="124" width="28" height="14" rx="5" fill="#00BCD4" opacity=".45" />
      <circle cx="94" cy="131" r="4" fill="white" opacity=".3" />
      <circle cx="148" cy="131" r="4" fill="white" opacity=".3" />
      <ellipse cx="120" cy="175" rx="60" ry="12" fill="#F9A825" opacity=".6" />
      <rect x="90" y="163" width="60" height="24" rx="6" fill="#FF7043" opacity=".7" />
      <rect x="108" y="155" width="24" height="12" rx="5" fill="#E64A19" opacity=".8" />
    </g>
  );
}

function OutfitSVG() {
  return (
    <g>
      <circle cx="200" cy="45" r="24" fill="#FFD23F" opacity=".9" />
      <g stroke="#FFD23F" strokeWidth="2.5" strokeLinecap="round" opacity=".65">
        <line x1="200" y1="15" x2="200" y2="7" />
        <line x1="200" y1="75" x2="200" y2="83" />
        <line x1="170" y1="45" x2="162" y2="45" />
        <line x1="230" y1="45" x2="238" y2="45" />
        <line x1="179" y1="24" x2="173" y2="18" />
        <line x1="221" y1="66" x2="227" y2="72" />
      </g>
      <rect x="0" y="160" width="240" height="80" fill="#29B6F6" opacity=".4" />
      <ellipse cx="120" cy="215" rx="135" ry="38" fill="#F9A825" opacity=".65" />
      <circle cx="120" cy="68" r="22" fill="#FFCCBC" />
      <path d="M105 60 Q120 50 135 60" fill="#5D4037" />
      <ellipse cx="120" cy="52" rx="22" ry="14" fill="#795548" />
      <path
        d="M92 110 Q100 106 120 108 Q140 106 148 110 L158 200 Q120 210 82 200Z"
        fill="#FF4081"
        opacity=".92"
      />
      <path
        d="M92 110 Q100 106 120 108 Q140 106 148 110 L145 130 Q120 140 95 130Z"
        fill="#E91E63"
        opacity=".8"
      />
      <circle cx="110" cy="145" r="4" fill="white" opacity=".5" />
      <circle cx="126" cy="158" r="4" fill="white" opacity=".5" />
      <circle cx="112" cy="168" r="4" fill="white" opacity=".5" />
      <circle cx="130" cy="140" r="3" fill="white" opacity=".4" />
      <rect x="106" y="76" width="18" height="10" rx="4" fill="#1A1A2E" opacity=".85" />
      <rect x="126" y="76" width="18" height="10" rx="4" fill="#1A1A2E" opacity=".85" />
      <path d="M124 80 Q125 78 126 80" stroke="#1A1A2E" strokeWidth="2" fill="none" />
      <path
        d="M92 118 Q70 140 72 165"
        stroke="#FFCCBC"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M148 118 Q170 140 168 165"
        stroke="#FFCCBC"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="155" y="148" width="30" height="28" rx="6" fill="#FF9800" opacity=".9" />
      <path d="M159 148 Q165 138 175 138 Q185 138 181 148" stroke="#FF9800" strokeWidth="4" fill="none" />
    </g>
  );
}

function SunscreenSVG() {
  return (
    <g>
      <circle cx="190" cy="50" r="26" fill="#FFD23F" opacity=".9" />
      <g stroke="#FFD23F" strokeWidth="2.5" strokeLinecap="round" opacity=".6">
        <line x1="190" y1="18" x2="190" y2="10" />
        <line x1="190" y1="82" x2="190" y2="90" />
        <line x1="158" y1="50" x2="150" y2="50" />
        <line x1="222" y1="50" x2="230" y2="50" />
        <line x1="167" y1="27" x2="161" y2="21" />
        <line x1="213" y1="73" x2="219" y2="79" />
      </g>
      <rect x="0" y="158" width="240" height="82" fill="#29B6F6" opacity=".45" />
      <ellipse cx="120" cy="215" rx="135" ry="38" fill="#F9A825" opacity=".65" />
      <rect x="78" y="80" width="84" height="140" rx="20" fill="white" opacity=".95" />
      <rect x="78" y="80" width="84" height="140" rx="20" fill="#FF7043" opacity=".15" />
      <rect x="90" y="62" width="60" height="24" rx="10" fill="#FF5722" />
      <rect x="110" y="48" width="20" height="18" rx="6" fill="#E64A19" />
      <circle cx="120" cy="48" r="6" fill="#BF360C" />
      <rect x="88" y="100" width="64" height="90" rx="10" fill="#FF6B35" opacity=".85" />
      <rect x="96" y="112" width="8" height="20" rx="2" fill="white" />
      <rect x="96" y="112" width="16" height="6" rx="2" fill="white" />
      <rect x="96" y="121" width="14" height="6" rx="2" fill="white" />
      <rect x="115" y="112" width="8" height="20" rx="2" fill="white" />
      <rect x="115" y="112" width="16" height="6" rx="2" fill="white" />
      <rect x="131" y="112" width="8" height="20" rx="2" fill="white" />
      <rect x="131" y="112" width="14" height="6" rx="2" fill="white" />
      <rect x="131" y="121" width="14" height="6" rx="2" fill="white" />
      <rect x="131" y="126" width="14" height="6" rx="2" fill="white" />
      <rect x="100" y="140" width="8" height="24" rx="3" fill="white" />
      <rect x="100" y="140" width="14" height="8" rx="3" fill="white" />
      <rect x="100" y="148" width="14" height="8" rx="3" fill="white" />
      <rect x="100" y="156" width="14" height="8" rx="3" fill="white" />
      <rect x="118" y="140" width="8" height="24" rx="3" fill="white" />
      <rect x="118" y="140" width="16" height="8" rx="3" fill="white" />
      <rect x="118" y="156" width="16" height="8" rx="3" fill="white" />
      <rect x="88" y="88" width="8" height="50" rx="4" fill="white" opacity=".3" />
      <ellipse cx="60" cy="165" rx="36" ry="10" fill="#F9A825" />
      <path d="M36 165 Q60 140 84 165" fill="#FFB300" />
      <rect x="44" y="158" width="32" height="8" rx="2" fill="#FF7043" opacity=".6" />
    </g>
  );
}

const SVG_MAP = {
  s0: SunglassesSVG,
  s1: OutfitSVG,
  s2: SunscreenSVG,
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SunCartHero() {
  const [cur, setCur] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setVisible(false);
    setTimeout(() => {
      setCur(i);
      setVisible(true);
    }, 220);
  }, []);

  const startTimer = useCallback(
    (startFrom) => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        const nextIndex = (startFrom + 1) % SLIDES.length;
        goTo(nextIndex);
        startFrom = nextIndex;
      }, 4200);
    },
    [goTo]
  );

  useEffect(() => {
    startTimer(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleDot = (i) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(i);
    startTimer(i);
  };

  const slide = SLIDES[cur];
  const IllusSVG = SVG_MAP[slide.svgKey];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .sc-hero-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 500px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg,#FFD23F 0%,#FF6B35 38%,#FF4081 75%,#C2185B 100%);
          width: 100%;
        }

        .sc-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .sc-blob1 {
          width: clamp(160px, 25vw, 300px);
          height: clamp(160px, 25vw, 300px);
          background: rgba(255,220,80,0.4);
          filter: blur(55px);
          top: -80px; left: -60px;
          animation: scBfloat 7s ease-in-out infinite;
        }
        .sc-blob2 {
          width: clamp(130px, 20vw, 240px);
          height: clamp(130px, 20vw, 240px);
          background: rgba(255,64,129,0.35);
          filter: blur(45px);
          bottom: -50px; right: 60px;
          animation: scBfloat 9s ease-in-out infinite reverse;
        }
        .sc-blob3 {
          width: clamp(100px, 15vw, 180px);
          height: clamp(100px, 15vw, 180px);
          background: rgba(255,107,53,0.3);
          filter: blur(40px);
          top: 50%; right: clamp(60px, 20vw, 280px);
          animation: scBfloat 6s ease-in-out infinite;
        }
        @keyframes scBfloat {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-18px) scale(1.06); }
        }

        .sc-ticker {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 34px;
          background: rgba(0,0,0,0.18);
          display: flex;
          align-items: center;
          overflow: hidden;
          z-index: 5;
        }
        .sc-ttrack {
          display: flex;
          gap: 48px;
          animation: scTmove 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes scTmove {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .sc-titem {
          font-size: 12px;
          color: rgba(255,255,255,0.92);
          font-weight: 500;
          letter-spacing: .04em;
        }
        .sc-tsep { color: rgba(255,255,255,0.35); margin: 0 4px; }

        .sc-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 60px 44px 44px;
          gap: 28px;
          min-height: 500px;
        }

        .sc-left {
          flex: 1;
          max-width: 460px;
          animation: scFsi .8s ease both;
        }
        @keyframes scFsi {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .sc-badge-live {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 18px;
        }
        .sc-dot-live {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #fff;
          animation: scPulse 1.5s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes scPulse {
          0%,100% { opacity: .7; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.5); }
        }
        .sc-badge-live span {
          font-size: 11.5px;
          color: #fff;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: .05em;
        }

        .sc-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 4vw, 42px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 14px;
          text-shadow: 0 2px 20px rgba(0,0,0,0.12);
          transition: opacity .45s, transform .45s;
        }
        .sc-subline {
          font-size: clamp(12px, 1.4vw, 13.5px);
          color: rgba(255,255,255,0.9);
          line-height: 1.7;
          margin-bottom: 26px;
          max-width: 340px;
          transition: opacity .45s, transform .45s;
        }

        .sc-ctarow {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .sc-btn1 {
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          font-weight: 500;
          color: #E64A19;
          background: #fff;
          border: none;
          border-radius: 100px;
          padding: 13px 28px;
          cursor: pointer;
          transition: all .22s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 4px 18px rgba(0,0,0,0.13);
        }
        .sc-btn1:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 8px 26px rgba(0,0,0,0.2); }
        .sc-btn2 {
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          font-weight: 500;
          color: #fff;
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 100px;
          padding: 12px 26px;
          cursor: pointer;
          transition: all .22s cubic-bezier(.34,1.56,.64,1);
        }
        .sc-btn2:hover { background: rgba(255,255,255,0.3); transform: translateY(-3px) scale(1.03); }

        .sc-trust {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 100px;
          padding: 7px 16px;
        }
        .sc-trust span { font-size: 12px; color: rgba(255,255,255,0.95); }

        .sc-right {
          flex: 0 0 300px;
          animation: scFsiR .9s .15s ease both;
        }
        @keyframes scFsiR {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .sc-card {
          position: relative;
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.38);
          border-radius: 22px;
          padding: 20px;
          width: 100%;
        }
        .sc-illus-wrap {
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 1/1;
          background: linear-gradient(145deg, rgba(255,255,255,0.28), rgba(255,180,80,0.22));
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          position: relative;
        }
        .sc-disc-badge {
          position: absolute;
          top: 10px; right: 10px;
          width: 54px; height: 54px;
          border-radius: 50%;
          background: linear-gradient(135deg,#FF4081,#FF6B35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(255,64,129,0.5);
          animation: scBpop .6s .85s cubic-bezier(.34,1.56,.64,1) both;
        }
        @keyframes scBpop {
          from { opacity:0; transform: scale(0) rotate(-20deg); }
          to   { opacity:1; transform: scale(1) rotate(0); }
        }
        .sc-disc-badge span {
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
        }
        .sc-prod-name {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          transition: opacity .45s, transform .45s;
        }
        .sc-pricerow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 3px;
        }
        .sc-pnow {
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          font-family: 'Syne', sans-serif;
          transition: opacity .45s, transform .45s;
        }
        .sc-pold {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          text-decoration: line-through;
          transition: opacity .45s, transform .45s;
        }
        .sc-stars { display: flex; gap: 2px; margin-top: 5px; }
        .sc-star { color: #FFD23F; font-size: 12px; }
        .sc-star-dim { color: #FFD23F; font-size: 12px; opacity: .35; }

        .sc-dots {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }
        .sc-sdot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.38);
          cursor: pointer;
          transition: all .3s;
          border: none;
          padding: 0;
        }
        .sc-sdot-on {
          width: 20px;
          border-radius: 4px;
          background: #fff;
        }

        .sc-fade-in  { opacity: 1; transform: translateY(0); }
        .sc-fade-out { opacity: 0; transform: translateY(6px); }

        @media (max-width: 1023px) {
          .sc-inner { padding: 60px 32px 44px; gap: 20px; }
          .sc-right { flex: 0 0 240px; }
        }
        @media (max-width: 767px) {
          .sc-inner { flex-direction: column; align-items: flex-start; padding: 56px 24px 56px; min-height: auto; gap: 24px; }
          .sc-left { max-width: 100%; }
          .sc-right { flex: none; width: 100%; max-width: 360px; align-self: center; }
        }
        @media (max-width: 480px) {
          .sc-hero-root { border-radius: 14px; }
          .sc-inner { padding: 52px 18px 52px; }
          .sc-ctarow { flex-direction: column; align-items: flex-start; }
          .sc-btn1, .sc-btn2 { width: 100%; text-align: center; }
          .sc-right { max-width: 100%; }
        }
      `}</style>

      <div className="sc-hero-root mt-5">
        <div className="sc-blob sc-blob1" />
        <div className="sc-blob sc-blob2" />
        <div className="sc-blob sc-blob3" />

        <div className="sc-ticker" aria-hidden="true">
          <div className="sc-ttrack">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
              <span key={i} className="sc-titem">
                {t}
                {i < TICKER_ITEMS.length * 2 - 1 && (
                  <span className="sc-tsep"> | </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="sc-inner">
          <div className="sc-left">
            <div className="sc-badge-live">
              <div className="sc-dot-live" />
              <span>Limited Summer Offers</span>
            </div>

            <div
              className={`sc-headline ${visible ? "sc-fade-in" : "sc-fade-out"}`}
              style={{ transition: "opacity .45s, transform .45s" }}
            >
              {slide.hl}
            </div>

            <div
              className={`sc-subline ${visible ? "sc-fade-in" : "sc-fade-out"}`}
              style={{ transition: "opacity .45s, transform .45s" }}
            >
              {slide.sl}
            </div>

            <div className="sc-ctarow">
              <button className="sc-btn1">Shop Now</button>
              <button className="sc-btn2">Explore Deals</button>
            </div>

            <div className="sc-trust">
              <span>🚚 Free delivery over ৳999 &nbsp;·&nbsp; 🔒 Secure Checkout</span>
            </div>
          </div>

          <div className="sc-right">
            <div className="sc-card">
              <div className="sc-illus-wrap">
                <svg
                  viewBox="0 0 240 240"
                  width="220"
                  height="220"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <IllusSVG />
                </svg>
                <div className="sc-disc-badge" aria-hidden="true">
                  <span>-50%</span>
                  <span>OFF</span>
                </div>
              </div>

              <div
                className={`sc-prod-name ${visible ? "sc-fade-in" : "sc-fade-out"}`}
                style={{ transition: "opacity .45s, transform .45s" }}
              >
                {slide.pn}
              </div>

              <div className="sc-pricerow">
                <span
                  className={`sc-pnow ${visible ? "sc-fade-in" : "sc-fade-out"}`}
                  style={{ transition: "opacity .45s, transform .45s" }}
                >
                  {slide.pp}
                </span>
                <span
                  className={`sc-pold ${visible ? "sc-fade-in" : "sc-fade-out"}`}
                  style={{ transition: "opacity .45s, transform .45s" }}
                >
                  {slide.po}
                </span>
              </div>

              <div className="sc-stars" aria-label="4 out of 5 stars">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="sc-star">★</span>
                ))}
                <span className="sc-star-dim">★</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sc-dots" role="tablist" aria-label="Slide navigation">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === cur}
              aria-label={`Slide ${i + 1}`}
              className={`sc-sdot${i === cur ? " sc-sdot-on" : ""}`}
              onClick={() => handleDot(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}