"use client";

import React, { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, Send, PhoneOutgoing } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    module: "Contact Us", // Default value for the module
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      const { name, email, phone, module, description } = formData;

      // Send form data to the API
      await axios.post("/api/contact", {
        name,
        email,
        phone,
        module, // Defaults to "Contact Us"
        description,
      });

      setSubmitted(true);

      // Reset the form after submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          module: "Contact Us", // Reset default value
          description: "",
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Failed to send your message. Please try again later.");
      console.error("Error submitting form:", err);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3   rounded-full mb-6">
            <PhoneOutgoing className="w-10 h-10  " />
          </div>
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl">
            We'd love to hear from you. Reach out today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-lg shadow-lg dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary py-3 rounded-lg hover:bg-primary-dark transition duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div
                  className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">
                    Thank you for your message! We'll get back to you soon.
                  </span>
                </div>
              )}

              {error && (
                <div
                  className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="p-6 rounded-lg shadow-lg dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)]">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:contact@fitnesshub.com"
                      className="hover:text-primary"
                    >
                      contact@fitnesshub.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+1234567890" className="hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>123 Fitness Street, Health City, FT 54321</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map (Placeholder)
            <div className="  p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold   mb-6">Our Location</h3>
              <div className="w-full h-64   rounded-lg flex items-center justify-center">
                <p className=" ">
                  Map Placeholder
                  <br />
                  (Integrate Google Maps or other mapping service)
                </p>
              </div>
            </div> */}

            {/* Business Hours */}
            <div className="p-6 rounded-lg shadow-lg dark:shadow-[0px_4px_12px_rgba(102,126,234,0.4)]">
              <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
