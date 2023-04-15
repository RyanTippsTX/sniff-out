import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="grid h-screen place-items-center">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);
export default SignUpPage;
