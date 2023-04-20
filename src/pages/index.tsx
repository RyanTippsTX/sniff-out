import { SignOutButton, useUser, SignedIn } from '@clerk/nextjs';
import { type NextPage } from 'next';
import Link from 'next/link';
import Layout from '~/components/Layout';

import { api } from '~/utils/api';

const Home: NextPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  const { isLoading, isSuccess, data } = api.dogs.getAll.useQuery();

  return (
    <Layout>
      <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
        <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'>
          Sniff <span className='text-[hsl(280,100%,70%)]'>Out</span>
        </h1>
        <div className='h-0 space-x-4 '>
          {isLoaded && !isSignedIn && (
            <>
              <Link
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                href='/sign-in'
              >
                Sign In
              </Link>
              <Link
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                href='/sign-up'
              >
                Sign Up
              </Link>
            </>
          )}
          {isLoaded && isSignedIn && (
            <div className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              <SignOutButton />
            </div>
          )}
        </div>
        <SignedIn>
          {/* dogs */}
          <div className='text-white'>
            {isSuccess && <div>Dogs:</div>}
            {/* {isSuccess &&
              data.map((dog) => (
                <div key={dog.id}>
                  <pre>{JSON.stringify(dog, null, 2)}</pre>
                </div>
              ))} */}
          </div>
        </SignedIn>
      </div>
    </Layout>
  );
};

export default Home;
