export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg
      className="logo-svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="lg-ring"
        d="M25.07 9.63 A 12 12 0 1 1 14.93 9.63"
        fill="none"
        stroke="#61863d"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <g className="lg-sprout">
        <path d="M20 28 L20 17" stroke="#7a9b78" strokeWidth="1.5" strokeLinecap="round" />
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
