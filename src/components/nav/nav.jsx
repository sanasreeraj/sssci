import Head from 'next/head';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9EFDB]">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto">
        <div className="md:w-1/2 flex justify-center items-center mr-32">
          {/* Left half for photo */}
          <img
            src="/logo.png"
            alt="Your Photo"
            className="object-cover h-64 md:h-auto w-full rounded-l-lg"
          />
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          {/* Right half for login box */}
          <div className="bg-[#F9EFDB] rounded-lg p-12 shadow-md w-full max-w-md"> {/* Adjusted max-width */}
            <h1 className="text-3xl font-bold mb-8">Login</h1>
            <div className="relative mb-6">
              <div className="border-2 rounded-xl border-stone-500 px-4 py-3 w-full focus:outline-none bg-[#F9EFDB]"> 
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
            <div className="relative mb-6">
              <div className="border-2 rounded-xl border-stone-500 px-4 py-3 w-full focus:outline-none focus:border-blue-500 bg-[#F9EFDB]"> 
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
            <button className="border-2 rounded-3xl border-stone-500 bg-yellow-700 text-white px-16 py-3 mb-6 w-full hover:bg-yellow-600 focus:outline-none focus:bg-blue-600">
              Login
            </button>
            <div className="flex items-center justify-between mb-4">
              <hr className="flex-grow mr-4" />
              <span className="text-gray-500">Or</span>
              <hr className="flex-grow ml-4" />
            </div>
            <button className="bg-red-500 text-white rounded-lg px-6 py-3 w-full hover:bg-red-600 focus:outline-none focus:bg-red-600">
              Continue with Google
              <span className="ml-2">
                <img
                  src="/google-logo.png"
                  alt="Google Logo"
                  className="w-6 h-6 inline-block"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
