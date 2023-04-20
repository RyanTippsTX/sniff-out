import { BrandLink } from './Brand';
import { UserButton, SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import { LinkButton } from './LinkButton';

export function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();
  const navLeft = (
    <div className='flex-none'>
      <BrandLink />
    </div>
  );

  const navRight = (
    <div className='flex flex-none flex-shrink place-content-end items-center gap-2'>
      <SignedOut>
        <LinkButton href='/sign-in'>Sign In</LinkButton>
      </SignedOut>
      <SignedIn>
        <span className='font-medium'>
          {user?.firstName || user?.primaryEmailAddress?.emailAddress}
        </span>
        <UserButton />
      </SignedIn>
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
