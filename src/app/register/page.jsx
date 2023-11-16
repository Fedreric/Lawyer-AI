"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup
    .string()
    .min(2, "Name must have at least two letters")
    .required("name is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .matches(/^.+@.+\..+$/, "Email must have '@' and '.com' or similar")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required")
});

const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    });
    if (res.status === 201) {
      toast.success("successfully registered, please login", {
        position: "top-right",
        duration: 3000
      });
      router.push("/login");
    }
  });

  return (
    <div className='h-screen flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-bg-custom-color'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <picture className='lg:hidden'>
          <Image
            src={logo}
            alt='Logo'
            height={"150"}
            className='mx-auto animate-spin'
          />
        </picture>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-custom-color-dark'>
          Create your account!
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-4 md:space-y-2' onSubmit={onSubmit}>
          <div>
            <label
              htmlFor='text'
              className='block text-sm font-medium leading-6 text-custom-color-dark'
            >
              Name
            </label>
            <div className='mt-2'>
              <input
                id='user'
                name='name'
                type='text'
                autoComplete='text'
                placeholder='John Doe'
                className='bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6'
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required"
                  }
                })}
              />
            </div>
            {errors.name && (
              <span className='text-red-700 text-sm'>
                {errors.name.message}
              </span>
            )}
          </div>

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
                className='bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6'
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
            <div className='flex items-center justify-between'>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium leading-6 text-custom-color-dark'
              >
                Confirm Password
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                autoComplete='current-password'
                placeholder='Johndoe123'
                className='bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6'
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required"
                  }
                })}
              />
            </div>
            {errors.confirmPassword && (
              <span className='text-red-700 text-sm'>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-custom-color-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              REGISTER
            </button>
          </div>
        </form>

        <p className='mt-1 text-center text-sm text-custom-color-dark'>
          Did you have an account?{" "}
          <Link
            href='/login'
            className='font-semibold leading-6 underline text-blue-700 hover:text-blue-500'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
