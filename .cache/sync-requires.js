const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/d1ma6/Desktop/PortfolioV3/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/d1ma6/Desktop/PortfolioV3/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/d1ma6/Desktop/PortfolioV3/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/d1ma6/Desktop/PortfolioV3/src/pages/index.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/d1ma6/Desktop/PortfolioV3/src/pages/work.js"))),
  "component---src-templates-project-template-js": hot(preferDefault(require("/Users/d1ma6/Desktop/PortfolioV3/src/templates/project-template.js")))
}

