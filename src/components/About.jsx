import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import profileImage from '../assets/Profile.jpg';

const About = () => {
    return (
        <section
            id="about"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">

                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

                    {/* Greeting */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>

                    {/* Name */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Sarang Menon
                    </h2>

                    {/* Heading */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">I am </span>
                        <span className="text-[#8245ec]">
                            <Typewriter
                                words={[
                                    'a Programmer',
                                    'an Open Source Contributor',
                                    'a Volunteer',
                                    'an Android App Developer',
                                    'a Problem Solver',
                                    'a Tech Explorer',
                                    'a Creative Thinker',
                                    'a Team Collaborator'
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </h3>

                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        Hi, I’m Sarang Menon, a high school student from Kerala, India with a passion for learning, technology, and creativity. I
                        am a happy soul who is passionate on travel, music and for sure cool tech.
                        <br /><br />
                        I enjoy doing any project, both as an individual contributor or as part of a team. And I love sharing whatever skills I
                        have with others while learning new ones.
                        <br /><br />
                        My goal is to be involved in meaningful projects where I can make a difference, no matter how big or small.
                    </p>

                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/18wXaW9ciCQcTmXCYWdvfq1hcU_jTqCv9/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        Download CV
                    </a>

                </div>

                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={profileImage}
                            alt="Sarang Menon"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;
