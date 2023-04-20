import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

// button component
export const LinkButton = ({
  href,
  style = 'primary',
  children,
  className,
}: {
  href: string;
  style?: 'primary' | 'secondary' | 'ghost' | 'link' | 'outline';
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
}) => {
  return (
    <Link
      className={clsx(
        'inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ',
        (() => {
          switch (style) {
            case 'primary':
              return 'bg-lime-600 text-white  hover:bg-lime-700 hover:text-zinc-200';
            case 'secondary':
              return 'bg-slate-700 text-slate-200  hover:bg-slate-800 hover:text-slate-400';
            case 'ghost':
              return 'bg-transparent text-slate-200 hover:bg-slate-700 hover:text-slate-300';
            case 'link':
              return 'text-slate-200 hover:text-slate-400 hover:underline';
            case 'outline':
              return 'bg-transparent text-slate-200 hover:bg-slate-700 hover:text-slate-300';
          }
        })(),
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
