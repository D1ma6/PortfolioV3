const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Dmytro Bula | Portfolio",
    descritpion:
      "I'm a front-end web developer/designer from Ukraine based in London, I love creating beatiful and functional websites, applications, and everything in between.",
    author: "Dmytro Bula",
    instagramUsername: "@d1ma6",
    siteUrl: "https://dmytrobula.com/",
    image: "/dmytrobula.png",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://dmytrobula.com/",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "projects",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:400,500,600,700`],
        display: "swap",
      },
    },
  ],
};
