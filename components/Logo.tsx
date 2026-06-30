export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M25.5 8.6 C 31.5 10.8 34.4 16 33.2 21.2 C 32 28 25 32 18.4 31 C 10.6 29.8 6 23.4 7.6 16.8 C 8.7 12 12.8 8.8 18 8.4"
        fill="none"
        stroke="#c47a5f"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <g>
        <path d="M20 30.5 L20 17" stroke="#7a9b78" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M20 20 C 16.1 19.6 14.3 16.8 15.1 13.3 C 18.7 13.9 20.3 16.9 20.3 20.3 Z"
          fill="#9bb38f"
        />
        <path
          d="M20 21.4 C 23.7 21 25.4 18.4 24.7 15.1 C 21.3 15.6 19.8 18.4 19.8 21.6 Z"
          fill="#7a9b78"
        />
      </g>
    </svg>
  );
}
