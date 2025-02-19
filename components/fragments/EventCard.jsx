const EventCard = ({item}) =>{
    return(
    <div className="flex flex-col ">
            <div
              className="h-[70%] rounded-md 2xl:rounded-[18.5px] overflow-hidden relative  
             md:h-[80%] 2xl:h-[50vh] border-[5px] border-slate-200 bg-no-repeat bg-cover bg-center"
             style={{ backgroundImage: `url(${item})` }}
             ></div>
            <div className=" h-[22%] rounded-md mt-[4px] flex gap-1 relative md:mt-[6px] 2xl:h-[0px]">
              <div className="flex flex-col text-[5px] rounded-[2px] overflow-hidden w-3 md:w-7 md:rounded-md">
                <div className="bg-gray-500  h-[45%] text-[4px] text-white pt-[1px] md:text-[8px] md:flex md:justify-center md:items-center">
                  Sat
                </div>
                <div className="bg-gray-300  h-[70%] text-[4px]/[4px] pt-[1px] md:text-[8px] md:flex md:justify-center md:items-center md:p-[3px] md:leading-[8px]">
                  27 Mar
                </div>
              </div>
              <div className="flex flex-col gap-[1px] items-start md:gap-[6px]">
                <div className="text-[5px] h-[5px] md:text-[9px]">Name</div>
                <div className="text-[5px] h-[5px] md:text-[9px]">Location</div>
                <div className="text-[5px] h-[5px] text-gray-400 md:text-[9px]">
                  Amount
                </div>
              </div>
            </div>
          </div>
          )
}

export default EventCard;