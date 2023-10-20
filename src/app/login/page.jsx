import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Login = () => {
  return (
    <>
      <div className=" h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-bg-custom-color">
        <header className="fixed top-0 left-0 right-0 bg-gray-700 text-text-custom-color-white p-2">
          <h2 className="text-2xl leading-8 tracking-tight">Lawyer.<span className="text-text-custom-color-Details">AI</span></h2>
        </header>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <picture>
            <Image src={logo} alt="Logo" height={"150"} className="mx-auto animate-spin" />
          </picture>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-text-custom-color-dark">
            Nice to see you!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-text-custom-color-dark"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="user"
                  name="user"
                  type="email"
                  autoComplete="text"
                  placeholder="johndoe@hotmail.com"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-text-custom-color-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-text-custom-color-dark"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Johndoe123"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-text-custom-color-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-text-custom-color-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-text-custom-color-dark">
            Not a member?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 underline text-blue-700 hover:text-blue-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-700 text-text-custom-color-white p-2">
        <h2 className="text-xs leading-8 tracking-tight">
          MORE ABOUT LAWYER.AI
        </h2>
      </footer>
    </>
  );
};

export default Login;
