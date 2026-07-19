export default function Seal() {
  return (
    <svg className="page-seal" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle
        className="ring"
        cx="20"
        cy="20"
        r="14.5"
        stroke="#61863d"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="78 13"
        transform="rotate(-54 20 20)"
      />
      <path d="M20 27 C 20 24 20 22 20 19.6" stroke="#9bb38f" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M20 20.2 C 16.4 19.8 14.5 17.6 14.9 14.6 C 17.9 14.8 19.8 17 20 20 Z" fill="#9bb38f" />
      <path d="M20 21.4 C 23.2 21 25 19.3 24.7 16.5 C 22 16.7 20.4 18.4 20 21.1 Z" fill="#7a9b78" />
    </svg>
  );
}
