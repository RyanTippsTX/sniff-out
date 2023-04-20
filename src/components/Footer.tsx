import Link from 'next/link';
import { BrandLink } from './Brand';
import { title } from '~/global';

// list paths you want to show up in the Site Map in the site-wide footer
const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pups', href: '/pups' },
  { label: 'Owners', href: '/owners' },
  { label: 'Terms', href: '/legal' },
  { label: 'Privacy', href: '/legal' },
  { label: 'Cookies', href: '/legal' },
];

const company = (
  <div className='flex flex-col place-items-center gap-y-1'>
    <p className='text-xs font-thin text-zinc-300'>Copyright © 2023 {title}</p>
    <BrandLink />
  </div>
);

const links = (
  <div className='flex flex-row flex-wrap gap-x-2'>
    {footerLinks.map(({ label, href }) => (
      <div key={label + href}>
        <Link className='text-sm hover:underline' href={href}>
          {label}
        </Link>
      </div>
    ))}
  </div>
);

export function Footer() {
  return (
    <div className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col place-content-center items-center gap-4 px-6 py-10'>
          {links}
          {company}
        </div>
      </div>
    </div>
  );
}
