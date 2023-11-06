// 'use client'
// import Link from "next/link";
// import Image from "next/image";
// import logo from "@/assets/logo.png";
// import { useState } from "react";
// import { user } from "@/helpers/usuario";
// import { useRouter } from "next/navigation";

// const Login = () => {
//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()
//   const router = useRouter()

//   const login = () =>{
//     if(email === user.email && password === user.password){
//       sessionStorage.setItem("usuario", email);
//       router.push('/')
//     } else {
//       console.log('NOO logueado pa')
//     }
    
//   }

//   return (
  'use client'
  import Link from "next/link";
  import Image from "next/image";
  import logo from "@/assets/logo.png";
  import { useState } from "react";
  import { user } from "@/helpers/usuario";
  import { useRouter } from "next/navigation";
  
  const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
  
    const login = async (e) => {
      e.preventDefault();
  
      // Assuming user authentication happens on the backend
      try {
        const response = await fetch('/api/user/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          // Login successful, redirect or handle accordingly
          sessionStorage.setItem("usuario", email);
          router.push('/');
        } else {
          // Login failed
          console.log('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };
  
  
    return (
    <>
      <div className='h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-bg-custom-color'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <picture>
            <Image
              src={logo}
              alt='Logo'
              height={"150"}
              className='mx-auto animate-spin'
            />
          </picture>
          <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-custom-color-dark'>
            Nice to see you!
          </h2>
        </div>

        <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-4' action='#' method='POST' onSubmit={login}>
            <div>
              <label
                htmlFor='text'
                className='block text-sm font-medium leading-6 text-custom-color-dark'
              >
                E-mail
              </label>
              <div className='mt-2'>
                <input
                  id='user'
                  name='user'
                  type='email'
                  autoComplete='text'
                  placeholder='johndoe@hotmail.com'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  className=' bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-custom-color-dark'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  placeholder='Johndoe123'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  className='bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-custom-color-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Login
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-custom-color-dark'>
            Not a member?{" "}
            <Link
              href='/register'
              className='font-semibold leading-6 underline text-blue-700 hover:text-blue-500'
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
