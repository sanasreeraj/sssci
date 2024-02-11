import Head from "next/head";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9EFDB]">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto">
        <div className="md:w-1/2 flex justify-center items-center mr-32">
          <img
            src="/logo.png"
            alt="Your Photo"
            className="object-cover h-64 md:h-auto w-full rounded-l-lg"
          />
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="bg-[#E7DBC2] rounded-lg p-8 md:p-12 shadow-md w-full max-w-md">
            <h1 className="text-3xl mb-6 md:mb-8">LOGIN</h1>
            <div className="relative mb-4 md:mb-6">
              <div className="border-2 rounded-xl border-stone-500 px-4 py-3 w-full focus:outline-none bg-[#E7DBC2]">
                <input
                  type="email"
                  className="w-full h-full focus:outline-none bg-transparent"
                  id="identifierId"
                  name="identifier"
                  autoComplete="username"
                  spellCheck="false"
                  tabIndex="0"
                  aria-label="Email or phone"
                  aria-disabled="false"
                  autoCapitalize="none"
                  placeholder="Email or Phone"
                />
              </div>
            </div>
            <div className="relative mb-4 md:mb-6">
              <div className="border-2 rounded-xl border-stone-500 px-4 py-3 w-full focus:outline-none  bg-[#E7DBC2]">
                <input
                  type="password"
                  className="w-full h-full focus:outline-none bg-transparent"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  spellCheck="false"
                  tabIndex="0"
                  aria-label="Password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="border-2 rounded-xl border-stone-500 bg-[#243E36] text-white px-6 md:px-8 py-2 mb-4 md:mb-6 hover:bg-[#CFB9A5] focus:outline-none">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="border-2 rounded-xl border-stone-500 bg-[#4285F4] text-white px-6 md:px-8 py-2 mb-4 md:mb-6 hover:bg-[#0F9D58] focus:outline-none">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
