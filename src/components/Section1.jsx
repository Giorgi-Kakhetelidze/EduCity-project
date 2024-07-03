import React from "react";
import VRLogo from "../assets/Imgs/111111 1.png";

const Section1 = ({ navRef }) => {
  return (
    <div
      className="flex w-[100%] justify-center mt-[250px] max-xl:w-[90%] max-xl:ml-20 max-lg:mx-10"
      ref={navRef}
      id="nav"
    >
      <div className="flex w-[80%] max-2xl:w-[90%] max-xl:w-[100%] gap-10 items-center max-lg:flex-wrap">
        <div className="flex flex-col ">
          <h2
            className="
          text-blue-800 font-noto-georgian 
            text-[40px] font-semibold pb-8 max-xl:text-3xl
            
          "
          >
            სწავლა იწყება აქ- ისწავლე, განვითარდი და{" "}
            <span className="text-[#e3b314]">მიაღწიე</span> ჩვენთან ერთად!
          </h2>
          <p
            className="text-[rgba(128,116,116,1)] leading-[28px] w-[70%] text-[17px]
          max-xl:w-[100%] max-xl:text-[15px]"
          >
            დაეუფლე ციფრულ ტექნოლოგიებს 0-დან, ისარგებლე დაფინანსებული კურსებით
            და რაც მთავარია, ისწავლე ნებისმიერი ადგილიდან. ჩვენთან მიიღებ
            სრულყოფილ განათლებას და დასაქმების შანსს.
          </p>
          <button className="btn-primary mt-14 ">ჩაეწერე კურსზე</button>
        </div>
        <img
          src={VRLogo}
          className="h-[500px] mt-[-50px] ml-[-100px] object-cover 
        max-xl:h-[430px] max-xl:ml-0 max-lg:h-[370px]"
        />
      </div>
    </div>
  );
};

export default Section1;
