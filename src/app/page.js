import UploadFile from "./components/UploadFile.jsx";

const Home = () => {
  return (
    <>
      <main className='flex h-screen flex-col items-center px-8 pt-20 bg-bg-custom-color shadow-md'>
        <div className='p-4 mt-4 '>
          <h1 className='text-black text-3xl text-center'>
            Resume your contract and more
          </h1>
        </div>
        <UploadFile></UploadFile>
      </main>
    </>
  );
};

export default Home;
