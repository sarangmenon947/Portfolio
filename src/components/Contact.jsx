import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
        >
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Contact</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    I'd love to hear from you—reach out for any opportunities or questions!
                </p>
            </div>

            <div className="mt-8 w-full max-w-md bg-[#0d081f] p-8 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white text-center mb-6">
                    Connect With Me
                </h3>

                <div className="text-center">
                    <p className="text-gray-300 mb-4">Email me at:</p>
                    <a
                        href="mailto:sarangmenon555@gmail.com"
                        className="text-white"
                    >
                        <span className="font-bold">sarangmenon76@gmail.com</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
