import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // import ShadCN button

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      // Simulate API call
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="shadow shadow-amber-100 p-5 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-black text-white shadow-md rounded-lg p-6"
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1 text-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1 text-white"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1 text-white"
            placeholder="Your message"
          ></textarea>
        </div>

        {/* ✅ Updated ShadCN Button */}
        <Button type="submit" className="w-full text-white bg-gray-600 hover:bg-blue-800">
          Send Message
        </Button>

        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
    </section>
  );
}
