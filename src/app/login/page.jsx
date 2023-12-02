"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn, useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import CustomInput from "@/app/components/CustomInput";
import { useEffect } from "react";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Put a valid email@example.com")
    .required("The email is required")
    .matches(/^.+@.+\..+$/, "Email must be valid")
    .required("Email is required"),
  password: yup
    .string()
    .required("The password is required")
    .min(7, "Password must be at least 7 characters")
    .required("Password is required")
});

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) router.push("/");
  }, [router,session]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    register
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = handleSubmit(async (data) => {
    const toastId = toast.loading("Log in...", { duration: 60000 });
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    });

    if (res.error) {
      toast.error(res.error, {
        id: toastId,
        duration: 3000
      });
    } else {
      toast.success("Welcome to LawyerAI", {
        id: toastId,
        duration: 1500
      });
      router.push("/");
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
          <form className='space-y-4' onSubmit={onSubmit}>
            <div>
              <CustomInput
                id='email'
                name='email'
                type='email'
                placeholder='E-mail'
                control={control}
                error={errors.email}
                register={register}
              />
            </div>

            <div>
              <CustomInput
                id='password'
                name='password'
                type='password'
                placeholder='Password'
                control={control}
                error={errors.password}
                register={register}
              />
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
