import React from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"
import boxArrowUpRight from "@iconify/icons-bi/box-arrow-up-right"

const share = ({ isOpen }) => {
  return (
    <AnimatePresence>
      <Link to="/" className="share">
        <motion.span
          initial={isOpen ? { color: "#fff" } : { color: "#040404" }}
          animate={isOpen ? { color: "#040404" } : { color: "#fff" }}
          exit={{ color: "#fff" }}
        >
          share
        </motion.span>
        <Icon
          icon={boxArrowUpRight}
          style={
            isOpen
              ? { color: "#040404", fontSize: "10px" }
              : { color: "#ffffff", fontSize: "10px" }
          }
        />
      </Link>
    </AnimatePresence>
  )
}

export default share
