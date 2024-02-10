import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1>sign in page</h1>
          <SignIn />
        </div>
      </div>
    </>
  );
}
