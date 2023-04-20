import Link from 'next/link';
import { title } from '~/global';
export function Brand() {
  return (
    <Link className='text-xl font-bold tracking-tight' href='/'>
      {title}
    </Link>
  );
}
