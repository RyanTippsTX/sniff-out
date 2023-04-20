import { Brand } from './Brand';

export function Navbar() {
  const navLeft = (
    <div className='flex-none'>
      <Brand />
    </div>
  );

  const navRight = (
    <div className='flex flex-none flex-shrink place-content-end items-center gap-2'>
      {/* <Link href={'/my-events'}>
            <a className='font-semibold tracking-tight'>My Events</a>
          </Link> */}
      {/* <div className="px-1 font-medium tracking-tight">Host:</div> */}
      {/* <AvatarDropdown
            profileLoading={profileLoading}
            displayName={profile?.display_name}
            email={user.email}
            avatarUrl={profile?.avatar_url}
          /> */}
    </div>
  );

  return (
    <div className=''>
      <div className='container mx-auto '>
        <div className='flex h-16 place-content-between items-center gap-1 p-2'>
          {navLeft}
          {navRight}
        </div>
      </div>
    </div>
  );
}
