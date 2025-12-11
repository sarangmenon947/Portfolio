// Volunteerships.jsx
import React from "react";
import { volunteerships } from "../constants";

const Volunteerships = () => {
    return (
        <section
            id="experience"
            className="py-24 pb-24 px-4 md:px-16 lg:px-32 font-sans bg-gradient-to-b from-gray-900 to-gray-800"
        >
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Volunteerships</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    A curated showcase of my volunteer roles across various organizations, highlighting my experience, contributions, and commitment to community impact
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto space-y-8">
                {volunteerships.map((experience) => (
                    <div
                        key={experience.id}
                        className="w-full p-6 rounded-2xl shadow-2xl border border-purple-500 bg-gray-900 backdrop-blur-md shadow-purple-500/30 transform transition-transform duration-300 hover:scale-[1.02]"
                    >
                        <div className="flex gap-6">
                            {/* Company Logo */}
                            <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0 p-2">
                                <img
                                    src={experience.img}
                                    alt={experience.company}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* All Content */}
                            <div className="flex-grow">
                                {/* Title, Company Name, Location and Date */}
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                                        {experience.title}
                                    </h3>
                                    <h4 className="text-sm sm:text-base text-purple-400 mt-1">
                                        {experience.company}
                                    </h4>
                                    <p className="text-xs text-white font-semibold mt-1">
                                        {experience.location} • {experience.type}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">{experience.date}</p>
                                </div>

                                <p className="mt-3 text-gray-300 text-sm leading-relaxed">{experience.desc}</p>

                                <div className="mt-4">
                                    <h5 className="font-medium text-white mb-2">Key Contributions:</h5>
                                    <ul className="space-y-2">
                                        {experience.skills.map((skill, skillIndex) => (
                                            <li
                                                key={skillIndex}
                                                className="text-gray-300 text-xs sm:text-sm pl-4 border-l-2 border-purple-500 leading-relaxed"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {experience.links && experience.links.length > 0 && (
                                    <div className="mt-4">
                                        <h5 className="text-sm font-medium text-white mb-2">Learn More:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.links.map((link, linkIndex) => (
                                                <a
                                                    key={linkIndex}
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-purple-400 hover:text-purple-300 text-xs underline"
                                                >
                                                    Link {linkIndex + 1}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Volunteerships;
