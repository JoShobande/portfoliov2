// components/SectionWrapper.tsx
'use client';

import React, { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
};

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
  const { ref, inView } = useInView('-20px', 0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {children}
    </section>
  );
}
