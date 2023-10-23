const Home = () => {
  return (
    <>
      <main className='flex h-screen flex-col items-center px-8 pt-20 bg-bg-custom-color shadow-md'>
        <div className='p-4 mt-4 '>
          <h1 className='text-black text-3xl text-center'>
            Resume your contract and more
          </h1>
        </div>
        <form>
          <div className='bg-custom-color-dark text-text-custom-color-white p-4 mt-4'>
            <input className='text-xl w-full' type='file' />
          </div>
          <div className=' flex flex-col items-center p-24'>
            <button className='w-full p-4 bg-custom-color-dark text-text-custom-color-white mt-4 rounded-sm hover:bg-slate-900'>
              SUBMIT
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Home;
