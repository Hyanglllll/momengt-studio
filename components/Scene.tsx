import { ReactNode } from 'react';

export default function Scene({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className={`home-scene ${className}`}>
      {children}
    </div>
  );
}
