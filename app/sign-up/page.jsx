import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='flex items-start justify-center mim-h-screen'>
      <div className='mt-20'>
        <SignUp />
      </div>
    </div>
  );
};
export default SignUpPage;
