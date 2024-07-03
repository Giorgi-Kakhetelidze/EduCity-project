import React from "react";
import Rectangle from "../assets/Imgs/Rectangle3.png";
import vako from "../assets/Imgs/vako.png";
import levan from "../assets/Imgs/levan.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const data = [
    {
      course: "Front-End დეველოპმენტის კურსი",
      reviewText:
        "თანამედროვე, ენერგიული, პროფესიონალების ჯგუფი, ადგილი სადაც შეძლეს და პირველივე შეხვედრიდან დაგვარწმუნეს საკუთარ შესაძლებლობებში. მიღებული ცოდნით შემიძლია ძალები მოვსინჯო junior front-end დეველოპერად.",
      img: vako,
      name: "ვაკო ქობულაშვილი",
      profession:
        "Full-Stack დეველოპმენტის კურსდამთავრებული | Educity-ს ჯუნიორ დეველოპერი",
    },
    {
      course: "Graphic Design კურსი",
      reviewText:
        "თანამედროვე, ენერგიული, პროფესიონალების ჯგუფი, ადგილი სადაც შეძლეს და პირველივე შეხვედრიდან დაგვარწმუნეს საკუთარ შესაძლებლობებში. მიღებული ცოდნით შემიძლია ძალები მოვსინჯო junior front-end დეველოპერად.",
      img: levan,
      name: "ლევან კილასონია",
      profession:
        "Full-Stack დეველოპმენტის კურსდამთავრებული | Educity-ს ჯუნიორ დეველოპერი",
    },
    {
      course: "Front-End დეველოპმენტის კურსი",
      reviewText:
        "თანამედროვე, ენერგიული, პროფესიონალების ჯგუფი, ადგილი სადაც შეძლეს და პირველივე შეხვედრიდან დაგვარწმუნეს საკუთარ შესაძლებლობებში. მიღებული ცოდნით შემიძლია ძალები მოვსინჯო junior front-end დეველოპერად.",
      img: vako,
      name: "ვაკო ქობულაშვილი",
      profession:
        "Full-Stack დეველოპმენტის კურსდამთავრებული | Educity-ს ჯუნიორ დეველოპერი",
    },
    {
      course: "Graphic Design კურსი",
      reviewText:
        "თანამედროვე, ენერგიული, პროფესიონალების ჯგუფი, ადგილი სადაც შეძლეს და პირველივე შეხვედრიდან დაგვარწმუნეს საკუთარ შესაძლებლობებში. მიღებული ცოდნით შემიძლია ძალები მოვსინჯო junior front-end დეველოპერად.",
      img: levan,
      name: "ლევან კილასონია",
      profession:
        "Full-Stack დეველოპმენტის კურსდამთავრებული | Educity-ს ჯუნიორ დეველოპერი",
    },
    {
      course: "Front-End დეველოპმენტის კურსი",
      reviewText:
        "თანამედროვე, ენერგიული, პროფესიონალების ჯგუფი, ადგილი სადაც შეძლეს და პირველივე შეხვედრიდან დაგვარწმუნეს საკუთარ შესაძლებლობებში. მიღებული ცოდნით შემიძლია ძალები მოვსინჯო junior front-end დეველოპერად.",
      img: vako,
      name: "ვაკო ქობულაშვილი",
      profession:
        "Full-Stack დეველოპმენტის კურსდამთავრებული | Educity-ს ჯუნიორ დეველოპერი",
    },
  ];

  return (
    <div className="relative flex flex-col items-center w-full max-2xl:hidden">
      <img src={Rectangle} className="w-full h-[900px]" alt="Background" />
      <h1 className="header-text absolute mt-[100px]">
        რას ამბობენ კურსდამთავრებულები?
      </h1>
      <div className="absolute mt-[260px] w-full px-4 ">
        <Slider {...settings} className="w-full">
          {data.map((d, index) => (
            <div key={index} className="rounded-3xl border-4 h-[46 4px]">
              <div>
                <h1 className="font-noto-georgian header-text text-white text-3xl p-10">
                  {d.course}
                </h1>
                <p className="font-noto-georgian px-10 pb-10 text-white opacity-80">
                  {d.reviewText}
                </p>
              </div>
              <div className="flex items-center p-3">
                <img
                  src={d.img}
                  alt={`${d.name}'s profile`}
                  className="mr-3"
                />
                <p className="font-noto-georgian w-3/4 text-white opacity-70">
                  {d.name} <br />
                  {d.profession}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;
