import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
