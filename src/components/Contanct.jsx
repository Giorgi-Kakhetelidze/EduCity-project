import React from "react";
import interview from "../assets/Imgs/interview.png";
import gmail from "../assets/Imgs/gmail.gif"
import phone from "../assets/Imgs/phone.gif"
import clock from "../assets/Imgs/clock.gif"

const Contanct = ({ contactRef }) => {
  return (
    <div className="bg-white flex justify-center items-center 
    mt-[100px] w-[100%] py-[150px] max-lg:flex-wrap max-lg:text-center "
    ref={contactRef} id="contact">
      <div className="flex w-[90%] justify-center items-center max-xl:flex-col max-xl:w-[80%] max-sm:w-[95%]">
        <img src={interview} alt="interview" className="object-cover w-[50%] max-lg:w-[80%]"/>
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="header-text text-4xl leading-[60px] max-lg:text-3xl 
          max-xl:w-[100%] ">
            გაიარე კონსულტაცია და გააკეთე სწორი არჩევანი
          </h1>

          <p className="opacity-50 font-noto-georgian mt-10 w-[70%] max-sm:w-[90%]">
            მოგვწერე ან დაგვირეკე, ჩვენი სერვის მენეჯერი მოგაწვდის სრულყოფილ
            ინფორმაციას კურსების შესახებ და დაგეხმარება სწორი გადაწყვეტილების
            მიღებაში.
          </p>

          <div className="flex justify-between mt-16 flex-wrap gap-10 max-lg:justify-center">
            <div className="flex gap-3 cursor-pointer ">
              <img src={gmail} alt="gmail"  />
              <div className="flex flex-col">
                <span className="font-noto-georgian font-bold">ელ.ფოსტა</span>
                <p className="">info@educity.ge</p>
              </div>
            </div>
            <div className="flex gap-3 cursor-pointer ">
              <img src={phone} alt="phone" />
              
              <div>
                <p className="font-noto-georgian font-bold">ტელეფონი</p>
                <p className="font-noto-georgian">599 200 944</p>
              </div>
            </div>

            <div className="flex gap-3 cursor-pointer ">
              <img src={clock} alt="clock" className="w-[50px]"/>
              
              <div>
                <p className="font-noto-georgian font-bold ">სამუშაო საათები</p>
                <p className="font-noto-georgian">ორშ-პარ(10:00-19:00)</p>
              </div>
            </div>
          </div>

          <button className="btn-primary mt-20 animate-pulse2 ml-5 w-[300px]">ჩაეწერე კურსზე</button>
        </div>
      </div>
    </div>
  );
}

export default Contanct;
