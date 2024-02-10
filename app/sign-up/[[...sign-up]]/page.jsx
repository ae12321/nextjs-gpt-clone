import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1>sign up page</h1>
          <SignUp />
        </div>
      </div>
    </>
  );
}
