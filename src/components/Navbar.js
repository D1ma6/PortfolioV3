import React, { useEffect } from "react"
import { Link } from "gatsby"
import Social from "../constants/social"
import "../styles/main.scss"
import { useLocation } from "@reach/router"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = ({ setIsOpen, isOpen }) => {
  const location = useLocation()
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <AnimatePresence>
      <header className="header">
        <div className="header__logo">
          <Link className="header__logo__icon" to="/">
            <motion.span
              initial={isOpen ? { color: "#fff" } : {}}
              animate={isOpen ? { color: "#040404" } : { color: "#fff" }}
            >
              Dmytro.
            </motion.span>
            <span>dev</span>
          </Link>
        </div>
        <div className="header__btn">
          <motion.button
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            initial={isOpen ? { color: "#fff" } : {}}
            animate={isOpen ? { color: "#040404" } : {}}
            exit={isOpen ? { color: "#fff" } : {}}
          >
            menu.
          </motion.button>
        </div>
        <Social
          classStyle="header__social"
          display="flex"
          flex="column"
          align="center"
          size="18"
          color={isOpen ? "#040404" : "#fff"}
        />
      </header>
    </AnimatePresence>
  )
}

export default Navbar
