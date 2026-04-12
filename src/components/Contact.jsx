import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaReddit } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Contact Form",
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY,
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000); // ← hides after 3 seconds
      })
      .catch(() => {
        alert("Something went wrong. Try again!");
      });
  };

  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Contact Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
                Let's Work Together 🚀
              </h1>

              <p className="text-gray-400 my-5">
                I'm always open to discussing new opportunities, freelance
                projects, or building scalable SaaS products. If you have an
                idea or project in mind, feel free to reach out — let's build
                something amazing together.
              </p>

              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-400 mt-2">
                <a
                  href="mailto:pundiramit06@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  pundiramit06@gmail.com
                </a>
              </p>
            </div>

            {/* SOCIALS */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-4 text-2xl mt-5">
                <a href="https://github.com/amitpundir992" target="_blank">
                  <FaGithub className=" text-blue-400" />
                </a>

                <a
                  href="https://www.linkedin.com/in/amitpundir01/"
                  target="_blank"
                >
                  <FaLinkedin className="text-blue-400" />
                </a>

                <a
                  href="https://www.reddit.com/u/Amitpundir/s/YDKnn9Edpl"
                  target="_blank"
                >
                  <FaReddit className="text-blue-500" />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label className="block text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="mt-1 w-full p-3 bg-gray-950 text-gray-300 border rounded-lg"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="mt-1 w-full p-3 bg-gray-950 text-gray-300 border rounded-lg"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="mt-1 w-full p-3 bg-gray-950 text-gray-300 border rounded-lg"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* SUCCESS POPUP */}
        {success && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            ✅ Message sent successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
