import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { Icon } from "@iconify/react"
import boxArrowUpRight from "@iconify/icons-bi/box-arrow-up-right"
import { motion, AnimatePresence } from "framer-motion"

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const Home = () => {
  return (
    <Layout>
      <p className="home__description">
        I'm a front-end web developer/designer from{" "}
        <span className="red link">Ukraine</span> based in{" "}
        <span className="red link">London.</span>
      </p>
      <p className="home__description">
        Well organised person, problem solver, employee with high attention to{" "}
        <span className="red link">detail.</span>
      </p>
      <div className="home__container">
        {" "}
        <div className="home__date link">{`${new Date().getDate()} ${
          monthNames[new Date().getMonth() + 1]
        }`}</div>
        <div className="home__year link">{new Date().getFullYear()}</div>
        <h1 className="home__title link">
          Building creative website applications
        </h1>
        <div className="home__article link">latest article</div>
        <div className="home__name link">dmytro bula</div>
      </div>
      <Link to="/contact/" className="home__contact">
        <span className="home__contact__main">Contact me today</span>
        <span>
          email
          <Icon
            icon={boxArrowUpRight}
            style={{ color: "#ffffff", fontSize: "10px" }}
          />
        </span>
      </Link>
      <Link to="/work/" className="home__project">
        <span className="home__contact__main">Check my latest projects</span>
        <span>
          work
          <Icon
            icon={boxArrowUpRight}
            style={{ color: "#ffffff", fontSize: "12px" }}
          />
        </span>
      </Link>
    </Layout>
  )
}

export default Home
