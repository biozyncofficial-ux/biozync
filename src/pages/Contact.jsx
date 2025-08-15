import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Instagram, X, Github, Globe} from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Premium background with floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-teal-500/10 mb-8">
            <h1 className="text-6xl lg:text-8xl font-thin mb-4 bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent tracking-tight">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto"></div>
          </div>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Let's create something extraordinary together. Reach out and let's turn your vision into reality.
          </p>
        </div>

        {/* Premium Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Email Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Email</h3>
              <a 
                href="mailto:contact@biozync.org" 
                className="text-lg text-slate-300 hover:text-teal-300 transition-colors duration-300 break-words font-light"
              >
                contact@biozync.org
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Phone</h3>
              <a 
                href="tel:+919876543210" 
                className="text-lg text-slate-300 hover:text-violet-300 transition-colors duration-300 font-light"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Address</h3>
              <span className="text-lg text-slate-300 font-light">Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* Premium Social Media Section */}
        <div className="mb-20">
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-light text-white">Connect with us</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a 
                href="https://www.linkedin.com/company/biozync.com/" 
                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-4">
                  <Linkedin className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-slate-300 group-hover:text-blue-300 font-light text-lg">LinkedIn</span>
                </div>
              </a>
              <a 
                href="https://www.instagram.com/biozync/" 
                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-pink-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-4">
                  <Instagram className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-slate-300 group-hover:text-pink-300 font-light text-lg">Instagram</span>
                </div>
              </a>
              <a 
                href="https://x.com/Biozync" 
                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-sky-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-4">
                  <X className="w-8 h-8 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-slate-300 group-hover:text-sky-300 font-light text-lg">X</span>
                </div>
              </a>
              
            </div>
          </div>
        </div>

        {/* Premium Contact Form */}
        <div className="mb-20">
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 lg:p-16 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-light text-white mb-4">Send us a Message</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto"></div>
            </div>
            
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-2xl text-emerald-300 text-center shadow-lg shadow-emerald-500/10">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="font-light">Message sent successfully! We'll get back to you soon.</span>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-red-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl text-red-300 text-center shadow-lg shadow-red-500/10">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✕</span>
                  </div>
                  <span className="font-light">Failed to send message. Please try again later.</span>
                </div>
              </div>
            )}

            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="name" className="block text-lg font-light text-slate-300 mb-3">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-400/50 focus:bg-white/10 transition-all duration-500 shadow-lg font-light"
                      placeholder="Your full name"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-lg font-light text-slate-300 mb-3">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-400/50 focus:bg-white/10 transition-all duration-500 shadow-lg font-light"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-lg font-light text-slate-300 mb-3">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-400/50 focus:bg-white/10 transition-all duration-500 shadow-lg font-light"
                    placeholder="What's this about?"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-lg font-light text-slate-300 mb-3">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-400/50 focus:bg-white/10 transition-all duration-500 resize-none shadow-lg font-light"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 disabled:from-slate-600 disabled:to-slate-700 px-12 py-4 rounded-2xl font-light text-white text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-2xl shadow-teal-500/25 hover:shadow-teal-400/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center justify-center gap-4">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}