'use client';

import { ReactNode } from 'react';

export default function SplitCard({
  photo,
  alt,
  reverse = false,
  children,
}: {
  photo: string;
  alt: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`scene-split reveal${reverse ? ' reverse' : ''}`}>
      <div className="scene-img">
        <img src={photo} alt={alt} loading="lazy" />
      </div>
      <div className="scene-text">{children}</div>
    </div>
  );
}
