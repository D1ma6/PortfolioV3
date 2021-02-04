import React, { useState } from "react"
import Navbar from "./Navbar"
import NavbarExpand from "./NavbarExpand"
import Share from "../constants/share"
import { motion, AnimatePresence } from "framer-motion"
import Lines from "../constants/lines"

const transition = { ease: "easeInOut", duration: 0.8 }
const parent = {
  animate: {
    transition: {
      delay: 1,
    },
  },
}

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="layout"
          exit={{ opacity: 0 }}
          variants={parent}
          transition={transition}
        >
          <Navbar expand="navbarExpand" isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavbarExpand isOpen={isOpen} setIsOpen={setIsOpen} />
          {children}

          <Lines isOpen={isOpen} />

          <span
            className="layout__lines"
            style={isOpen ? { background: "#e4e4e4" } : {}}
          ></span>
          <span
            className="layout__lines"
            style={isOpen ? { background: "#e4e4e4" } : {}}
          ></span>
          <span
            className="layout__lines"
            style={isOpen ? { background: "#e4e4e4" } : {}}
          ></span>
          <span
            className="layout__lines"
            style={isOpen ? { background: "#e4e4e4" } : {}}
          ></span>
          <span
            className="layout__lines"
            style={isOpen ? { background: "#e4e4e4" } : {}}
          ></span>
          <Share />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Layout
