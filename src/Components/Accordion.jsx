import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const data = [
  {
    title: "ABOUT IDAHVIS SERVICES",
    Sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "IT Solutions",
    Sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Mobile Technologies",
    Sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Project Management",
    Sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  }
];

function Accordion() {

  const [accordion, setActiveAccordion] = useState(0);

  function toggleAccordion(index) {
      if(index === accordion){
        setActiveAccordion(-1);
        return
      }
      setActiveAccordion(index);
  }

  
  return (
    <>
      <div className="sup bg-white rounded-3xl my-10 lg:mx-16 md:mx-6 sm:mx-2">
        {data.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)} className="border-b border-black/30 py-1 duration-300 ease-in-out">
            <div className="flex transition-shadow duration-300 ease-in-out cursor-pointer justify-between font-boldbold text-black px-6 mb-5 pt-5">
              <div className="heading duration-300 ease-in-out">
                <h3 className={accordion === index ? "active text-yellow-600 font-bold lg:text-2xl md:text-xl sm:text-lg duration-300 ease-in-out" : "duration-300 ease-in-out font-bold lg:text-2xl md:text-xl sm:text-lg"}>
                  {item.title}
                </h3>
              </div>
              <div>
                {accordion === index ? (
                  <>
                    <span className="icon font-extrabold lg:text-2xl md:text-xl sm:text-lg duration-300 ease-in-out text-yellow-600">
                      <IoIosArrowDown />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="icon font-extrabold lg:text-2xl md:text-xl sm:text-lg duration-300 ease-in-out">
                      <IoIosArrowUp />
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="lg:leading-8 md:leading-8 sm:leading-7 lg:text-lg md:text-lg sm:text-sm duration-200 ease-in-out font-thin px-10">
              <p className={accordion === index ? "active block py-3" : "inactive hidden py-6"}>{item.Sub}</p>
              <p className={accordion === index ? "active block py-3" : "inactive hidden py-6"}>{item.Sub1}</p>
              <p className={accordion === index ? "active block py-3" : "inactive hidden py-6"}>{item.Sub2}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordion;
