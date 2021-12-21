import type { NextPage } from "next";
import Logo from "../assets/logo.svg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main className="bg min-h-full p-[3vw] flex flex-col">
      <header className="flex flex-col lg+:flex-row-reverse justify-between">
        <div className="max-w-[50%]">
          <Image width="200" height="200" src={Logo} alt="Dromedar Design logo" />
        </div>
        <h1 className="h-[38vw] w-[94vw] text-[18vw] leading-[18vw] lg:h-[380px] lg:w-[1000px] lg:text-[180px] lg:leading-[180px] from-dd-purple/75 via-dd-red/75 to-dd-purple/75 bg-gradient-to-r font-extrabold text-transparent bg-clip-text">
          Dromedar Design
        </h1>
      </header>
      <p className="mt-[3vw] w-[94vw] lg:w-[1000px] !leading-[1.3] text-3xl sm:text-5xl md:text-6xl font-serif font-semibold text-dd-black">
        Online megoldások <br /> modern cégeknek
      </p>
      <span className="flex-1"></span>
      <footer className="my-[3vw]">
        <a
          className="w-[94vw] lg:w-[1000px] !leading-[1.3] text-2xl sm:text-4xl md:text-5xl font-serif font-semibold text-dd-red"
          href="mailto:info@dromedar.design"
        >
          info@dromedar.design
        </a>
      </footer>
    </main>
  );
};

export default Home;
