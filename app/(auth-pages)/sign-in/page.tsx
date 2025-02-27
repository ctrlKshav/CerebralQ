import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SigninForm } from "@/components/auth/signin-form";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SigninForm />
      </div>
    </div>
  );
}
