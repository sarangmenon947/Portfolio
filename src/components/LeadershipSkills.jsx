import React from "react";
import { leadershipSkills } from "../constants";

const LeadershipSkills = () => {
    return (
        <section
            id="leadership"
            className="py-24 pb-24 px-4 md:px-16 lg:px-32 font-sans bg-gradient-to-b from-gray-900 to-gray-800"
        >
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Leadership Skills</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    Demonstrating leadership through simplified data fields
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto space-y-8">
                {leadershipSkills.map(({ id, name, description }) => (
                    <div
                        key={id}
                        className="w-full p-6 rounded-2xl shadow-2xl border border-purple-500 bg-gray-900 backdrop-blur-md shadow-purple-500/30 transform transition-transform duration-300 hover:scale-[1.02]"
                    >
                        <h3 className="text-xl font-semibold text-white">{name}</h3>
                        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LeadershipSkills;
