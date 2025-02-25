"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Slider } from "@heroui/slider";
import { DateRangePicker } from "@heroui/date-picker";
import { Select, SelectItem } from "@heroui/select";

const locations = [
  "Campus-15",
  "Campus-14",
  "Campus-13",
  "Campus-12",
  "Campus-8",
];

const Filter = ({
  filterOpen,
  setFilterOpen,
  setSortOpen,
  filterOptions,
  setSelectedFilter,
  selectedFilter,
  priceRange,
  setPriceRange,
  dateRange,
  setDateRange,
  selectedLocations,
  setSelectedLocations,
}) => {
  const handlePriceChange = (value) => setPriceRange(value);

  const handleDateChange = (range) => {
    if (!range || !range.start || !range.end) {
      console.error("Invalid range received:", range);
      return;
    }
    setDateRange(range);
  };

  const handleLocationChange = (selected) => {
    setSelectedLocations(locations[selected?.target?.value]);
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          setFilterOpen(!filterOpen);
          setSortOpen(false);
        }}
        className="flex gap-1 rounded-md bg-[#6DA27D] p-2 text-white"
      >
        Filter
        <Image
          src={"Dropdown.svg"}
          alt={"Dropdown"}
          width={10}
          height={10}
          className="inline"
        />
      </button>
      <AnimatePresence>
        {filterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute mt-1 min-w-40 rounded-md bg-white p-3 shadow-lg"
          >
            <p className="text-sm font-semibold">Filter By:</p>
            <ul className="mt-1 space-y-2 pb-2">
              {filterOptions.map((filter, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`cursor-pointer rounded-md p-1 pl-2 ${
                    selectedFilter === index
                      ? "bg-[#6DA27D] text-white"
                      : "text-black hover:bg-gray-100"
                  }`}
                  onClick={() =>
                    setSelectedFilter(selectedFilter === index ? -1 : index)
                  }
                >
                  {filter}
                </motion.li>
              ))}
              <AnimatePresence>
                {selectedFilter === 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Slider
                      className="min-w-[200px]"
                      value={priceRange}
                      onChange={handlePriceChange}
                      formatOptions={{ style: "currency", currency: "INR" }}
                      label="Price Range"
                      maxValue={1000}
                      minValue={100}
                      step={50}
                      size="sm"
                    />
                  </motion.div>
                )}
                {selectedFilter === 2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DateRangePicker
                      className="max-w-xs"
                      label="Select your range"
                      value={dateRange}
                      onChange={handleDateChange}
                    />
                  </motion.div>
                )}
                {selectedFilter === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Select
                      label="Select Location"
                      placeholder="Choose campus"
                      multiple
                      value={selectedLocations}
                      onChange={handleLocationChange}
                      className="min-w-[200px]"
                    >
                      {locations.map((location, index) => (
                        <SelectItem key={index} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </Select>
                  </motion.div>
                )}
              </AnimatePresence>
              {selectedFilter !== -1 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative left-[37%] top-1 rounded-lg bg-[#6DA27D] px-3 py-2 tracking-wide text-white hover:bg-[#84ba95]"
                  onClick={() => setSelectedFilter(-1)}
                >
                  Clear
                </motion.button>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
