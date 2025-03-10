import React from "react";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EventModal = ({ isModalOpen, selectedEvent, closeModal }) => {
  const formatEventDate = (dateStr) => {
    const parts = dateStr.split("-");
    const day = parts[1];
    const month = parts[2];
    const year = new Date().getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <AnimatePresence>
      {isModalOpen && selectedEvent && (
        <motion.div
          className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black/70 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative mx-4 min-h-fit w-[80%] rounded-xl bg-white p-6 shadow-xl md:p-8 lg:w-[60%]"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeModal}
            >
              <X size={20} />
            </motion.button>

            {/* Event content */}
            <div className="flex min-w-fit flex-col gap-2 lg:flex-row lg:gap-6">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="min-w-fit"
              >
                <Image
                  src={`/${selectedEvent.eventPoster}`}
                  height={280}
                  width={280}
                  alt={selectedEvent.eventName}
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="flex w-full flex-col text-left text-[14px]"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="my-1 text-[18px] font-semibold leading-[21px]">
                  {selectedEvent.eventName}
                </p>

                <p className="my-1 font-medium">
                  Date:{" "}
                  <span className="opacity-[70%]">
                    {formatEventDate(selectedEvent.eventDate)}
                  </span>
                </p>

                <p className="my-1 font-medium">
                  Venue:{" "}
                  <span className="opacity-[70%]">
                    {selectedEvent.eventLocation}
                  </span>
                </p>

                <p className="my-1 font-medium">
                  Prize Pool:{" "}
                  <span className="opacity-[70%]">
                    ₹{selectedEvent.eventPrize.toFixed(2)}
                  </span>
                </p>

                <p className="my-1 font-medium">Description</p>
                <p className="mb-1 text-sm font-medium leading-[15px] opacity-[70%]">
                  {selectedEvent.eventDescription ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                </p>

                <motion.button
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#6DA27D] p-3 text-center font-semibold text-white hover:bg-[#6DA27D]/90 lg:mt-5 lg:w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download PDF <Download className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
