import React from "react"
import { Link } from "gatsby"
import { Icon } from "@iconify/react"
import behanceSquare from "@iconify/icons-jam/behance-square"
import instagram from "@iconify/icons-jam/instagram"
import facebook from "@iconify/icons-jam/facebook"

const social = ({ display, size, flex, align, color, classStyle }) => {
  return (
    <div
      className={classStyle ? classStyle : "header__social"}
      style={{
        display: `${display}`,
        flexDirection: `${flex}`,
        alignSelf: `${align}`,
      }}
    >
      <Link to="/" className="header__social__icons">
        <Icon
          icon={facebook}
          style={{
            color: `${color}`,
            fontSize: `${size}`,
            transiton: "color 1s ease-in-out",
          }}
        />
      </Link>
      <Link to="/" className="header__social__icons">
        <Icon
          icon={instagram}
          style={{
            color: `${color}`,
            fontSize: `${size}`,
            transiton: "color 1s ease-in-out",
          }}
        />
      </Link>
      <Link to="/" className="header__social__icons">
        <Icon
          icon={behanceSquare}
          style={{
            color: `${color}`,
            fontSize: `${size}`,
            transiton: "color 1s ease-in-out",
          }}
        />
      </Link>
    </div>
  )
}

export default social
