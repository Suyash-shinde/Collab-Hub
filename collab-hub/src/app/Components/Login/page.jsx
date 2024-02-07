import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
      <div className="w-3/5 p-5"> 
      <div className="text-left font-bold">
         <span className="text-green-500">Collab</span>Hub
         </div>
         <div className="pt-20">
          <h2 className="text-3xl font-bold text-green-500 mb-2">Sign in to Account</h2>
          <div className="border-2 border-green-500 w-10 inline-block mb-2"></div>
          <p className="text-gray-400 my-3">use your email account</p>
          <div className="flex flex-col items-center "> 
          <div className="bg-gray-100 rounded-lg  w-64 p-2 flex items-center m-3">
            <input type="email" name="email" placeholder="Email"className=" m-2 flex-1 bg-gray-100 outline-none text-sm" />
          </div>
          <div className="bg-gray-100 rounded-lg  w-64 p-2 flex items-center  ">
            <input type="password" name="password" placeholder="Password"className="m-2 flex-1 bg-gray-100 outline-none text-sm" />
            
          </div>
      
         </div>
        
         </div>
         
         <Link href="#" className="border-2 m-6 border-green-500 text-green-500  rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">
          Sign in
          </Link>
      </div>
      <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-10">
        <h2 className="text-3xl font-bold mb-2">New   Here?</h2>
        <div className="border-2 border-white w-10 inline-block mb-2"></div>
        <p className="mb-10">Fill up personal information and start journey with us</p>
        <Link href="/Components/SignUp" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
          Sign Up
          </Link>
        
      </div>
      </div>
      </main>
    </div>
  );
};
export default Login;
