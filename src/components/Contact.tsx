"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value, 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, we'll just show success and reset the form
      // In a real implementation, you'd send this to your backend or a service like Formspree
      console.log("Form submitted:", formData);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development. Feel free to reach out!
            </p>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                  <svg className="w-6 h-6 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-foreground/70">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                  <svg className="w-6 h-6 text-foreground/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-foreground/70">Connect with me</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                  <svg className="w-6 h-6 text-foreground/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-foreground/70">Check out my code</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-foreground/5 border border-foreground/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-foreground/5 border border-foreground/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-foreground/5 border border-foreground/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background py-3 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-600 text-sm">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again or contact me directly via email.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-foreground/10 text-center">
          <p className="text-foreground/60">
            © 2025 {personalInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
