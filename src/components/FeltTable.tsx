export function FeltTable() {
  return (
    <svg
      className="felt-table"
      viewBox="0 0 960 520"
      width="960"
      height="520"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Poker table with chips and hole cards"
    >
      <defs>
        <radialGradient id="feltGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#1f7a5c" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#0f4a3a" stopOpacity="1" />
          <stop offset="100%" stopColor="#072820" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="railGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6b4528" />
          <stop offset="50%" stopColor="#3d2415" />
          <stop offset="100%" stopColor="#2a180e" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.45" />
        </filter>
        <pattern
          id="feltGrain"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.6" fill="#ffffff" opacity="0.04" />
          <circle cx="3" cy="3" r="0.5" fill="#000000" opacity="0.05" />
        </pattern>
      </defs>

      <ellipse
        cx="480"
        cy="270"
        rx="430"
        ry="220"
        fill="url(#railGrad)"
        filter="url(#softShadow)"
      />
      <ellipse cx="480" cy="270" rx="400" ry="198" fill="url(#feltGlow)" />
      <ellipse cx="480" cy="270" rx="400" ry="198" fill="url(#feltGrain)" />
      <ellipse
        cx="480"
        cy="270"
        rx="372"
        ry="176"
        fill="none"
        stroke="#d4a84b"
        strokeOpacity="0.28"
        strokeWidth="2"
      />

      <g className="felt-table__board">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={330 + i * 58}
            y="232"
            width="48"
            height="68"
            rx="5"
            fill="none"
            stroke="#d4a84b"
            strokeOpacity="0.22"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
        ))}
      </g>

      <g className="felt-table__cards">
        <g className="felt-table__card felt-table__card--a">
          <rect x="410" y="340" width="64" height="90" rx="6" fill="#f3eee4" />
          <text
            x="420"
            y="364"
            fill="#c4453a"
            fontFamily="Georgia, serif"
            fontSize="18"
            fontWeight="700"
          >
            A
          </text>
          <text
            x="420"
            y="382"
            fill="#c4453a"
            fontFamily="Georgia, serif"
            fontSize="16"
          >
            ♥
          </text>
          <text
            x="442"
            y="398"
            fill="#c4453a"
            fontFamily="Georgia, serif"
            fontSize="28"
            textAnchor="middle"
          >
            ♥
          </text>
        </g>
        <g className="felt-table__card felt-table__card--b">
          <rect x="478" y="336" width="64" height="90" rx="6" fill="#f3eee4" />
          <text
            x="488"
            y="360"
            fill="#1e2a44"
            fontFamily="Georgia, serif"
            fontSize="18"
            fontWeight="700"
          >
            K
          </text>
          <text
            x="488"
            y="378"
            fill="#1e2a44"
            fontFamily="Georgia, serif"
            fontSize="16"
          >
            ♠
          </text>
          <text
            x="510"
            y="394"
            fill="#1e2a44"
            fontFamily="Georgia, serif"
            fontSize="28"
            textAnchor="middle"
          >
            ♠
          </text>
        </g>
      </g>

      <g className="felt-table__chips felt-table__chips--left">
        <Chip cx={220} cy={250} fill="#c4453a" />
        <Chip cx={236} cy={242} fill="#efe6d4" stroke="#c4453a" />
        <Chip cx={248} cy={256} fill="#1e2a44" />
      </g>
      <g className="felt-table__chips felt-table__chips--right">
        <Chip cx={700} cy={248} fill="#d4a84b" />
        <Chip cx={718} cy={240} fill="#c4453a" />
        <Chip cx={732} cy={254} fill="#1e2a44" />
        <Chip cx={710} cy={262} fill="#efe6d4" stroke="#1e2a44" />
      </g>

      <g className="felt-table__pot">
        <Chip cx={460} cy={200} fill="#d4a84b" r={16} />
        <Chip cx={478} cy={192} fill="#c4453a" r={16} />
        <Chip cx={494} cy={204} fill="#1e2a44" r={16} />
      </g>
    </svg>
  );
}

function Chip({
  cx,
  cy,
  fill,
  stroke,
  r = 18,
}: {
  cx: number;
  cy: number;
  fill: string;
  stroke?: string;
  r?: number;
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      <circle
        cx={cx}
        cy={cy}
        r={r - 4}
        fill="none"
        stroke={stroke ?? "#f3eee4"}
        strokeOpacity={stroke ? 0.9 : 0.55}
        strokeWidth="2"
        strokeDasharray="3 4"
      />
    </g>
  );
}
