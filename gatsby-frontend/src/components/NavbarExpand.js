import React, { useState } from "react"
import { Link } from "gatsby"
import Social from "../constants/social"
import { motion, AnimatePresence } from "framer-motion"

// variants && transitions
const transition = { ease: "easeInOut", duration: 0.8 }
const linkVariant = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: { ease: "easeInOut", duration: 1.2, delay: 0.2 },
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { ease: "easeInOut", duration: 1.2, delay: 0.2 },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { ease: "easeInOut", duration: 0.8 },
  },
}

const NavbarExpand = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div className="header__menu">
            <motion.ul className="header__menu__nav">
              <motion.li
                key="link1"
                whileHover={{ x: 10 }}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={linkVariant}
                className="header__menu__nav__li"
              >
                <Link key={"home"} to="/">
                  Home
                </Link>
              </motion.li>
              <motion.li
                key="link2"
                whileHover={{ x: 10 }}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={linkVariant}
                className="header__menu__nav__li"
              >
                <Link key={"about"} to="/about/">
                  About me
                </Link>
              </motion.li>
              <motion.li
                key="link3"
                whileHover={{ x: 10 }}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={linkVariant}
                className="header__menu__nav__li"
              >
                <Link key={"work"} to="/work/">
                  My work
                </Link>
              </motion.li>
              <motion.li
                key="link4"
                whileHover={{ x: 10 }}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={linkVariant}
                className="header__menu__nav__li"
              >
                <Link key={"home"} to="/contact/">
                  Contact me
                </Link>
              </motion.li>
            </motion.ul>

            <Social
              classStyle="header__social__expanded"
              display="flex"
              flex="row"
              align="center"
              size="32"
              color="#040404"
            />
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={linkVariant}
              className="header__email"
            >
              <Link to="/">dmytro.bula21@gmail.com</Link>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={linkVariant}
              className="header__name"
            >
              dmytro bula
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={linkVariant}
              className="header__year"
            >
              {new Date().getFullYear()}
            </motion.div>
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              exit={{ width: "0" }}
              transition={transition}
              className="header__bg"
            ></motion.span>
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              exit={{ width: "0" }}
              transition={transition}
              className="header__bg"
            ></motion.span>
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              exit={{ width: "0" }}
              transition={transition}
              className="header__bg"
            ></motion.span>
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              exit={{ width: "0" }}
              transition={transition}
              className="header__bg"
            ></motion.span>
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              exit={{ width: "0" }}
              transition={transition}
              className="header__bg"
            ></motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavbarExpand
