import React, { useRef } from "react";
import CourseImg from "../assets/Imgs/coursesImg.png";
import calendar from "../assets/Imgs/calendar.gif";
import watch from "../assets/Imgs/watch.gif";



const PopularCourses = ({ sectionRef }) => {
  

  const courses = [
    // you can add courses info easily from here

    {
      imgUrl: CourseImg,
      title: "გრაფიკული დიზაინი",
      lecturesNum: 24,
      hours: 32,
      text: "გრაფიკული დიზაინის კურსი მოიცავს  48 საათიან პროგრამას, სადაც სტუდენტები შეძლებენ, თეორიული და პრაქტიკული მასალის ათვისებას საბაზისო დონიდან. ",
    },
    
    {
      imgUrl: CourseImg,
      title: "გრაფიკული დიზაინი",
      lecturesNum: 24,
      hours: 32,
      text: "გრაფიკული დიზაინის კურსი მოიცავს  48 საათიან პროგრამას, სადაც სტუდენტები შეძლებენ, თეორიული და პრაქტიკული მასალის ათვისებას საბაზისო დონიდან. ",
    },
    
    {
      imgUrl: CourseImg,
      title: "გრაფიკული დიზაინი",
      lecturesNum: 24,
      hours: 32,
      text: "გრაფიკული დიზაინის კურსი მოიცავს  48 საათიან პროგრამას, სადაც სტუდენტები შეძლებენ, თეორიული და პრაქტიკული მასალის ათვისებას საბაზისო დონიდან. ",
    },
    
    {
      imgUrl: CourseImg,
      title: "გრაფიკული დიზაინი",
      lecturesNum: 24,
      hours: 32,
      text: "გრაფიკული დიზაინის კურსი მოიცავს  48 საათიან პროგრამას, სადაც სტუდენტები შეძლებენ, თეორიული და პრაქტიკული მასალის ათვისებას საბაზისო დონიდან. ",
    },
    
    {
      imgUrl: CourseImg,
      title: "გრაფიკული დიზაინი",
      lecturesNum: 24,
      hours: 32,
      text: "გრაფიკული დიზაინის კურსი მოიცავს  48 საათიან პროგრამას, სადაც სტუდენტები შეძლებენ, თეორიული და პრაქტიკული მასალის ათვისებას საბაზისო დონიდან. ",
    },
    
    {
      imgUrl: CourseImg,
      title: "გრაფიკული დიზაინი",
      lecturesNum: 24,
      hours: 32,
      text: "გრაფიკული დიზაინის კურსი მოიცავს  48 საათიან პროგრამას, სადაც სტუდენტები შეძლებენ, თეორიული და პრაქტიკული მასალის ათვისებას საბაზისო დონიდან. ",
    },
  ];

  return (
    <div className="flex flex-col items-center " ref={sectionRef} id="section1">
        <h1 className="header-text mt-[200px] mb-[-220px] max-sm:text-4xl max-lg:mt-[-150px] text-center leading-10">
          პოპულარული კურსები
        </h1>
        <div className="mt-[350px] flex flex-col justify-center items-center">
          <div className="flex gap-[6%]  flex-wrap justify-center mb-10">
            {courses.map((course, index) => {
              return (
                <div
                  className="flex flex-col rounded-xl shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]
                  p-4 mb-24 bg-white w-1/4 max-xl:w-[400px]  "
                  key={index}
                >
                  <img src={course.imgUrl} alt="course info" />
                  <div className="flex flex-col bg-white">
                    <h3 className="font-noto-georgian text-[25px]">
                      {course.title}
                    </h3>
                    <div className="flex flex-row my-2 just">
                      <img src={calendar} alt="calendar" className="w-7 " />
                      <span className="mr-10 ml-4 font-noto-georgian">
                        {course.lecturesNum} Lesson
                      </span>
                      <img src={watch} alt="watch" className="w-7" />
                      <span className="mr-10 ml-4 font-noto-georgian">
                        {course.hours} Hours
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-2">
                    გრაფიკული დიზაინის კურსი მოიცავს 48 საათიან პროგრამას, სადაც
                    სტუდენტები შეძლებენ, თეორიული და პრაქტიკული მასალის ათვისებას
                    საბაზისო დონიდან.
                  </p>

                  <button className="btn-primary mt-7 animate-pulse2 active:bg-blue-900">
                    დეტალები
                  </button>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
}

export default PopularCourses;
