import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import { Toaster, toast } from 'react-hot-toast';


const Cont = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_wc18mz2", // Replace with your EmailJS service ID
          "template_727dl66", // Replace with your EmailJS template ID
          formData,
          "sVkVCvNwNpDDxLAn8" // Replace with your EmailJS public key
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="p-4 lg:w-1/2 mx-auto">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Let's Connect</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-4 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="mb-4 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-4 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            rows="5"
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full rounded-lg bg-blue-500 text-white py-2 text-sm font-semibold hover:bg-blue-600 transition ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Sending..." : "Send"}
            
          </div>
        </button>
      </form>
    </div>
  );
};

export default Cont;