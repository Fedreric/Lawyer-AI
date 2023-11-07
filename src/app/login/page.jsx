"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { set, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    });
    console.log(res);
    if(res.error){
      setError(res.error)
    }else{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Welcome to LawyerAI",
        showConfirmButton: false,
        timer: 1500
      });
      router.push('/')
    }
  });

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
        {
          error &&(
            <p className="bg-red-500 text-lg text-white text-center p-2 mb-2 rounded">{error}</p>
          )
        }
          <form className='space-y-4' onSubmit={onSubmit}>
            <div>
              <label
                htmlFor='text'
                className='block text-sm font-medium leading-6 text-custom-color-dark'
              >
                E-mail
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='text'
                  placeholder='johndoe@hotmail.com'
                  className=' bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6'
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required"
                    }
                  })}
                />
              </div>
              {errors.email && (
                <span className='text-red-700 text-sm'>
                  {errors.email.message}
                </span>
              )}
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
                  className='bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6'
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required"
                    }
                  })}
                />
              </div>
              {errors.password && (
                <span className='text-red-700 text-sm'>
                  {errors.password.message}
                </span>
              )}
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
