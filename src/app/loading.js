import React from "react";

export default function loading() {
  return (
    <main className='flex h-screen flex-col items-center justify-center px-8 pt-20 bg-bg-custom-color shadow-md'>
      <span className='loading loading-spinner loading-lg'></span>
    </main>
  );
}
