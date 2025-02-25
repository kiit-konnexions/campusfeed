import Image from 'next/image'

const EventCard = ({event}) => {
const eventDate = event.eventDate.split("-");
  return (
    <div className="flex flex-col w-full max-w-[300px]">
      <Image
        src={event.eventPoster}
        alt="event"
        width={250}
        height={250}
        className="w-full aspect-square border-[3px] sm:border-[4px] md:border-[5px] border-[#D3DEE3] rounded-2xl object-contain"
      />
      <div className="flex mt-3 gap-2 w-full">
        <div className="flex flex-col items-center text-center rounded-md min-w-[50px]">
          <p className="text-[10px] sm:text-xs bg-[#8690B1] px-3 py-1 rounded-t-md text-[#FCFDFD] w-full">
            {eventDate[0]}
          </p>
          <p className="text-base sm:text-lg font-medium px-3 bg-[#E7EDF0] w-full">
          {eventDate[1]}
          </p>
          <p className="text-[10px] sm:text-xs px-3 rounded-b-md bg-[#E7EDF0] w-full -mt-1 pb-1">
          {eventDate[2]}
          </p>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <p className="font-medium text-sm sm:text-base line-clamp-1 max-sm:w-[85%]">
            {event.eventName}
          </p>
          <p className="font-medium text-xs sm:text-sm text-gray-700">
            {event.eventLocation}
          </p>
          <p className="text-xs sm:text-sm text-black/60">Rs.{event.eventPrize}</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard
