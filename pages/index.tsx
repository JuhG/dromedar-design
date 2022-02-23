import type { NextPage } from "next";
import Logo from "../assets/logo.svg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main className="min-h-full py-[2vw] px-[4vw] flex flex-col text-dd-black">
      <header className="flex flex-col xl:flex-row-reverse justify-between">
        <div className="max-w-[50%] xl:w-full xl:flex justify-end items-start">
          <Image width="200" height="200" src={Logo} alt="Dromedar Design logo" />
        </div>
        <h1 className="text-[17vw] leading-[18vw] lg:text-[170px] lg:leading-[170px] font-extrabold">
          Dromedar Design
        </h1>
      </header>
      <p className="mt-[5vw] !leading-[1.3] text-3xl sm:text-5xl md:text-6xl">
        Online megoldások <br /> modern cégeknek
      </p>
      <span className="flex-1"></span>
      <footer className="my-[3vw]">
        <a
          className="!leading-[1.3] text-2xl sm:text-4xl md:text-5xl text-dd-red"
          href="mailto:info@dromedar.design"
        >
          info@dromedar.design
        </a>
      </footer>
    </main>
  );
};

export default Home;
