'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const HamburgerMenu = ({ navLinks, path }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="relative lg:hidden">
      <motion.button
        className="relative w-[30px] h-[30px] z-50 flex items-center justify-center"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        whileTap={{ scale: 0.97 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isMenuOpen ? (
            <motion.div
              key="close"
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={'/CloseMenu.svg'}
                width={30}
                height={30}
                alt="Close Menu"
                className="filter-green"
              />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={'/Hamburger.svg'}
                width={20}
                height={20}
                alt="Hamburger Menu"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-48 flex flex-col z-50 gap-1"
            >
              {navLinks
          .filter((item) => !(path === "events" && item === "Features")) 
          .map((item) => {
            const linkPath = path === "events" ? `/#${item.toLocaleLowerCase()}` : `#${item.toLowerCase()}`;

            return (
              <Link
                key={item}
                href={item === "Events" ? "/events" : linkPath} 
                className="rounded-md px-2 py-1 transition-colors duration-200 hover:bg-[#bdc9d0] hover:bg-opacity-90"
              >
                {item}
              </Link>
            );
          })}
              <button className="bg-[#6DA27D] w-[60%] ml-2 my-1 rounded-md py-1 text-white">
              <Link href={path === "events" ? "/logout" : "/login"}>
          {path === "events" ? "Logout" : "Register"}
        </Link>
              </button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HamburgerMenu
