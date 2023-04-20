import { BrandLink } from './Brand';
import { UserButton } from '@clerk/nextjs';

export function Navbar() {
  const navLeft = (
    <div className='flex-none'>
      <BrandLink />
    </div>
  );

  const navRight = (
    <div className='flex flex-none flex-shrink place-content-end items-center gap-2'>
      <UserButton />
    </div>
  );

  return (
    <div className='border-b-[1px] border-white/30'>
      <div className='container mx-auto '>
        <div className='flex h-16 place-content-between items-center gap-1 p-2'>
          {navLeft}
          {navRight}
        </div>
      </div>
    </div>
  );
}
