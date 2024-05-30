"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const PDF_FILE_URL =
  "https://portfolio-daniilomendes-projects.vercel.app/danilo_mendes_miranda_curriculo.pdf";

const HeroSection = () => {
  const downloadFileAtUrl = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <section id="hero" className="pb-28 pt-16">
      <div className="flex flex-col justify-center items-center">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-600">
              Olá, eu sou o Danilo Mendes{" "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Desenvolvedor Full Stack",
                1000,
                "Desenvolvedor ReactJs",
                1000,
                "Desenvolvedor NodeJs",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] textl-lg lg:text-xl">
            Graduando em Bacharel em Ciência da Computação pelo IFGoiano,
          </p>
          <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
            desenvolvedor FullStack Web com ReactJs e NodeJs.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-800 to-slate-900 hover:bg-slate-200 text-white">
              <a
                href="https://web.whatsapp.com/send?phone=5564993293998"
                target="_blank"
              >
                Me contate
              </a>
            </button>

            <button
              onClick={() => {
                downloadFileAtUrl(PDF_FILE_URL);
              }}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-blue-800 to-slate-900 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        {/* <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/hero-image.png"
              alt="Minha foto de perfil"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
