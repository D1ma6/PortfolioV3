import React from "react"
import { Link } from "gatsby"
import { Icon, InlineIcon } from "@iconify/react"
import behanceSquare from "@iconify/icons-jam/behance-square"
import instagram from "@iconify/icons-jam/instagram"
import facebook from "@iconify/icons-jam/facebook"

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__icon" to="/">
          <span>Dmytro.</span>
          <span>dev</span>
        </Link>
      </div>
      <button className="header__btn">menu.</button>
      <div className="header__social">
        <Link to="/" className="header__social__icons">
          <Icon
            icon={facebook}
            style={{ color: "#ffffff", fontSize: "24px" }}
          />
          <Icon
            icon={instagram}
            style={{ color: "#ffffff", fontSize: "24px" }}
          />
          <Icon
            icon={behanceSquare}
            style={{ color: "#ffffff", fontSize: "24px" }}
          />
        </Link>
      </div>
    </header>
  )
}

export default Navbar
