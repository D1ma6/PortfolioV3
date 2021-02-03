import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import "../styles/main.scss"

const ComponentName = ({ data }) => (
  <Layout>{JSON.stringify(data, null, 4)}</Layout>
)

export const query = graphql`
  {
    allStrapiInfos {
      nodes {
        Age
        Name
        Desc
      }
    }
  }
`

export default ComponentName
