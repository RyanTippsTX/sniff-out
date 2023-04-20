import { SignUp } from '@clerk/nextjs';
import Layout from '~/components/Layout';

const SignUpPage = () => (
  <Layout centerContent>
    <SignUp path='/sign-up' routing='path' signInUrl='/sign-in' />
  </Layout>
);
export default SignUpPage;
