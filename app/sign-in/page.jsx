import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className='flex items-start justify-center min-h-screen'>
      <div className='mt-20'>
        <SignIn />
      </div>
    </div>
  );
};
export default SignInPage;
