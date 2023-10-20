// Asumiendo que tienes un componente Navbar
const Home = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24 bg-bg-custom-color shadow-md">
        <div className="   p-4 mt-4 ">
          <h1 className="  text-black text-5xl text-center ">Resume your contract and more</h1>
        </div>
        <div className="bg-gray-800 p-4 mt-4">
          <input className="text-2xl w-full" type="file" />
        </div>
      </main>
    </>
  );
};

export default Home;