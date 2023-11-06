"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { useForm } from "react-hook-form"
import { errorToJSON } from 'next/dist/server/render';
import useSWR from 'swr'

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch('/api/user/register/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const resJSON = await res.json()
    console.log(resJSON)
  })

  console.log(errors);

  return (
    <div className="h-screen flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-bg-custom-color">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <picture className='lg:hidden'>
             <Image src={logo} alt="Logo" height={'150'} className="mx-auto animate-spin" />
           </picture>
           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-custom-color-dark">
             Create your account!
           </h2>

      <form className="space-y-4 md:space-y-2"  onSubmit={onSubmit}>
        
        <label htmlFor='name' className='block text-sm font-medium leading-6 text-custom-color-dark'>Name:</label>
        <input placeholder="John Doe" type="text"
        { ... register("name", {
          required: true, } 
        )}
        />

        <label htmlFor='email' className='block text-sm font-medium leading-6 text-custom-color-dark'>Email:</label>
        <input placeholder="email@example.com" type="email"
        { ... register("email", {
          required: true,
        })} />
         

        <label htmlFor='password' className='block text-sm font-medium leading-6 text-custom-color-dark'>Password:</label>
        <input placeholder="*******" type="password"
        {... register("password", {
          required: true,
        })} />
         

        <label htmlFor='confirmPassword' className='block text-sm font-medium leading-6 text-custom-color-dark'>Confirm-Password:</label>
        <input placeholder="*******" type="confirmPassword"
        { ... register("confirmPassword", {
          required: true,
        })} />
         

        <button className="flex w-full justify-center rounded-md bg-custom-color-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Register</button>
      </form>
      </div>
    </div>
  )
}
export default RegisterPage


// const Register = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password === confirmPassword) {
//       // Passwords match, can submit the form
//       // Add form submission logic here
//     } else {
//       setError('Passwords do not match');
//     }
//   };

//   return (
//       <div className="h-screen flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-bg-custom-color">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <picture className='lg:hidden'>
//             <Image src={logo} alt="Logo" height={'150'} className="mx-auto animate-spin" />
//           </picture>
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-custom-color-dark">
//             Create your account!
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-4 md:space-y-2" onSubmit={handleSubmit}
//           action='/api/user/register/'
//           methhod='post' 
//           >
//             <div>
//               <label
//                 htmlFor="text"
//                 className="block text-sm font-medium leading-6 text-custom-color-dark"
//               >
//                 Name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="user"
//                   name="user"
//                   type="text"
//                   autoComplete="text"
//                   placeholder="John Doe"
//                   required
//                   className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="text"
//                 className="block text-sm font-medium leading-6 text-custom-color-dark"
//               >
//                 E-mail
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="text"
//                   placeholder="johndoe@hotmail.com"
//                   required
//                   className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-custom-color-dark"
//                 >
//                   Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   placeholder="Johndoe123"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="confirmPassword"
//                   className="block text-sm font-medium leading-6 text-custom-color-dark"
//                 >
//                   Confirm Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   autoComplete="current-password"
//                   placeholder="Johndoe123"
//                   required
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             {error && <p className="text-red-500">{error}</p>}

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-custom-color-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 REGISTER
//               </button>
//             </div>
//           </form>

//           <p className="mt-1 text-center text-sm text-custom-color-dark">
//             Did you have an account?{' '}
//             <Link
//               href="/login"
//               className="font-semibold leading-6 underline text-blue-700 hover:text-blue-500"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//   );
// };

// export default Register;
