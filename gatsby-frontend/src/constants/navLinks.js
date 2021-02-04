import React from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About me",
    url: "/about/",
  },
  {
    id: 3,
    text: "My work",
    url: "/work/",
  },
  {
    id: 4,
    text: "Contact me",
    url: "/contact/",
  },
]

const transition = { ease: "easeInOut", duration: 0.8 }

const tempLinks = data.map(link => {
  return (
    <Link key={link.id} to={link.url}>
      {link.text}
    </Link>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default () => {
  return <motion.nav className="header__menu__nav">{tempLinks}</motion.nav>
}
