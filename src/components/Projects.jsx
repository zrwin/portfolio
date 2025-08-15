// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";

const projectData = [
  {
    title: "Resume Builder",
    description:
      "Responsive web app that enables users to build and export professional resumes using customizable templates and live preview.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Vercel", "Context API", "Tailwind CSS", "Shadcn UI"],
    image: "/images/resume-builder-project.png",
    github: "https://github.com/zrwin/resumeMaker",
    live: "https://resume-builderzr.netlify.app/",
  },
  {
    title: "Student Result Management System",
    description:
      "A full-stack web application to manage student results efficiently. Includes admin controls for adding, updating, and viewing student performance with secure authentication.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    image: "/images/student-management.jpg", // Update image if it's incorrect
    github: "https://github.com/zrwin/student_res_mang",
    live: "null",
  },
];


export default function Projects() {
  const [projects, setProjects] = useState([...projectData]);

  // useEffect(() => {
  //   // Temporary static data; replace with fetch('/api/projects') later
  //   setProjects([
      
  //   ]);
  // }, []);

  return (
    <section id="projects" className="p-10 max-w-6xl mx-auto mb-20">
      <h2 className="text-3xl p-5 font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((proj, index) => (
          <a href={proj.github} target="_blank" rel="noopener noreferrer">
          <div
            key={index}
            className="  shadow-md shadow-cyan-800 rounded-lg overflow-hidden  hover:shadow-orange-600 transition"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-600">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.techStack.map((tech, i) => (
                  <span
                  key={i}
                  className="bg-[#2d87ee9a] px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href={proj.github}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
      </a>
        ))}
      </div>
    </section>
  );
}
