"use client"
import React from "react";

const partnerLogos = [
  "https://via.placeholder.com/120x40?text=Logo+1",
  "https://via.placeholder.com/120x40?text=Logo+2",
  "https://via.placeholder.com/120x40?text=Logo+3",
  "https://via.placeholder.com/120x40?text=Logo+4",
  "https://via.placeholder.com/120x40?text=Logo+5",
];

function OfferCard({ text }: { text: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-gray-800 font-medium border border-gray-100 hover:shadow-lg transition">
      {text}
    </div>
  );
}

function TimelineBlock({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex-1 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 shadow border border-blue-100 min-w-[220px]">
      <div className="text-xl font-bold text-blue-700 mb-2">{title}</div>
      <div className="text-gray-700">{description}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-extrabold text-2xl tracking-tight text-gray-900">
            ThreePoint <span className="text-blue-600">Ventures</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-blue-600 transition font-medium">About</a>
            <a href="#timeline" className="hover:text-blue-600 transition font-medium">Timeline</a>
            <a href="#team" className="hover:text-blue-600 transition font-medium">Team</a>
            <a href="#contact" className="hover:text-blue-600 transition font-medium">Contact</a>
            <a
              href="#apply"
              className="ml-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Get Involved
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-purple-100 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Backing the <span className="text-blue-600">next generation</span> of Triangle founders.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            Empowering student entrepreneurs from <span className="font-semibold text-blue-700">Duke</span>, <span className="font-semibold text-blue-700">UNC</span>, and <span className="font-semibold text-blue-700">NC State</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:-translate-y-1 hover:bg-blue-700 transition"
            >
              Join Us
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-blue-600 text-blue-700 font-semibold bg-white hover:bg-blue-50 hover:-translate-y-1 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-8">
          {partnerLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Partner logo"
              className="h-10 w-auto grayscale opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why ThreePoint?</h2>
          <p className="text-lg text-gray-700">
            The Triangle region is home to world-class students and underutilized startup infrastructure. Our mission is to activate student-led innovation by connecting founders with mentorship, capital, and legal resources—empowering the next wave of entrepreneurs from Duke, UNC, and NC State.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">What We're Building</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <OfferCard text="Fellowship program for student ventures" />
            <OfferCard text="Mentorship from alumni & VCs" />
            <OfferCard text="Legal & incorporation resources" />
            <OfferCard text="Demo Day for investors" />
            <OfferCard text="Triangle-wide founder community" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Our Launch Plan</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <TimelineBlock
              title="Summer 2025"
              description="Build team, finalize advisors, soft launch"
            />
            <TimelineBlock
              title="Fall 2025"
              description="Run first cohort, host Demo Day"
            />
            <TimelineBlock
              title="Spring 2026"
              description="Expand, formalize funding + partnerships"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-blue-50 via-white to-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Interested in joining as a student, mentor, or sponsor? Reach out and let's build the future of the Triangle together.
          </p>
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 outline-none"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 outline-none"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100 mt-auto">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <div>
            © 2025 ThreePoint Ventures
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@threepointvc.com" className="hover:text-blue-600 transition">info@threepointvc.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M16.338 16.338h-2.307v-3.569c0-.85-.016-1.944-1.185-1.944-1.186 0-1.367.925-1.367 1.88v3.633H9.172V8.75h2.214v1.034h.031c.308-.584 1.06-1.2 2.182-1.2 2.334 0 2.765 1.537 2.765 3.537v4.217zM5.337 7.717a1.338 1.338 0 1 1 0-2.676 1.338 1.338 0 0 1 0 2.676zm1.154 8.621H4.183V8.75h2.308v7.588zM17.667 2H2.333A.333.333 0 0 0 2 2.333v15.334c0 .184.149.333.333.333h15.334a.333.333 0 0 0 .333-.333V2.333A.333.333 0 0 0 17.667 2z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
