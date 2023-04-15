import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="grid h-screen place-items-center">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);
export default SignInPage;
