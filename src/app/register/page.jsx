"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      // Passwords match, can submit the form
      // Add form submission logic here
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <>
      <div className="h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-bg-custom-color">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <picture>
            <Image src={logo} alt="Logo" height={'150'} className="mx-auto animate-spin" />
          </picture>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-custom-color-dark">
            Create your account!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-custom-color-dark"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="user"
                  name="user"
                  type="text"
                  autoComplete="text"
                  placeholder="John"
                  required
                  className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-custom-color-dark"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="user"
                  name="user"
                  type="text"
                  autoComplete="text"
                  placeholder="Doe"
                  required
                  className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-custom-color-dark"
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
                  className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-custom-color-dark"
              >
                Birthday
              </label>
              <div className="mt-2">
                <input
                  id="user"
                  name="user"
                  type="date"
                  autoComplete="text"
                  placeholder="dd-mm-aaaa"
                  required
                  className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-custom-color-dark"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-custom-color-dark"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Johndoe123"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-custom-color-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                REGISTER
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-custom-color-dark">
            Did you have an account?{' '}
            <Link
              href="/login"
              className="font-semibold leading-6 underline text-blue-700 hover:text-blue-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
