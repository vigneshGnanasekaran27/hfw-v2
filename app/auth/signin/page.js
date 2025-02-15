// app/auth/signin/page.js
import { SignInForm } from "../../../components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <SignInForm />
    </div>
  );
}
