import React from "react";
import { projects } from "../constants";

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-24 pb-24 px-4 md:px-16 lg:px-32 font-sans bg-gradient-to-b from-gray-900 to-gray-800"
        >
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Projects</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    Showcasing my work and innovations
                </p>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="p-5 rounded-xl border-2 border-purple-500 bg-gray-900 backdrop-blur-md shadow-lg shadow-purple-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40"
                    >
                        {/* Project Details */}
                        <div>
                            <h3 className="text-base font-bold text-white leading-tight mb-2">
                                {project.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <p className="text-white text-lg font-semibold">And many more...</p>
            </div>
        </section>
    );
};

export default Projects;
