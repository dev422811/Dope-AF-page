import React from "react";
import { motion } from "framer-motion";
import InstaIcon from "../assets/instagram.png"; // make sure this path is correct

const Contact = () => {
  return (
    <div className="bg-white text-[#E9762B] min-h-screen">
      <motion.section
        className="py-12 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>

        <form
          action="https://formsubmit.co/vyshnavisaya@gmail.com"
          method="POST"
          className="max-w-xl mx-auto text-left space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border border-[#E9762B] bg-[#F5ECD5] text-[#E9762B] placeholder-[#E9762B]/70 rounded focus:outline-none focus:ring-2 focus:ring-[#E9762B]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-[#E9762B] bg-[#F5ECD5] text-[#E9762B] placeholder-[#E9762B]/70 rounded focus:outline-none focus:ring-2 focus:ring-[#E9762B]"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full px-4 py-2 border border-[#E9762B] bg-[#F5ECD5] text-[#E9762B] placeholder-[#E9762B]/70 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#E9762B]"
          />
          <button className="px-6 py-2 bg-[#E9762B] text-white font-semibold rounded hover:bg-[#d86522] transition-all duration-200">
            Send Message
          </button>
        </form>

        {/* Instagram Contact */}
        <div className="mt-10 flex justify-center items-center gap-3">
          <a
            href="https://www.instagram.com/dope_af62/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#E9762B] hover:underline"
          >
            <img src={InstaIcon} alt="Instagram" className="w-6 h-6" />
            <span className="text-lg font-medium">Reach us at...</span>
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
