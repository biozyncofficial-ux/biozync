import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Instagram, Twitter, Github, Globe } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/mxp58x51bryty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400 rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-600 rounded-full opacity-5 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-500 bg-clip-text text-transparent animate-pulse">
            Get in Touch
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions, ideas, or want to collaborate? We'd love to hear from you and explore the possibilities together.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="group relative bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 hover:border-teal-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-300 mb-3">Email</h3>
              <a 
                href="mailto:contact@biozync.org" 
                className="text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300 break-words"
              >
                contact@biozync.org
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 hover:border-teal-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-300 mb-3">Phone</h3>
              <a 
                href="tel:+919876543210" 
                className="text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div className="group relative bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 hover:border-teal-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-300 mb-3">Address</h3>
              <span className="text-lg text-gray-300">Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <div className="bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-8 h-8 text-teal-400" />
              <h2 className="text-3xl font-bold text-teal-300">Connect with us</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <a 
                href="https://linkedin.com/company/biozync" 
                className="group flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-teal-500/10 hover:border-teal-400/30 hover:bg-teal-500/5 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
                <span className="text-gray-300 group-hover:text-teal-300">LinkedIn</span>
              </a>
              <a 
                href="https://instagram.com/biozync" 
                className="group flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-teal-500/10 hover:border-teal-400/30 hover:bg-teal-500/5 transition-all duration-300"
              >
                <Instagram className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
                <span className="text-gray-300 group-hover:text-teal-300">Instagram</span>
              </a>
              <a 
                href="https://twitter.com/biozync" 
                className="group flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-teal-500/10 hover:border-teal-400/30 hover:bg-teal-500/5 transition-all duration-300"
              >
                <Twitter className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
                <span className="text-gray-300 group-hover:text-teal-300">Twitter</span>
              </a>
              <a 
                href="https://github.com/biozync" 
                className="group flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-teal-500/10 hover:border-teal-400/30 hover:bg-teal-500/5 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
                <span className="text-gray-300 group-hover:text-teal-300">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <div className="bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 lg:p-12">
            <h2 className="text-4xl font-bold text-teal-300 mb-8 text-center">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg text-teal-300 text-center">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-center">
                ❌ Failed to send message. Please try again later.
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-lg font-medium text-teal-300 mb-2">
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
                
                <div className="group">
                  <label htmlFor="email" className="block text-lg font-medium text-teal-300 mb-2">
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

              <div className="group">
                <label htmlFor="subject" className="block text-lg font-medium text-teal-300 mb-2">
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

              <div className="group">
                <label htmlFor="message" className="block text-lg font-medium text-teal-300 mb-2">
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

              <button
                onClick={handleSubmit}
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
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Clock className="w-8 h-8 text-teal-400" />
            <h2 className="text-3xl font-bold text-teal-300">Business Hours</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 px-4 bg-black/30 rounded-lg border border-teal-500/10">
              <span className="text-lg text-gray-300 font-medium">Monday - Friday</span>
              <span className="text-lg text-teal-300">9:00 AM - 6:00 PM IST</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 bg-black/30 rounded-lg border border-teal-500/10">
              <span className="text-lg text-gray-300 font-medium">Saturday</span>
              <span className="text-lg text-teal-300">10:00 AM - 4:00 PM IST</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 bg-black/30 rounded-lg border border-teal-500/10">
              <span className="text-lg text-gray-300 font-medium">Sunday</span>
              <span className="text-lg text-red-400">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}