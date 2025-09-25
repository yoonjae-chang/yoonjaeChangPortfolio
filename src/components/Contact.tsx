"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });



  return (
    <section id="contact" className="[@media(min-width:824px)]:py-15 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center [@media(min-width:824px)]:mb-16 mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact Me!
          </h2>
        </div> */}

        <div className="grid [@media(min-width:824px)]:grid-cols-2 grid-cols-1 [@media(min-width:824px)]:gap-12 gap-2 [@media(min-width:824px)]:px-0 px-10">
          {/* Contact Information */}
          <div>
            <h3 className="[@media(min-width:824px)]:text-4xl text-3xl font-bold [@media(min-width:824px)]:mb-6 mb-4">Get In Touch!</h3>
            <p className=" mb-8 leading-relaxed text-primary-foreground [@media(min-width:824px)]:text-[18px] text-[16px]">
            I&apos;m always open to discussing new opportunities, exciting projects, or just having a chat about technology and development. Feel free to reach out!
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s create something amazing together!            </p>
          </div>

          <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors group"
              >
                <div className="[@media(min-width:824px)]:w-12 [@media(min-width:824px)]:h-12 w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                  <svg className="w-6 h-6 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-foreground/70 [@media(min-width:824px)]:text-lg text-base font-bold">Email</h4>
                  <p className="text-foreground/70 [@media(min-width:824px)]:text-[18px] text-[16px]">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors group"
              >
                <div className="[@media(min-width:824px)]:w-12 [@media(min-width:824px)]:h-12 w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                  <svg className="w-6 h-6 text-foreground/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-foreground/70 [@media(min-width:824px)]:text-lg text-base font-bold">LinkedIn</h4>
                  <p className="text-foreground/70 [@media(min-width:824px)]:text-[18px] text-[16px]">Connect with me</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors group"
              >
                <div className="[@media(min-width:824px)]:w-12 [@media(min-width:824px)]:h-12 w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                  <svg className="w-6 h-6 text-foreground/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-foreground/70 [@media(min-width:824px)]:text-lg text-base font-bold">GitHub</h4>
                  <p className="text-foreground/70 [@media(min-width:824px)]:text-[18px] text-[16px]">Check out my code</p>
                </div>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
