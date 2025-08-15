// src/pages/Experience.jsx
import React from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Sasken Technologies",
      role: "FullStack Developer",
      duration: "Sept 2022 – Present",
      achievements: [
        "Developed a real-time configuration management tool using React, WebSockets, and Node.js.",
        "Integrated backend APIs for dynamic data fetching and file downloads.",
        "Implemented responsive layouts for round-display Wear OS devices.",
      ],
    },
  ];

  return (
    <section id="experience" className="p-10 max-w-3xl p-20 mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="relative border-l border-gray-400">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full -left-3 ring-4 ring-white"></span>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-300">{exp.company}</p>
            <span className="text-sm text-gray-400">{exp.duration}</span>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400">
              {exp.achievements.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
