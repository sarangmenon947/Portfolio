import React from "react";
import { education } from "../constants";

const Academics = () => {
    return (
        <section
            id="education"
            className="py-24 pb-24 px-4 md:px-16 lg:px-32 font-sans bg-gradient-to-b from-gray-900 to-gray-800"
        >
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Academics</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    My education has been a journey of learning and development. Here are the details of my academic background
                </p>
            </div>

            {/* Education Cards */}
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Education Entries */}
                {education.map((edu) => (
                    <div
                        key={edu.id}
                        className="w-full p-6 rounded-2xl shadow-2xl border-2 border-purple-500 bg-gray-900 backdrop-blur-md shadow-purple-500/30 transform transition-transform duration-300 hover:scale-[1.02]"
                    >
                        <div className="flex gap-6">
                            {/* School Logo - Bigger */}
                            <div className="w-24 h-32 bg-white rounded-lg overflow-hidden flex-shrink-0 p-3">
                                <img
                                    src={edu.img}
                                    alt={edu.school}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* All Content */}
                            <div className="flex-grow">
                                {/* Degree, School Name, and Date */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                                        {edu.degree}
                                    </h3>
                                    <h4 className="text-base text-purple-400 mt-1 font-semibold">
                                        {edu.school}
                                    </h4>
                                    <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
                                </div>

                                <p className="mt-2 text-gray-300 text-sm leading-relaxed">{edu.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Academics;
