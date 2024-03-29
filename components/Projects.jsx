import React from "react";
import { Stack, Image } from "react-bootstrap";
import styles from "../styles/Projects.module.css";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Projects = ({ projects }) => {
  return (
    <Stack id="works" className="py-5" gap={5}>
      <h1 className="text-center pt-5">
        It’s great to always give the customer the best feed.
      </h1>
      <div className="py-2 d-flex flex-wrap justify-content-center align-items-stretch">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className={`${styles.project} my-4 position-relative rounded`}
            >
              <Image
                alt={project.title}
                className="w-100 h-100 rounded"
                src={`${project.main_preview}`}
              />
              <div
                id="projectLink"
                className={`${styles.projectLink} fw-bolder h-25 w-75 p-4 justify-content-between align-items-center position-absolute`}
              >
                <Link href={`/projects/${project.id}`}>
                  <p className="m-0"  role="button">{project.title}</p>
                </Link>
                <Link href={`/projects/${project.id}`} role="button">
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Stack>
  );
};

export default Projects;

// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:8000/projects");
//   const projects = await res.json();
//   console.log(projects)
//   return {
//     props: { projects }, // will be passed to the page component as props
//   };
// }
