"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#775424] to-[#654417]">
              Olá! Eu sou a{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Beatriz", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#343431] text-base sm:text-lg mb-6 lg:text-xl">
            Descrição descrição descrição
          </p>
          <div>
            <button className="px-6 py-3 w-full rounded-full mr-4 bg-gradient-to-br from-[#f0e1af] via-[#b28c57] to-[#775424] hover:bg-[#654417]">
              Contrate-me
            </button>
            <button className="px-1 py-1 w:full sm:w-fit rounded-full bg-gradient-to-br from-[#f0e1af] via-[#b28c57] to-[#775424] hover:bg-[#cfb17c] mt-4">
              <span className="block bg-[#78a306] hover:bg-slate-[#a8d532] rounded-full px-5 py-2">
                Baixar CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src={"/images/perfil.png"}
              alt="image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
