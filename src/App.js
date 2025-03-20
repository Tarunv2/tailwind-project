import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhone, FaEnvelope, FaStar } from "react-icons/fa";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.section
        className="text-center py-28 px-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold text-blue-400 drop-shadow-xl">
          Welcome to Tailwind WITH TARUN
        </h1>
        <p className="text-xl mt-4 text-gray-300 max-w-2xl mx-auto">
          🚀 Explore the future of web design with us! Visit our website now for stunning, responsive, and user-friendly experiences. ✨🔗
        </p>
        <motion.button
          className="mt-6 bg-blue-500 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-24 py-12">
        {[
          { title: "Fast", desc: "Lightning-fast performance", icon: FaCheckCircle },
          { title: "Responsive", desc: "Works on all devices", icon: FaCheckCircle },
          { title: "Beautiful", desc: "Elegant and modern UI", icon: FaCheckCircle },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-8 rounded-xl shadow-xl text-center border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <feature.icon className="text-blue-300 text-4xl mb-3" />
            <h2 className="text-3xl font-bold text-blue-300">{feature.title}</h2>
            <p className="text-gray-300 mt-3">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* About Tailwind CSS Section */}
      <motion.section
        className="bg-gray-800 text-white py-16 px-8 md:px-24 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-blue-400">About Tailwind CSS</h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          Tailwind CSS is a utility-first framework that enables developers to build modern and responsive UIs efficiently. It provides pre-designed utility classes that allow fast styling without writing custom CSS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[
            {
              title: "Fast Development",
              desc: "Speeds up development with ready-to-use utility classes, reducing the need for custom CSS.",
              img: "https://tailwindcss.com/_next/static/media/docs@tinypng.9c5c2ee5.png",
            },
            {
              title: "Responsive Design",
              desc: "Easily create mobile-friendly designs with Tailwind's responsive utilities.",
              img: "https://tailwindcss.com/_next/static/media/responsive@tinypng.12c48bb8.png",
            },
            {
              title: "Highly Customizable",
              desc: "Tailwind allows deep customization using its configuration file, enabling brand-specific designs.",
              img: "https://tailwindcss.com/_next/static/media/config@tinypng.b72b14bd.png",
            },
            {
              title: "Great Developer Experience",
              desc: "With its utility-first approach, Tailwind enhances productivity and simplifies styling.",
              img: "https://tailwindcss.com/_next/static/media/devexp@tinypng.9a6e1c2e.png",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img src={item.img} alt={item.title} className="rounded-lg shadow-md" />
              <h3 className="text-2xl font-semibold text-blue-300 mt-4">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold text-blue-400">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-8 md:px-24">
          {[
            { name: "MONIK VERMA", review: "Absolutely love the UI and responsiveness!" },
            { name: "DHERRAJ CHAUHAN", review: "Best design experience I've had!" },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-left"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-300">"{testimonial.review}"</p>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="ml-2 text-blue-300">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="bg-blue-500 text-white py-12 text-center rounded-xl shadow-lg mt-8 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold drop-shadow-md">Contact Us</h2>
        <p className="mt-4">Have questions? Reach out to us.</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
          <motion.div className="bg-white text-blue-600 px-6 py-3 rounded-xl flex items-center gap-3 font-semibold hover:bg-gray-200 transition-all duration-300 shadow-md">
            <FaPhone /> 9805337080
          </motion.div>
          <motion.div className="bg-white text-blue-600 px-6 py-3 rounded-xl flex items-center gap-3 font-semibold hover:bg-gray-200 transition-all duration-300 shadow-md">
            <FaEnvelope /> tarunthakurk2@gmail.com
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-lg mt-12">
        &copy; THANK YOU FOR COMING...
      </footer>
    </div>
  );
};

export default App;
