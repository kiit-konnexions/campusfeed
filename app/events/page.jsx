"use client";
import EventCard from "@/components/fragments/EventCard";
import NavBar from "@/components/fragments/NavBar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Filter from "@/components/fragments/Filter";
import SortBy from "@/components/fragments/SortBy";

const events = [
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-29-Mar-2025",
    eventPrize: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-29-Mar-2025",
    eventPrize: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-29-Mar-2025",
    eventPrize: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-29-Mar-2025",
    eventPrize: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-29-Mar-2025",
    eventPrize: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-29-Mar-2025",
    eventPrize: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-29-Mar-2025",
    eventPrize: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 400.0,
  },
  {
    eventPoster: "EventDemo1.svg",
    eventName: "KODESPHERE - The Flagship Event",
    eventLocation: "Campus-13",
    eventDate: "Sat-29-Mar-2025",
    eventPrize: 200.0,
  },
  {
    eventPoster: "EventDemo2.svg",
    eventName: "SPOTLIGHT - The Flagship Event",
    eventLocation: "Campus-14",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 300.0,
  },
  {
    eventPoster: "EventDemo3.svg",
    eventName: "STEP IT UP - The Flagship Event",
    eventLocation: "Campus-15",
    eventDate: "Sat-25-Mar-2025",
    eventPrize: 400.0,
  },
];

export default function Home() {
  const [search, setSearch] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState(0);
  const sortOptions = ["Prize: High to Low", "Newest First"];
  const filterOptions = ["Prize", "Location", "Date"];
  const [selectedFilter, setSelectedFilter] = useState(-1);
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [dateRange, setDateRange] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  const parseDateString = (dateStr) => {
    const parts = dateStr.split("-");
    const day = parseInt(parts[1]);
    const month = parts[2];

    const monthMap = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    const date = new Date(new Date().getFullYear(), monthMap[month], day);
    return date.getTime();
  };

  useEffect(() => {
    let result = [...events];

    // Apply search filter if searchQuery exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (event) =>
          event.eventName.toLowerCase().includes(query) ||
          event.eventLocation.toLowerCase().includes(query),
      );
    }

    // Apply price range filter
    if (selectedFilter === 0) {
      result = result.filter(
        (event) =>
          event.eventPrize >= priceRange[0] &&
          event.eventPrize <= priceRange[1],
      );
    }

    // Apply location filter if locations are selected
    if (selectedFilter === 1) {
      if (selectedLocations !== -1) {
        result = result.filter(
          (event) => event.eventLocation === selectedLocations,
        );
      }
    }

    // Apply date filter if date range is set
    if (selectedFilter === 2 && dateRange?.start && dateRange?.end) {
      console.log("Date Sorting");

      const startDate = new Date(
        dateRange.start.year,
        dateRange.start.month - 1,
        dateRange.start.day,
      );
      const endDate = new Date(
        dateRange.end.year,
        dateRange.end.month - 1,
        dateRange.end.day,
      );

      result = result.filter((event) => {
        let eventDate = new Date(event.eventDate);
        if (isNaN(eventDate.getTime())) {
          console.warn("Invalid eventDate:", event.eventDate);
          return false;
        }

        console.log("Event date", eventDate);

        const startYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();
        const startDay = startDate.getDate();
        const endYear = endDate.getFullYear();
        const endMonth = endDate.getMonth();
        const endDay = endDate.getDate();

        let eventYear = eventDate.getFullYear();
        let eventMonth = eventDate.getMonth();
        let eventDay = eventDate.getDate();

        if (eventYear < startYear || eventYear > endYear) {
          console.log("Reject due year", event.eventName);
          return false;
        }

        if (eventMonth < startMonth || eventMonth > endMonth) {
          console.log("Reject due mont", event.eventName);
          return false;
        }

        if (eventDay < startDay || eventDay > endDay) {
          console.log("Reject due date", event.eventName);
          return false;
        }

        return true;
      });
    }

    // Apply sorting
    if (sortBy === 0) {
      // Prize: High to Low
      result.sort((a, b) => b.eventPrize - a.eventPrize);
    } else if (sortBy === 1) {
      // Newest First (based on date)
      result.sort((a, b) => {
        const dateA = parseDateString(a.eventDate);
        const dateB = parseDateString(b.eventDate);
        return dateB - dateA;
      });
    }

    setFilteredEvents(result);
  }, [
    searchQuery,
    selectedFilter,
    priceRange,
    selectedLocations,
    dateRange,
    sortBy,
  ]);

  return (
    <>
      <NavBar />
      <section className="relative mx-auto max-w-6xl px-4 py-20 md:w-[80%] lg:w-[75%] lg:px-0">
        <header className="flex items-center justify-between">
          <p className="text-[40px]">Events</p>
          <div className="z-10 hidden items-center gap-2 text-sm md:flex">
            {/* Filter Dropdown */}
            <Filter
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              setSortOpen={setSortOpen}
              filterOptions={filterOptions}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              dateRange={dateRange}
              setDateRange={setDateRange}
              selectedLocations={selectedLocations}
              setSelectedLocations={setSelectedLocations}
            />

            {/* Sort By Dropdown */}
            <SortBy
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              sortOpen={sortOpen}
              setSortOpen={setSortOpen}
              sortOptions={sortOptions}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            {/* Search Bar */}
            <div className="flex min-w-[250px] items-center gap-1 rounded-md bg-[#D3DEE3] px-3 py-2">
              <input
                placeholder="Search for something.."
                type="text"
                className="w-[95%] rounded-md bg-transparent pr-3 placeholder:text-sm placeholder:font-light placeholder:text-black/45 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Image
                src={"/SearchIcon.svg"}
                height={20}
                width={20}
                alt="search"
              />
            </div>
          </div>

          {/* Mobile Search Icon */}
          <AnimatePresence mode="wait">
            {!search ? (
              <motion.div
                initial={{ opacity: 0, width: "60%" }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: "60%" }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="rounded-full bg-[#D3DEE3] p-2 md:hidden"
              >
                <Image
                  src={"/SearchIcon.svg"}
                  height={20}
                  width={20}
                  alt="search"
                  onClick={() => setSearch(!search)}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "60%" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-between overflow-hidden rounded-2xl border-2 bg-[#D3DEE3] pr-2 md:hidden"
              >
                <motion.input
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  placeholder="Search "
                  type="text"
                  className="min-w-[85%] bg-transparent py-1 pl-3 placeholder:text-sm placeholder:font-light placeholder:text-black/45 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setSearch(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        {/* Event Cards */}
        <div className="relative z-0 mt-3 grid grid-cols-2 gap-x-2 gap-y-10 px-0 md:grid-cols-3 md:gap-x-4 lg:grid-cols-4 2xl:mt-6">
          <div className="pointer-events-none fixed -left-[4%] top-[40%] -z-10 h-[40%] w-[20%] rounded-full bg-[#b9eec966] blur-2xl"></div>
          <div className="pointer-events-none fixed -right-[5%] top-[20%] -z-10 h-[40%] w-[20%] rounded-full bg-[#b9eec966] blur-2xl"></div>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard event={event} key={index} />
            ))
          ) : (
            <div className="col-span-full py-8 text-center">
              No events match your criteria. Try adjusting your filters.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
