import { type NextPage } from 'next';
import { Brand } from '~/components/Brand';
import Layout from '~/components/Layout';
import { LinkButton } from '~/components/Buttons';

const Home: NextPage = () => {
  return (
    <Layout centerContent>
      <div className='flex flex-col items-center justify-center gap-12 px-4 py-16 '>
        <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-[6rem]'>
          <Brand />
        </h1>

        <div className='h-0 space-x-4 '>
          <LinkButton style='outline' href='/pups'>
            Browse Pups
          </LinkButton>
          <LinkButton href='/sign-up'>Sign Up</LinkButton>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
