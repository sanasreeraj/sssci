import Head from 'next/head';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F9EFDB]">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex w-full max-w-3xl">
        <div className="hidden md:block md:w-1/2 pr-16">
          {/* Left half for photo */}
          {/* Adjusted width and added max height */}
          <img
            src="/logo.png"
            alt="Your Photo"
            className="object-cover w-full h-auto rounded-l-lg max-h-full"
          />
        </div>
        <div className="md:w-1/2">
          {/* Right half for login box */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className="relative mb-4">
              <div className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500">
                <input
                  type="email"
                  className="w-full h-full focus:outline-none"
                  id="identifierId"
                  name="identifier"
                  autoComplete="username"
                  spellCheck="false"
                  tabIndex="0"
                  aria-label="Email or phone"
                  aria-disabled="false"
                  autoCapitalize="none"
                  placeholder="Email or phone"
                />
              </div>
            </div>
            <div className="relative mb-4">
              <div className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500">
                <input
                  type="password"
                  className="w-full h-full focus:outline-none"
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
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mb-4 w-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Login
            </button>
            <div className="flex items-center justify-between">
              <hr className="flex-grow mr-4" />
              <span className="text-gray-500">Or</span>
              <hr className="flex-grow ml-4" />
            </div>
            <button className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 w-full hover:bg-red-600 focus:outline-none focus:bg-red-600">
              Continue with Google
              <span className="ml-2">
                <img
                  src="/google-logo.png"
                  alt="Google Logo"
                  className="w-4 h-4 inline-block"
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
