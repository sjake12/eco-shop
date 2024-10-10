function Register() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-eco-500 to-eco-400">
      <h2 className="font-bold text-4xl mb-3">Register</h2>
      <form
        action="post"
        className="min-h-max min-w-max bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-4"
      >
        <div class="w-full max-w-sm min-w-[200px]">
          <div class="relative">
            <input
              type="username"
              class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Your username"
            />
            <p class="flex items-start mt-2 text-xs text-slate-400"></p>
          </div>
        </div>
        <div class="w-full max-w-sm min-w-[200px]">
          <div class="relative">
            <input
              type="email"
              class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Your email"
            />
            <p class="flex items-start mt-2 text-xs text-slate-400"></p>
          </div>
        </div>
        <div class="w-full max-w-sm min-w-[200px]">
          <div class="relative">
            <input
              type="password"
              class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Your password"
            />
            <p class="flex items-start mt-2 text-xs text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 mr-1.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </p>
          </div>
        </div>
        <button
          className="bg-eco-800 text-white text-lg font-bold px-6 py-2 rounded-lg hover:bg-eco-700 transition-colors focus:outline-none focus:ring-2 focus:ring-eco-500 focus:ring-offset-2"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
