import React, { useState } from "react";
import { Send, Linkedin, Instagram, Twitter, Github } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/mxp58x51bryty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 lg:p-12">
      <h2 className="text-4xl font-bold text-teal-300 mb-8 text-center">
        Send us a Message
      </h2>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg text-teal-300 text-center">
          ✅ Message sent successfully! We'll get back to you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-center">
          ❌ Failed to send message. Please try again later.
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-teal-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-black/60 border border-teal-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-teal-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-black/60 border border-teal-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-lg font-medium text-teal-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 bg-black/60 border border-teal-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
            placeholder="What's this about?"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-teal-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-3 bg-black/60 border border-teal-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 resize-none"
            placeholder="Tell us more about your inquiry..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center gap-3">
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-6 h-6" />
                <span>Send Message</span>
              </>
            )}
          </div>
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-teal-300 mb-4">
          Connect with us
        </h3>
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/company/sample"
            className="flex items-center gap-2 text-gray-300 hover:text-teal-300 transition-colors"
          >
            <Linkedin className="w-6 h-6" /> LinkedIn
          </a>
          <a
            href="https://instagram.com/sample"
            className="flex items-center gap-2 text-gray-300 hover:text-teal-300 transition-colors"
          >
            <Instagram className="w-6 h-6" /> Instagram
          </a>
          <a
            href="https://twitter.com/sample"
            className="flex items-center gap-2 text-gray-300 hover:text-teal-300 transition-colors"
          >
            <Twitter className="w-6 h-6" /> Twitter
          </a>
          <a
            href="https://github.com/sample"
            className="flex items-center gap-2 text-gray-300 hover:text-teal-300 transition-colors"
          >
            <Github className="w-6 h-6" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
