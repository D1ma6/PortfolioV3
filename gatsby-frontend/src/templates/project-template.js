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
import githubFilled from "@iconify/icons-ant-design/github-filled"
import bxlBehance from "@iconify/icons-bx/bxl-behance"
import dribbbleOutlined from "@iconify/icons-ant-design/dribbble-outlined"
import instagramOutlined from "@iconify/icons-ant-design/instagram-outlined"

const SingleProject = ({
  data: {
    product: {
      nodes: [
        { Title, Date, Description, Year, hashtags, Tools, Social, Photos },
      ],
    },
  },
  pathContext: { url },
}) => {
  return (
    <Layout>
      <div className="project">
        <div className="project__left">
          <span className="project__left__date">{Date}</span>
          <span className="project__left__year">{Year}</span>
          <h1 className="project__left__title">{Title}</h1>
          <div className="project__left__images">
            {Photos.map(photo => (
              <Img
                className="project__left__images__photo"
                key={photo.Photo.childImageSharp.id}
                fluid={photo.Photo.childImageSharp.fluid}
              />
            ))}
          </div>
        </div>
        <div className="project__right">
          <h1 className="project__right__title">{Title}</h1>
          <p className="project__right__description">{Description}</p>
          <div className="project__right__tools">
            <span>Tools used:</span>
            {Tools.map(item => {
              if (item.Tool === "figmaIcon") {
                return (
                  <Icon
                    key={item.id}
                    icon={figmaIcon}
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  />
                )
              }
              if (item.Tool === "css3Outline") {
                return (
                  <Icon
                    key={item.id}
                    icon={css3Outline}
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  />
                )
              }
              if (item.Tool === "nodeIcon") {
                return (
                  <Icon
                    key={item.id}
                    icon={nodeIcon}
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  />
                )
              }
              if (item.Tool === "html5Outline") {
                return (
                  <Icon
                    key={item.id}
                    icon={html5Outline}
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  />
                )
              }
              if (item.Tool === "javascriptOutline") {
                return (
                  <Icon
                    key={item.id}
                    icon={javascriptOutline}
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  />
                )
              }
              if (item.Tool === "bxlReact") {
                return (
                  <Icon
                    key={item.id}
                    icon={bxlReact}
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  />
                )
              }
              if (item.Tool === "adobePhotoshop") {
                return (
                  <Icon
                    key={item.id}
                    icon={adobePhotoshop}
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  />
                )
              }
              if (item.Tool === "gatsbyjsOutline") {
                return (
                  <Icon
                    key={item.id}
                    icon={gatsbyjsOutline}
                    style={{ color: "#ffffff", fontSize: "18px" }}
                  />
                )
              }
              return ""
            })}
          </div>
          <span className="project__right__hashtags">{hashtags}</span>
          <div className="project__right__social">
            {Social.map(link => {
              const { Github, Instagram, Behance, Dribble } = link
              console.log(link)
              if (Github !== "/") {
                return (
                  <Link className="project__right__social__link" to={Github}>
                    <Icon
                      icon={githubFilled}
                      style={{ color: "#ffffff", fontSize: "32px" }}
                    />
                  </Link>
                )
              }
              if (Instagram !== "/") {
                return (
                  <Link className="project__right__social__link" to={Instagram}>
                    <Icon
                      icon={instagramOutlined}
                      style={{ color: "#ffffff", fontSize: "32px" }}
                    />
                  </Link>
                )
              }
              if (Behance !== "/") {
                return (
                  <Link className="project__right__social__link" to={Behance}>
                    <Icon
                      icon={bxlBehance}
                      style={{ color: "#ffffff", fontSize: "32px" }}
                    />
                  </Link>
                )
              }
              if (Behance !== "/") {
                return (
                  <Link className="project__right__social__link" to={Dribble}>
                    <Icon
                      icon={dribbbleOutlined}
                      style={{ color: "#ffffff", fontSize: "32px" }}
                    />
                  </Link>
                )
              }
              return ""
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetProject($url: String) {
    product: allStrapiProjects(filter: { url: { eq: $url } }) {
      nodes {
        url
        Date
        Description
        Title
        Year
        hashtags
        Tools {
          Tool
          id
        }
        Social {
          Instagram
          Github
          Dribble
          Behance
        }
        Photos {
          Photo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
              id
            }
          }
        }
      }
    }
  }
`

export default SingleProject
