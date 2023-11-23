import SignUp from "../components/SignUp";
import { useState } from "react";

function SignUpPage() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <SignUp setIsAuth={setIsAuth} />
    </>
  );
}

export default SignUpPage;