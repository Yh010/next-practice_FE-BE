import SigninComponent from "@/components/SigninComponent";

export default async function Signin() {
  return (
    <div>
      {await new Promise((r) => setTimeout(r, 5000))}
      <SigninComponent />
    </div>
  );
}
