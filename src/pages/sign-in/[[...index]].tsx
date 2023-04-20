import { SignIn } from '@clerk/nextjs';
import Layout from '~/components/Layout';

const SignInPage = () => (
  <Layout centerContent>
    <div className='grid h-screen place-content-center'>
      <SignIn path='/sign-in' routing='path' signUpUrl='/sign-up' />
    </div>
  </Layout>
);
export default SignInPage;
