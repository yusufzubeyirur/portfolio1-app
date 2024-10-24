import React from "react";
import Nav from "./component/Nav";

const App = () => {
  return (
    <div className="h-screen overflow-auto">
      <div className="h-screen w-full overflow-hidden bg-black px-20 py-10 relative flex flex-col">
        <Nav />
        <div className="flex justify-between items-center flex-grow z-20">
          <div className="text-white">
            <p className="text-[28px] font-medium">Hi , I’m Namık,</p>
            <h1 className="text-[96px] leading-[120px] text-[#F8F7F9] font-bold uppercase">
              I’M A <br />
              DEVELOPER
            </h1>
            <ul className="text-2xl text-[#F8F7F980]">
              <li>Interactive Elements:</li>
              <li>Prototyping for Web:</li>
              <li>Responsive Design:</li>
              <li>Collaborative Design Workflows:</li>
            </ul>
            <div className="flex flex-col justify-center items-start w-fit">
              <a
                href="#"
                className="text-[26px] text-white underline font-extra bold"
              >
                View My Projects
              </a>
              <hr className="w-full border-[#A6BBCC] border-2" />
            </div>
          </div>
          <img src="/homepage picture.png" alt="adam" />
        </div>
        <img
          src="/smoke.png"
          alt="arkaplan"
          className="absolute pointer-events-none"
        />
      </div>

      {/*SAYFA 2*/}
      <div className="bg-[#121212] h-screen w-full flex flex-col justify-center items-center gap-35">
        <div className="flex flex-col justify-center items-center gap-7">
          <img src="/profil picture.png" alt="kafa" className="rounded-full" />
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-[47px] text-[#F7F7F5] font-bold">
              Namık Korona
            </h2>
            <p className="text-[23px] text-[#F7F7F5]"> Designer | Developer</p>
          </div>
          <a href="#">
            <button className="bg-[#FFB829] underline text-2xl rounded-[15px] text-[#121212] text-[22px] py-2 px-14 hover:bg-[#d4b55fce]">
              Follow
            </button>
          </a>
        </div>

        <div className="flex gap-[110px] mt-[180px]">
          <div className="flex gap-6">
            <img src="telegram.png" alt="telegram" />
            <div className="flex flex-col">
              <span className="text-[21px] text-[#F0F8FD]">Telegram</span>
              <span className="text-[#FFB829]">
                <a href="#">@ ↗</a>
              </span>
            </div>
          </div>

          <div className="flex gap-6">
            <img src="/mail.png" alt="mail" />
            <div className="flex flex-col">
              <span className="text-[#F0F8FD] text-[21px]">Mail</span>
              <span className="text-[#FFB829]">
                <a href="#">@gmail.com</a>
              </span>
            </div>
          </div>

          <div className="flex gap-6">
            <img src="/github.png" alt="github" />
            <div className="flex flex-col">
              <span className="text-[#F0F8FD] text-[21px]">GitHub</span>
              <span className="text-[#FFB829]">
                <a href="#">@ ↗</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
