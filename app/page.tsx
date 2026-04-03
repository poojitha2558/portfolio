"use client";

import { motion } from "framer-motion";
import { useRef, RefObject } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden" style={{ backgroundImage: 'url(/starry-night.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>

      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-black/30" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-yellow-400/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-center gap-3 md:gap-8 flex-wrap">
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className="text-yellow-300 hover:text-yellow-400 transition font-semibold text-sm md:text-base"
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection(skillsRef)}
            className="text-yellow-300 hover:text-yellow-400 transition font-semibold text-sm md:text-base"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection(experienceRef)}
            className="text-yellow-300 hover:text-yellow-400 transition font-semibold text-sm md:text-base"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection(projectsRef)}
            className="text-yellow-300 hover:text-yellow-400 transition font-semibold text-sm md:text-base"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)}
            className="text-yellow-300 hover:text-yellow-400 transition font-semibold text-sm md:text-base"
          >
            Contact
          </button>
        </div>
      </nav>

      <div className="relative z-20">

        {/* Hero */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Engineer • Designer • Problem Solver
          </motion.h1>

          <p className="mt-4 text-2xl text-yellow-300">
            Hi, I’m Poojitha Sukamanchi — Associate Software Engineer
          </p>

          <button onClick={() => scrollToSection(projectsRef)} className="mt-6 px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:scale-110 transition shadow-[0_0_25px_rgba(250,204,21,0.9)]">
            View Projects
          </button>
        </section>

        {/* About */}
        <section ref={aboutRef} className="p-10 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-300">About Me</h2>
            <p className="text-blue-100">
              Associate Software Engineer at Bazaarvoice with 9 months full-time experience and 6 months internship experience. B.Tech in Computer Science with CGPA 9.05. I'm a developer and designer who loves crafting beautiful, scalable digital experiences. Whether building robust backend systems with Spring Boot or designing intuitive UIs with React and Figma, I'm passionate about bridging the gap between engineering and design. I love sketching ideas, prototyping user flows, and translating designs into elegant, performant code.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section ref={skillsRef} className="p-10 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-300">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React.js","Next.js","Tailwind","TypeScript",
              "Node.js","Express","Spring Boot","AWS",
              "Docker","Jenkins","MongoDB","PostgreSQL",
              "UI/UX","React Native", "Git", "Tableau"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/5 backdrop-blur-xl border border-yellow-200/20 p-4 rounded-xl text-center hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section ref={experienceRef} className="p-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-300">Experience</h2>
          <div className="relative border-l border-yellow-400/40 pl-6">
            <div className="mb-6">
              <div className="absolute -left-3 w-6 h-6 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15]" />
              <h3 className="font-bold text-lg">Bazaarvoice</h3>
              <p className="text-yellow-200">Associate Software Engineer</p>
              <p className="text-xs text-gray-400">July 2025 – Present | Bengaluru, India</p>

              <ul className="list-disc ml-4 text-sm mt-2 text-blue-100">
                <li>Built and maintained scalable backend services using Spring Boot, ensuring high performance and reliability.</li>
                <li>Migrated legacy CI/CD pipelines from Jenkins to GitHub Actions, improving deployment automation and reducing build
time by 40%</li>
                <li>Added DORA metrics tracking across 10+ repository pipelines, improving visibility into deployment frequency, lead
time, and production release performance.</li>
                <li>Developed and integrated feature flags to enable controlled rollouts and safer production releases.</li>
                <li>Contributed to UI/UX design processes, ensuring a seamless and user-friendly interface.</li>
                <li>Strengthened application security by implementing input sanitization using OWASP AntiSamy, mitigating XSS vulnerabilities.</li>
              </ul>
            </div>
          </div>
          <div className="relative border-l border-yellow-400/40 pl-6">
            <div className="mb-6">
              <div className="absolute -left-3 w-6 h-6 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15]" />
              <h3 className="font-bold text-lg">Bazaarvoice</h3>
              <p className="text-yellow-200">Software Engineering Intern - Portal IAM</p>
              <p className="text-xs text-gray-400">Jan 2025 – July 2025 | Bengaluru, India</p>
              <ul className="list-disc ml-4 text-sm mt-2 text-blue-100">
                <li>Redesigned the Users and Permissions page UI using React.js, TypeScript, and the Aperture design system, implementing multi-select filters, pagination, and infinite scrolling.</li>
                <li>Integrated RESTful APIs with frontend components using JavaScript and Axios to enable dynamic content loading.</li>
                <li>Designed and developed context-specific email templates, significantly improving client communication and user experience.</li>
                <li>Participated in creating and maintaining documentation for SSO and portal login flows, improving clarity for developers and support teams.</li>
              </ul>
            </div>
          </div>
          <div className="relative border-l border-yellow-400/40 pl-6">
            <div className="mb-6">
              <div className="absolute -left-3 w-6 h-6 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15]" />
              <h3 className="font-bold text-lg">MePicks</h3>
              <p className="text-yellow-200">UI/UX Designer Intern</p>
              <p className="text-xs text-gray-400">May 2024 – Sept 2024 | Remote</p>
              <ul className="list-disc ml-4 text-sm mt-2 text-blue-100">
                <li>Designed intuitive and user-centric UI screens using Figma, focusing on usability, accessibility, and visual consistency.</li>
                <li>Created wireframes, user flows, and interactive prototypes to improve user engagement and product experience.</li>
                <li>Collaborated with backend engineers to refine API design and improve response consistency.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section ref={projectsRef} className="p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-300">Projects</h2>
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-yellow-200/20 p-6 rounded-2xl hover:shadow-[0_0_35px_rgba(250,204,21,0.9)] transition">
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">CodeAlong</h3>
              <p className="text-xs text-gray-400 mb-3">Next.js, Tailwind CSS, Judge0 API, LocalStorage | 2025</p>
              <ul className="list-disc ml-4 text-sm text-blue-100 space-y-1">
                <li>Developed an interactive web-based platform that allows users to watch coding tutorials and write code in real time using an in-browser compiler.</li>
                <li>Implemented AI-based fallbacks to handle API rate limits and ensure uninterrupted code execution.</li>
                <li>Added manual video tracking and multi-language support to enhance learning experience and usability.</li>
              </ul>
              <div className="flex gap-2 text-xs mt-4 flex-wrap">
                {["Next.js", "Tailwind CSS", "Judge0 API", "LocalStorage"].map(t => (
                  <span key={t} className="bg-yellow-400/20 text-yellow-200 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-yellow-200/20 p-6 rounded-2xl hover:shadow-[0_0_35px_rgba(250,204,21,0.9)] transition">
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">Twitter Sentiment Prediction</h3>
              <p className="text-xs text-gray-400 mb-3">Python, Scikit-learn, NLTK, CNNs | 2024</p>
              <ul className="list-disc ml-4 text-sm text-blue-100 space-y-1">
                <li>Performed sentiment analysis on 1.4 million tweets to classify text as positive or negative.</li>
                <li>Improved prediction accuracy using CNN-based models and advanced NLP preprocessing techniques.</li>
                <li>Applied feature extraction and text normalization techniques to enhance model performance.</li>
              </ul>
              <div className="flex gap-2 text-xs mt-4 flex-wrap">
                {["Python", "Scikit-learn", "NLTK", "CNNs"].map(t => (
                  <span key={t} className="bg-yellow-400/20 text-yellow-200 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-yellow-200/20 p-6 rounded-2xl hover:shadow-[0_0_35px_rgba(250,204,21,0.9)] transition">
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">AI Resume Builder</h3>
              <p className="text-xs text-gray-400 mb-3">React.js, Tailwind CSS, Gemini API | 2025</p>
              <ul className="list-disc ml-4 text-sm text-blue-100 space-y-1">
                <li>Built a web application leveraging Google Gemini AI to generate tailored resumes, cover letters, and ATS compatibility insights.</li>
                <li>Designed a modern, responsive UI using a glassmorphism design system to improve user engagement.</li>
                <li>Implemented secure API integrations and enforced code quality using ESLint and Git-based workflows.</li>
              </ul>
              <div className="flex gap-2 text-xs mt-4 flex-wrap">
                {["React.js", "Tailwind CSS", "Gemini API"].map(t => (
                  <span key={t} className="bg-yellow-400/20 text-yellow-200 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section ref={contactRef} className="p-10 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Contact</h2>
          <p className="text-yellow-200">poojithasukamanchi@gmail.com</p>
          <a href="mailto:poojithasukamanchi@gmail.com" className="inline-block mt-4 px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:scale-110 transition shadow-[0_0_25px_rgba(250,204,21,0.9)]">
            Send Message
          </a>
        </section>
      </div>

      <style jsx global>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 80s linear infinite;
        }
      `}</style>
    </main>
  );
}
