import React from "react";
import fram1 from "../assets/Imgs/Frame 1.png"


function Section2() {
  return (
    <div className="flex flex-col mt-[220px] mb-[220px] w-[100%] bg-white">
      <div className="flex flex-col w-[90%] items-center text-center">
        <h3 className="header-text mb-[50px] leading-[70px] max-sm:text-3xl ml-4">პარტნიორები კომპანიები</h3>
        <p className="text-[rgba(128,116,116,1)] text-[17px] w-2/5 max-xl:w-3/5 max-sm:w-4/5">
          ჩვენ ვთანამშრომლობთ, როგორც კერძო სააგენტოებთან და კომპანიებთან,
          ამასთანავე სახელმწიფო უწყებებთან, როგორიცაა- თბილისის მერია და
          განათლების სამინისტრო
        </p>
        <img src={fram1} alt="" className="mt-10 w-1/2 max-lg:h-[100px] 
        max-lg:w-[200px] object-cover max-xl:w-3/5 "/>
      </div>
    </div>
  );
}

export default Section2;
