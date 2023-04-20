import Link from 'next/link';

export const Brand = () => (
  <span className='font-bold'>
    <span className='text-white'>Sniff</span>
    <span className='text-lime-500'>Out</span>
  </span>
);

export function BrandLink() {
  return (
    <Link className='text-xl font-bold tracking-tight' href='/'>
      <Brand />
    </Link>
  );
}
