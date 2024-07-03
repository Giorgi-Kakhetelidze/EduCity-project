import React, { useState, useRef } from "react";
import educityLogo from "../assets/Imgs/educity-logo.png";
import navIcon1 from "../assets/Imgs/nav-icon1.svg";
import navIcon2 from "../assets/Imgs/nav-icon2.svg";
import navIcon3 from "../assets/Imgs/nav-icon3.svg";
import navIcon4 from "../assets/Imgs/youtube.svg";

const Nav = ({ handleScroll}) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <nav
      className="flex  justify-evenly  items-center 
      font-noto-georgian p-10 fixed left-0 right-0 top-0 bg-slate-200
      z-50 max-xl:justify-between"
      
    >
      <div
        className={`off-screen-menu ${isActive ? "active" : ""} `}
        onClick={handleClick}
      >
        <ul className="flex flex-col gap-5 my-10 ml-10 ">
          <li className="whitespace-nowrap">
            <a>ჩვენს შესახებ</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">კურსები</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">ბიზნესისთვის</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">კონტაქტი</a>
          </li>
        </ul>

        <div className="wrapper relative inline-block flex flex-col ml-4 gap-2">
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

      <img
        src={educityLogo}
        alt="educity Logo"
        className="cursor-pointer w-[200px] 
      xl:w-[200px]"
      />
      <ul
        className="w-[50%] flex  gap-[10%] items-center p-[1%] m
      xl:text-xl md:text-lg mx-10 text-center lg:mt-1 max-xl:hidden max-xl:gap-5"
      >
        <li className="whitespace-nowrap">
          <a 
          onClick={(e) => { e.preventDefault(); handleScroll('nav'); }}>
            ჩვენს შესახებ
          </a>
        </li>
        <li className="whitespace-nowrap">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("section1");
            }}
          >
            კურსები
          </a>
        </li>
        <li className="whitespace-nowrap">
          <a href="#">ბიზნესისთვის</a>
        </li>
        <li className="whitespace-nowrap">
          <a href="#" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>
            კონტაქტი
          </a>
        </li>
      </ul>
      <div className="wrapper2 relative inline-block flex  max-xl:hidden lg:mr-[100px] xl:mr-0 ">
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

      <div
        className={`ham-menu h-[50px] w-[50px]  relative cursor-pointer ${
          isActive ? "active" : ""
        }
      xl:hidden`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
