const path = require("path")

// create project pages
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      projects: allStrapiProjects {
        nodes {
          url
        }
      }
    }
  `)

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/work/${project.url}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        url: project.url,
      },
    })
  })
}
