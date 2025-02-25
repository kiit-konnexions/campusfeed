'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const SortBy = ({setSortOpen, sortOpen, setFilterOpen, sortOptions, sortBy, setSortBy}) => {
  return (
    <div className="relative">
              <button
                onClick={() => {
                  setSortOpen(!sortOpen)
                  setFilterOpen(false)
                }}
                className="bg-[#6DA27D] rounded-md p-2 text-white flex items-center gap-1"
              >
                Sort By
                <Image
                  src={'Dropdown.svg'}
                  alt={'Dropdown'}
                  width={10}
                  height={10}
                  className="inline"
                ></Image>
              </button>
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-white shadow-lg rounded-md p-3 w-40 mt-1"
                  >
                    <p className="text-sm font-semibold">Sort By:</p>
                    <ul className="mt-1 space-y-2">         
                     {sortOptions.map((sort, index) => (
                      <li key={index} className={`  p-1 pl-2 rounded-md cursor-pointer ${sortBy === index ? 'bg-[#6DA27D]  text-white' : ' text-black hover:bg-gray-100'}`} onClick={() => setSortBy(index)}>
                        {sort}
                      </li>
                     ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
  )
}

export default SortBy