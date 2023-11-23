import Login from "../components/Login";
import { useState } from "react";

function LoginPage() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Login setIsAuth={setIsAuth} />
    </>
  );
}

export default LoginPage;