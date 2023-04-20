// import { useUser } from '@clerk/nextjs';
import { type NextPage } from 'next';

import Layout from '~/components/Layout';
import type { Dog } from '@prisma/client';

import { api } from '~/utils/api';

const Home: NextPage = () => {
  // const { isSignedIn, user, isLoaded } = useUser();

  const { isSuccess, data: dogs } = api.dogs.getAll.useQuery();

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center gap-12 px-4 py-20 '>
        <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-[6rem]'>Pups</h1>

        {isSuccess && dogs.map((dog) => <PupCard key={dog.id} dog={dog} />)}
      </div>
    </Layout>
  );
};

export default Home;

function PupCard({ dog }: { dog: Dog }) {
  return (
    <div key={dog.id} className='max-w-2xl overflow-clip rounded bg-white text-slate-800 sm:flex'>
      {/* <pre>{JSON.stringify(dog, null, 2)}</pre> */}
      <div className='mb-4 flex-shrink-0 sm:mb-0 sm:mr-4'>
        <svg
          className='h-16 w-16 border border-gray-300 bg-white text-gray-300'
          preserveAspectRatio='none'
          stroke='currentColor'
          fill='none'
          viewBox='0 0 200 200'
          aria-hidden='true'
        >
          <path vectorEffect='non-scaling-stroke' strokeWidth={1} d='M0 0l200 200M0 200L200 0' />
        </svg>
      </div>
      <div>
        <h4 className='text-lg font-bold'>{dog.name}</h4>
        <p className='text-md'>{dog.size}</p>
        <p className='text-md'>size: {dog.size}</p>
        <p className='text-md'>breed: {dog.breed}</p>
        <p className='text-md'>owner: {dog.ownerId || 'n/a'}</p>
        <p className='mt-1'>
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis
          voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  );
}
