import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import WorkItems from "../components/Work"

const Work = ({
  data: {
    allProjects: { projects },
  },
}) => {
  return (
    <Layout>
      <div className="work">
        <WorkItems projects={projects} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allProjects: allStrapiProjects(
      sort: { fields: projectCreateDate, order: ASC }
    ) {
      projects: nodes {
        id
        Title
        Date
        Year
        url
        Photos {
          Photo {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
        projectCreateDate
      }
    }
  }
`

export default Work
