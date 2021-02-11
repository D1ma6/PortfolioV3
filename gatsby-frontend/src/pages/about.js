import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"

// icons
import { Icon } from "@iconify/react"
import css3Outline from "@iconify/icons-teenyicons/css3-outline"
import nodeIcon from "@iconify/icons-grommet-icons/node"
import html5Outline from "@iconify/icons-teenyicons/html5-outline"
import javascriptOutline from "@iconify/icons-teenyicons/javascript-outline"
import bxlReact from "@iconify/icons-bx/bxl-react"
import figmaIcon from "@iconify/icons-la/figma"
import adobePhotoshop from "@iconify/icons-cib/adobe-photoshop"
import gatsbyjsOutline from "@iconify/icons-teenyicons/gatsbyjs-outline"
// import adobeXd from "@iconify/icons-cib/adobe-xd"
// import strapiIcon from "@iconify/icons-simple-icons/strapi"
// import contentfulIcon from "@iconify/icons-simple-icons/contentful"

const About = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <div className="about">
        <div className="about__container">
          <div className="about__hello">hello</div>
          <div className="about__year">{new Date().getFullYear()}</div>
          <div className="about__description">
            <h1 className="about__description__title">About me</h1>
            <p className="about__description__p">
              I'm a front-end web developer/designer from{" "}
              <span className="red link">Ukraine</span> based in{" "}
              <span className="red link">London</span>, I love creating beatiful
              and functional websites,applications, and everything in between.
            </p>
            <p className="about__description__p">
              Well organised person, problem solver, employee with high
              attention to <span className="red link">detail</span>. Fan of
              esports, csgo, spaceX, outdoor activities, travelling.
            </p>
            <p className="about__description__p">
              The <span className="red link">main</span> area of my expertise is
              front-end web <span className="red link">development</span> and
              web <span className="red link">designing</span>. HTML, CCS,
              JavaScrpit, preprocessors SCSS and Less, frameworks jquery, react
              and node.js. Also making animations and illustations for web.
            </p>
          </div>
          <Link to="/" className="about__resume btn">
            Resume
          </Link>
          <Link to="/" className="about__contact btn">
            Contact
            <span></span>
          </Link>
        </div>

        <div className="about__skills__container">
          <div className="about__skills about__skills__first">
            <div className="about__skills__item link about__skills__item__first">
              <div className="about__skills__item__title">
                <Icon
                  icon={css3Outline}
                  style={{ color: "#ffffff", fontSize: "48px" }}
                />
                <span>css3</span>
              </div>
              <div
                style={{ width: "85%" }}
                className="about__skills__item__bar"
              ></div>
            </div>
            <div className="about__skills__item link">
              <div className="about__skills__item__title">
                <Icon
                  icon={nodeIcon}
                  style={{ color: "#ffffff", fontSize: "48px" }}
                />
                <span>node.js</span>
              </div>
              <div
                style={{ width: "68%" }}
                className="about__skills__item__bar"
              ></div>
            </div>
            <div className="about__skills__item link">
              <div className="about__skills__item__title">
                <Icon
                  icon={gatsbyjsOutline}
                  style={{ color: "#ffffff", fontSize: "48px" }}
                />
                <span>gatsby.js</span>
              </div>
              <div
                style={{ width: "82%" }}
                className="about__skills__item__bar"
              ></div>
            </div>
            <div className="about__skills__item link">
              <div className="about__skills__item__title">
                <Icon
                  icon={adobePhotoshop}
                  style={{ color: "#ffffff", fontSize: "48px" }}
                />
                <span>photoshop</span>
              </div>
              <div
                style={{ width: "95%" }}
                className="about__skills__item__bar"
              ></div>
            </div>
          </div>
          <div className="about__skills about__skills__second">
            <div className="about__skills__item link about__skills__item__first">
              <div className="about__skills__item__title">
                <Icon
                  icon={html5Outline}
                  style={{ color: "#ffffff", fontSize: "48px" }}
                />
                <span>html5</span>
              </div>
              <div
                style={{ width: "89%" }}
                className="about__skills__item__bar"
              ></div>
            </div>
            <div className="about__skills__item link">
              <div className="about__skills__item__title">
                <Icon
                  icon={javascriptOutline}
                  style={{ color: "#ffffff", fontSize: "48px" }}
                />
                <span>javascript</span>
              </div>
              <div
                style={{ width: "93%" }}
                className="about__skills__item__bar"
              ></div>
            </div>
            <div className="about__skills__item link">
              <div className="about__skills__item__title">
                <Icon
                  icon={bxlReact}
                  style={{ color: "#ffffff", fontSize: "48px" }}
                />
                <span>react.js</span>
              </div>
              <div
                style={{ width: "78%" }}
                className="about__skills__item__bar"
              ></div>
            </div>
            <div className="about__skills__item link">
              <div className="about__skills__item__title">
                <Icon
                  icon={figmaIcon}
                  style={{ color: "#ffffff", fontSize: "48px" }}
                />
                <span>figma</span>
              </div>
              <div
                style={{ width: "91%" }}
                className="about__skills__item__bar"
              ></div>
            </div>
          </div>
          <div className="about__image link">
            <Img fluid={fluid} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetPhoto {
    file(relativePath: { eq: "about-profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About
