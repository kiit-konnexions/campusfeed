import Image from "next/image";
import EventCard from "./EventCard";

const EventImagesArray = [
  "/EventDemo.svg",
  "/EventDemo2.svg",
  "/EventDemo3.svg",
];

const SearchBarSection = () => {
  return (
    <>
      <div className="bg-white w-[90%] mx-auto mt-24 h-[40%] border-[#f0f0f0e6] border-[10px] rounded-[10px] absolute bottom-[-7%] left-1/2 -translate-x-1/2 flex flex-col p-3 md:h-[60%] 2xl:px-20 2xl:h-[65%]">
        <div className="flex place-content-around justify-between  items-center md:px-4 md:mt-2 2xl:mt-9 ">
          <h2 className="text-sm font-semibold md:text-base 2xl:text-4xl">
            Events
          </h2>
          <div className="flex gap-[4px] md:gap-[10px] 2xl:gap-5">
            <button className="text-[9px] bg-[#6DA27D] p-[5px]  md:text-[12px] rounded-[5px] text-white 2xl:text-base 2xl:p-[8px] 2xl:px-[10px]">
              Filter
            </button>
            <button className="text-[9px] bg-[#6DA27D] p-[5px]  md:text-[12px] rounded-[5px] text-white 2xl:text-base 2xl:p-[8px] 2xl:px-[10px]">
              Sort By
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-24 text-[9px] md:text-[12px] bg-slate-300 rounded-[5px] text-white p-[5px] md:w-48 md:px-[8px] 2xl:text-lg 2xl:w-72"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3 h-[70%] md:mt-5">
          {EventImagesArray.map((item,index) => (
            <EventCard item={item} key={index}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBarSection;
