"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import CustomInput from "../components/CustomInput.jsx";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

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
    .matches(/[A-Z]/, "Password must have at least one uppercase letter")
    .matches(/\d/, "Password must have at least one number")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required")
});
const Register = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) router.push("/");
  }, [router,session]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = handleSubmit(async (data) => {
    const toastId = toast.loading("Create account...", { duration: 60000 });
    const res = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    });
    if (res.status === 201) {
      toast.success("successfully registered, please login", {
        id: toastId,
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
          <CustomInput
            id='user'
            name='name'
            type='text'
            placeholder='Name'
            register={register}
            error={errors.name}
          />
          <CustomInput
            id='email'
            name='email'
            type='email'
            placeholder='E-mail'
            register={register}
            error={errors.email}
          />
          <CustomInput
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            register={register}
            error={errors.password}
          />
          <CustomInput
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            register={register}
            error={errors.confirmPassword}
          />

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
