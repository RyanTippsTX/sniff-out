import Link from 'next/link';
import React from 'react';

// button component
export const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
  loading?: boolean;
}) => {
  return (
    <div className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
      <Link href={href}>{children}</Link>
    </div>
  );
};
