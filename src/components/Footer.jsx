import React from "react";
import background from "../assets/Imgs/background.png";
import navIcon1 from "../assets/Imgs/nav-icon1.svg";
import navIcon2 from "../assets/Imgs/nav-icon2.svg";
import navIcon3 from "../assets/Imgs/nav-icon3.svg";
import navIcon4 from "../assets/Imgs/youtube.svg";

function Footer() {
  return (
    <footer className="relative bg-white h-[800px] flex w-full  mt-[-100px] justify-center h-[900px]">
      <div className="flex mt-[150px] w-3/4  max-xl:flex-wrap max-xl:h-[300px]
      z-10 justify-center ">
        <h1 className="header-text text-4xl w-[80%] max-xl:w-[90%] text-center leading-[50px]">
          ჯერ არ გადაგიწყვეტია, რომელი კურსი?
        </h1>
        <button className="btn-primary w-[300px]">გაიარე კონსულტაცია</button>
      </div>

      <img
        src={background}
        className="absolute bottom-0 w-full z-[0] h-[400px] max-2xl:h-[70vh] max-lg:top-[60vh]"
      />

      <div className="absolute flex flex-wrap bottom-0 z-30 w-full justify-start max-lg:text-center
      max-lg:left-0 left-40 max-lg:justify-center gap-[14%] max-lg:top-[80vh]">
        <div> 
          <h2 className="font-bold text-3xl">გვერდები</h2>
          <ul className="flex flex-col gap-11 h-[160px] my-10 w-[200px]
          text-xl opacity-60">
            <li>
              <a href="#" className="">
                ჩვენს შესახებ
              </a>
            </li>
            <li>
              <a href="" className="">
                კურსები
              </a>
            </li>
            <li>
              <a href="#" className="">
                ბიზნესისთვის
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-3xl">კონტაქტი</h2>
          <ul className="flex flex-col gap-11 h-[160px] mt-10 w-[200px] text-xl opacity-60">
            <li>
              <a href="#" className="">
                იმეილი
              </a>
            </li>
            <li>
              <a href="#" className="">
                მობილური
              </a>
            </li>
          </ul>
        </div>

        <div className=" ">
          <h2 className="font-bold text-3xl">მოგვწერეთ</h2>
          <form className="whitespace-nowrap">
            <input
              type="email"
              placeholder="ელ.ფოსტა"
              className="p-4 mt-10 rounded-s-xl border-gray-500 border-1 border-opacity-20"
            />
            <button
              type="submit"
              className="bg-[#070779] text-white px-14  rounded-e-lg h-[58px] btn ml-[-10px]"
            >
              გაგზავნა
            </button>
            
          </form>
          <div className="wrapper w-full inline-block flex gap-2 mt-5">
              <a href="#">
                <div className="icon">
                  <img src={navIcon1} alt="Facebook" />
                </div>
                <span className="text-[#187fda]">Facebook</span>
              </a>
              <a href="#">
                <div className="icon">
                  <img src={navIcon2} alt="Instagram" />
                </div>
                <span className="text-[#cd3449]">Instagram</span>
              </a>
              <a href="#">
                <div className="icon">
                  <img src={navIcon3} alt="Linkedin" />
                </div>
                <span className="text-[#0858a2]">Linkedin</span>
              </a>
              <a href="#">
                <div className="icon">
                  <img src={navIcon4} alt="Youtube" />
                </div>
                <span className="text-[#cd3449]">Youtube</span>
              </a>
            </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
