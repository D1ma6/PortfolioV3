import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";

// icons
import { Icon, InlineIcon } from "@iconify/react";
import boxArrowUpRight from "@iconify/icons-bi/box-arrow-up-right";

const WorkItems = ({ projects, x, y }) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <div className="work__project">
            <div id={project.url} className="work__project__container">
              <Link key={project.url} to={`/work/${project.url}`}>
                <span className="work__project__date">{project.Date}</span>
                <span className="work__project__year">{project.Year}</span>
                <h1 className="work__project__title">{project.Title}</h1>
                <span
                  className="work__project__read"
                  to={`/work/${project.url}`}
                >
                  Read{" "}
                  <Icon
                    icon={boxArrowUpRight}
                    style={{ color: "#ffffff", fontSize: "10px" }}
                  />
                </span>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WorkItems;
