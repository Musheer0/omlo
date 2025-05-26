import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CTAButtonProps {
  className?: string;
  children: ReactNode;
  variant?: 'normal' | 'outline' | 'dark';
}

const CTAButton: React.FC<CTAButtonProps> = ({
  className = '',
  children,
  variant = 'normal',
}) => {
  // Style variants
  const baseNormal =
    'bg-[#fffce5] cursor-pointer px-7 py-1 rounded-md fw-medium w-fit text-zinc-900';

  const baseOutline =
    'bg-transparent cursor-pointer px-7 py-1 rounded-md fw-medium w-fit border border-zinc-100/50 text-white hover:bg-white/10 transition';

  const baseDark =
    'bg-emerald-950 text-white cursor-pointer px-7 py-1 rounded-md fw-medium w-fit';

  const variantClass =
    variant === 'outline'
      ? baseOutline
      : variant === 'dark'
      ? baseDark
      : baseNormal;

  const mergedClasses = twMerge(variantClass, className,);

  return <button className={mergedClasses}>{children}</button>;
};

export default CTAButton;
