export function DoodlesPattern() {
  return (
    <svg
      viewBox="0 0 1200 1000"
      className="w-full h-full text-muted-foreground/60"
      style={{ maxWidth: "100%" }}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* ====== TECH ICON DOODLES ====== */}

      {/* Python Logo Shape */}
      <g opacity="0.65" stroke="currentColor" strokeWidth="1.8" fill="none">
        <path d="M250 150 h40 a20 20 0 0 1 20 20 v40 a20 20 0 0 1 -20 20 h-20 v10 a10 10 0 0 0 10 10 h10" />
        <circle cx="270" cy="160" r="3" fill="currentColor" />
        <path d="M290 250 h-40 a20 20 0 0 1 -20 -20 v-40 a20 20 0 0 1 20 -20 h20 v-10 a10 10 0 0 0 -10 -10 h-10" />
        <circle cx="270" cy="240" r="3" fill="currentColor" />
      </g>

      {/* NumPy Matrix Icon */}
      <g opacity="0.55" stroke="currentColor" strokeWidth="1.6">
        <rect x="800" y="150" width="60" height="60" rx="5" fill="none" />
        <line x1="820" y1="150" x2="820" y2="210" />
        <line x1="840" y1="150" x2="840" y2="210" />
        <line x1="800" y1="170" x2="860" y2="170" />
        <line x1="800" y1="190" x2="860" y2="190" />
      </g>

      {/* Machine Learning Neural Network */}
      <g opacity="0.55" stroke="currentColor" strokeWidth="1.6" fill="none">
        <circle cx="500" cy="400" r="8" />
        <circle cx="470" cy="370" r="8" />
        <circle cx="530" cy="370" r="8" />
        <circle cx="470" cy="430" r="8" />
        <circle cx="530" cy="430" r="8" />
        <line x1="470" y1="370" x2="500" y2="400" />
        <line x1="530" y1="370" x2="500" y2="400" />
        <line x1="470" y1="430" x2="500" y2="400" />
        <line x1="530" y1="430" x2="500" y2="400" />
      </g>

      {/* Database Cylinder */}
      <g opacity="0.6" stroke="currentColor" strokeWidth="1.8" fill="none">
        <ellipse cx="200" cy="750" rx="35" ry="10" />
        <line x1="165" y1="750" x2="165" y2="800" />
        <line x1="235" y1="750" x2="235" y2="800" />
        <ellipse cx="200" cy="800" rx="35" ry="10" />
      </g>

      {/* AI Chip */}
      <g opacity="0.6" stroke="currentColor" strokeWidth="1.5" fill="none">
        <rect x="950" y="600" width="80" height="80" rx="6" />
        <rect x="970" y="620" width="40" height="40" rx="3" />
        <text x="982" y="645" fontSize="12" fill="currentColor">AI</text>
        <line x1="990" y1="600" x2="990" y2="580" />
        <line x1="990" y1="680" x2="990" y2="700" />
        <line x1="950" y1="640" x2="930" y2="640" />
        <line x1="1030" y1="640" x2="1050" y2="640" />
      </g>

      {/* Cloud Icon */}
      <g opacity="0.55" stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M600 150 q10 -25 40 -20 q15 -15 35 -5 q25 5 25 25 q20 5 20 25 q0 20 -25 25 h-80 q-25 0 -25 -25 q0 -15 10 -25 z" />
      </g>

      {/* Neural Path Graph */}
      <g opacity="0.5" stroke="currentColor" strokeWidth="1.3" fill="none">
        <circle cx="850" cy="400" r="6" />
        <circle cx="870" cy="370" r="6" />
        <circle cx="870" cy="430" r="6" />
        <circle cx="890" cy="400" r="6" />
        <line x1="850" y1="400" x2="870" y2="370" />
        <line x1="850" y1="400" x2="870" y2="430" />
        <line x1="870" y1="370" x2="890" y2="400" />
        <line x1="870" y1="430" x2="890" y2="400" />
      </g>

      {/* TensorFlow Block Icon */}
      <g opacity="0.55" stroke="currentColor" strokeWidth="1.6" fill="none">
        <path d="M400 250 l40 -20 v40 l-40 20 v-40z" />
        <path d="M440 230 l20 10 v40 l-20 -10 v-40z" />
        <path d="M400 270 l60 30" />
      </g>

      {/* Data Node Network */}
      <g opacity="0.5" stroke="currentColor" strokeWidth="1.3">
        <circle cx="700" cy="700" r="7" fill="none" />
        <circle cx="730" cy="720" r="7" fill="none" />
        <circle cx="670" cy="720" r="7" fill="none" />
        <circle cx="700" cy="740" r="7" fill="none" />
        <line x1="700" y1="700" x2="730" y2="720" />
        <line x1="700" y1="700" x2="670" y2="720" />
        <line x1="700" y1="740" x2="730" y2="720" />
        <line x1="700" y1="740" x2="670" y2="720" />
      </g>

      {/* Code Brackets */}
      <g opacity="0.45" fontSize="48" fontWeight="bold" fill="currentColor">
        <text x="1100" y="900">{"<"}</text>
        <text x="1140" y="900">{"/>"}</text>
      </g>

      {/* Circuit-like Paths */}
      <g opacity="0.4" stroke="currentColor" strokeWidth="1.4" fill="none">
        <path d="M300 850 h50 v-20 h30 v-20 h30" />
        <circle cx="410" cy="810" r="3" fill="currentColor" />
        <circle cx="380" cy="830" r="3" fill="currentColor" />
      </g>

      {/* Math Formula Icons */}
      <g opacity="0.4" fontSize="22" fontFamily="monospace" fill="currentColor">
        <text x="150" y="300">Σ</text>
        <text x="180" y="305">π</text>
        <text x="210" y="310">√</text>
      </g>

      {/* Binary Digits */}
      <g opacity="0.35" fontSize="16" fontFamily="monospace" fill="currentColor">
        <text x="600" y="900">101010</text>
        <text x="650" y="930">010101</text>
      </g>
    </svg>
  );
}
