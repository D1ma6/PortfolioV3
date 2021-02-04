import React from "react"
import { Link } from "gatsby"
import NavLinks from "../constants/navLinks"
import Social from "../constants/social"
import { motion, AnimatePresence } from "framer-motion"

// variants && transitions
const transition = { ease: "easeInOut", duration: 0.8 }
const parent = {
  animate: {
    transition: {
      delay: 1,
    },
  },
}

const NavbarExpand = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{ opacity: 0 }}
            variants={parent}
            transition={transition}
            className="header__menu"
          >
            <NavLinks />
            <Social
              classStyle="header__social__expanded"
              display="flex"
              flex="row"
              align="center"
              size="32"
              color="#040404"
            />
            <div className="header__email">
              <Link to="/">dmytro.bula21@gmail.com</Link>
            </div>
            <div className="header__name">dmytro bula</div>
            <div className="header__year">{new Date().getFullYear()}</div>
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
