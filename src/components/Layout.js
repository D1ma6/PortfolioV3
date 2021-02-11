import React, { useState } from "react"
import Navbar from "./Navbar"
import NavbarExpand from "./NavbarExpand"
import Share from "../constants/share"
import AnimatedCursor from "react-animated-cursor"
import { motion, AnimatePresence } from "framer-motion"

import Lines from "../constants/lines"

const transition = { ease: "easeInOut", duration: 0.8 }

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="layout"
        >
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavbarExpand isOpen={isOpen} setIsOpen={setIsOpen} />
          {children}

          <Lines isOpen={isOpen} />

          <motion.span
            initial={false}
            exit={{ width: "100%" }}
            transition={transition}
            className="layout__lines"
          ></motion.span>
          <motion.span
            initial={false}
            exit={{ width: "100%" }}
            transition={transition}
            className="layout__lines"
          ></motion.span>
          <motion.span
            initial={false}
            exit={{ width: "100%" }}
            transition={transition}
            className="layout__lines"
          ></motion.span>
          <motion.span
            initial={false}
            exit={{ width: "100%" }}
            transition={transition}
            className="layout__lines"
          ></motion.span>
          <motion.span
            initial={false}
            exit={{ width: "100%" }}
            transition={transition}
            className="layout__lines"
          ></motion.span>
          <Share isOpen={isOpen} />
          <AnimatedCursor
            innerSize={10}
            outerSize={20}
            color="236, 28, 36"
            outerAlpha={0.3}
            innerScale={1}
            outerScale={5}
          />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Layout
