import Link from 'next/link';
import Navbar from '../components/Navbar.jsx'; // Asumiendo que tienes un componente Navbar

const Resume = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24 bg-orange shadow-md">
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

export default Resume;
