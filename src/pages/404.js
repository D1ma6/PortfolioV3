import React from "react"
import { Link } from "gatsby"
import { Icon, InlineIcon } from "@iconify/react"
import robotFace from "@iconify/icons-emojione-monotone/robot-face"

const Error = () => {
  return (
    <div className="error">
      <Icon icon={robotFace} style={{ color: "#ffffff", fontSize: "256px" }} />
      <h1 className="error__title">Opps... Dead end</h1>
      <p className="error__para">Please go back to the home page</p>
      <Link className="error__btn btn" to="/">
        Go back
      </Link>
    </div>
  )
}
export default Error
