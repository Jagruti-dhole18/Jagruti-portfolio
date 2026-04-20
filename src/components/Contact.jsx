import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields ❗");
      return;
    }

    setLoading(true);
    setStatus("Sending... ⏳");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setStatus("Failed to send ❌");
      });
  };

  return (
    <div className="border-b border-neutral-900 pb-20" id="contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl font-semibold text-white"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">


        <div className="space-y-6 text-gray-300">
          <h3 className="text-2xl text-white">Let’s Connect 👋</h3>

          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>{CONTACT.address}</span>
            </div>

            <div className="flex gap-3 items-center">
              <FaPhoneAlt className="text-purple-400" />
              <span>{CONTACT.phoneNo}</span>
            </div>

            <div className="flex gap-3 items-center">
              <FaEnvelope className="text-purple-400" />
              <span>{CONTACT.email}</span>
            </div>
          </div>
        </div>


        <form
          onSubmit={handleSubmit}
          className="bg-neutral-900 border border-neutral-700 p-6 rounded-2xl shadow-lg space-y-5"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-purple-500"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-purple-500"
          />

          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-purple-500"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg text-white hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm text-gray-300">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
