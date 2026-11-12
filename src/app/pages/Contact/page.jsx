"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { profile } from "../../data/profile";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    emailjs.init("j-PE1Tl4YIEGpVPzJ");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm("service_tv12bji", "template_0j1nkxi", event.currentTarget);
      event.currentTarget.reset();
      setStatus("success");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-surface-background px-6 py-14 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <section className="lg:pt-8">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#7BFFAF]">Contact</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white lg:text-5xl">
            Let&apos;s build something thoughtful.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary">
            Whether you are hiring, exploring a research collaboration, or have a software problem worth discussing, send me a message and I will get back to you.
          </p>

          <div className="mt-10 space-y-4">
            <a href={`mailto:${profile.email}`} className="block rounded-xl border border-[#403650] bg-surface-secondary p-5 transition hover:border-[#7BFFAF]">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#817590]">Email</span>
              <p className="mt-2 text-sm text-white">{profile.email}</p>
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[#403650] bg-surface-secondary p-4 text-sm text-white transition hover:border-[#7BFFAF]">
                <Image src="/logo-github 1.svg" width={24} height={24} alt="" />
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[#403650] bg-surface-secondary p-4 text-sm text-white transition hover:border-[#7BFFAF]">
                <Image src="/logo-linkedin 1.svg" width={24} height={24} alt="" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#403650] bg-surface-secondary p-6 sm:p-9">
          <h2 className="text-xl font-semibold text-white">Send a message</h2>
          <p className="mt-2 text-xs leading-5 text-text-secondary">Tell me a little about you and what you would like to discuss.</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="from_name" className="mb-2 block text-xs font-medium text-[#D6D1DC]">Name</label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-[#4E4563] bg-surface-background px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#6F667B] focus:border-[#7BFFAF]"
              />
            </div>
            <div>
              <label htmlFor="from_email" className="mb-2 block text-xs font-medium text-[#D6D1DC]">Email</label>
              <input
                id="from_email"
                type="email"
                name="from_email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#4E4563] bg-surface-background px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#6F667B] focus:border-[#7BFFAF]"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium text-[#D6D1DC]">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="What would you like to build or discuss?"
                className="w-full resize-none rounded-lg border border-[#4E4563] bg-surface-background px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#6F667B] focus:border-[#7BFFAF]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-3 rounded-lg bg-[#8A42DB] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#9955E8] disabled:cursor-wait disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <Image src="/ArrowRight.svg" width={18} height={18} alt="" />
            </button>

            {status === "success" && (
              <p className="text-sm text-[#7BFFAF]" role="status">Your message was sent successfully.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-[#FF8FA3]" role="alert">The message could not be sent. Please email me directly instead.</p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}
