import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const transition = { ease: "easeInOut", duration: 0.8 }

const lines = ({ isOpen, seIsOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="layout__lines"
            initial={{ width: "0%", left: 0, background: "#fff" }}
            animate={{ width: "100%" }}
            exit={{ width: "0%" }}
            transition={transition}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default lines
