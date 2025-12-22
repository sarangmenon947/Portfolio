import React from "react";
import { internships } from "../constants";

const Internships = () => {
    return (
        <section
            id="experience"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-b from-gray-900 to-gray-800"
        >
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Internships</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    A concise showcase of my professional experience and the roles I’ve
                    undertaken across various organizations
                </p>
            </div>

            {/* Experience Entries (Grid Layout) */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {internships.map((experience) => (
                    <div
                        key={experience.id}
                        className="w-full max-w-xs p-6 sm:p-8 rounded-2xl shadow-2xl border-2 border-purple-500 bg-gray-900 backdrop-blur-md shadow-purple-500/30 transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex items-start space-x-4 mb-4">
                            {/* Company Logo */}
                            <div className="w-20 h-20 bg-white rounded-lg overflow-hidden p-2 flex-shrink-0">
                                <img
                                    src={experience.img}
                                    alt={experience.company}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Title, Company Name, and Date */}
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                                    {experience.skill}
                                </h3>
                                <h4 className="text-base text-purple-400 mt-1 font-semibold">
                                    {experience.company}
                                </h4>
                                <p className="text-sm text-gray-400 mt-1">{experience.date}</p>
                            </div>
                        </div>

                        <p className="mt-2 text-gray-300 leading-relaxed">{experience.desc}</p>
                        <div className="mt-6">
                            <h5 className="font-semibold text-white mb-3">Skills:</h5>
                            <ul className="flex flex-wrap gap-2">
                                {experience.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        className="bg-purple-600 text-white px-4 py-2 text-sm rounded-full border border-purple-400 hover:bg-purple-700 transition-colors font-medium"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Internships;
