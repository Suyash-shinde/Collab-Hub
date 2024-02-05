import Image from "next/image";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";

export default function Home() {
  return (
    <>
      <SignUp />
      <Login />
    </>
  );
}
