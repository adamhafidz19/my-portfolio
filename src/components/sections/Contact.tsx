"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  X,
} from "lucide-react";

import type { Dictionary } from "@/dictionaries";
import { resumeData } from "@/data/resumeData";
import { ContactRow } from "@/components/ui/ContactRow";

const { personal } = resumeData;

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "");

const contactLinks = [
  {
    icon: <Mail size={19} />,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <Phone size={19} />,
    label: "Phone",
    value: personal.phoneHref,
    href: `tel:${personal.phoneHref}`,
  },
  {
    icon: <Github size={19} />,
    label: "GitHub",
    value: stripProtocol(personal.socials.github),
    href: personal.socials.github,
    external: true,
  },
  {
    icon: <Linkedin size={19} />,
    label: "LinkedIn",
    value: stripProtocol(personal.socials.linkedin),
    href: personal.socials.linkedin,
    external: true,
  },
];

const gradientButton =
  "group relative inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-linear-to-r from-red-500 via-primary-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(194,24,91,0.6)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(194,24,91,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-(--background)";

function Shine() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-[350%]"
    />
  );
}

export function Contact({ dictionary }: { dictionary: Dictionary }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const headlineWords = dictionary.sections.contact.trim().split(/\s+/);
  const lastWord = headlineWords.pop();

  const openModal = () => {
    setIsClosing(false);
    setIsModalOpen(true);
  };

  // Plays the exit animation; the overlay unmounts on animationend.
  const closeModal = () => setIsClosing(true);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsClosing(true);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const saveContact = () => {
    const escapeVCard = (value: string) =>
      value
        .replace(/\\/g, "\\\\")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;")
        .replace(/\n/g, "\\n");

    const vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${escapeVCard(personal.name)}`,
      `TITLE:${escapeVCard(personal.role)}`,
      `EMAIL:${personal.email}`,
      `TEL;TYPE=CELL:${personal.phoneHref}`,
      `URL:${personal.socials.github}`,
      `URL:${personal.socials.linkedin}`,
      `ADR;TYPE=HOME:;;${escapeVCard(personal.location)};;;;`,
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${personal.name.replace(/\s+/g, "-")}.vcf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <section
        id="contact"
        className="border-t border-black/10 dark:border-white/10"
      >
        <div className="section-shell ">
          <div className="glass-panel relative isolate overflow-hidden px-6 py-14 shadow-glow sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 -z-10 size-96 rounded-full bg-primary-500/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 size-80 rounded-full bg-pink-500/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-primary-500/50 to-transparent"
            />

            <p className="eyebrow mb-5">04 / Contact</p>

            <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-zinc-950 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              {headlineWords.join(" ")}{" "}
              <span className="bg-linear-to-r from-red-500 via-primary-500 to-pink-500 bg-clip-text text-transparent">
                {lastWord}.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
              I&apos;m always open to discussing new projects, collaborations,
              or opportunities to build something meaningful. Let&apos;s turn
              good ideas into real-world digital experiences.
            </p>

            <button
              type="button"
              onClick={openModal}
              className={`${gradientButton} mt-9`}
            >
              <Shine />
              {dictionary.ui.getInTouch}
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className={`fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-zinc-950/40 p-4 backdrop-blur-sm sm:p-6 dark:bg-black/60 ${
            isClosing
              ? "animate-contact-overlay-out"
              : "animate-contact-overlay-in"
          }`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
          onAnimationEnd={(event) => {
            if (isClosing && event.target === event.currentTarget) {
              setIsModalOpen(false);
              setIsClosing(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className={`glass-card gradient-border relative my-auto w-full max-w-lg overflow-hidden rounded-[1.75rem] p-5 text-zinc-950 sm:p-8 dark:text-white ${
              isClosing ? "animate-contact-card-out" : "animate-contact-card-in"
            }`}
          >
            {/* Card glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-primary-500/20 blur-3xl dark:bg-primary-500/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-10 size-56 rounded-full bg-pink-400/15 blur-3xl dark:bg-pink-500/10"
            />

            <button
              type="button"
              onClick={closeModal}
              aria-label="Close contact details"
              autoFocus
              className="absolute right-4 top-4 z-10 rounded-full p-2 text-zinc-500 transition hover:rotate-90 hover:bg-black/5 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 sm:right-5 sm:top-5 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X size={21} />
            </button>

            <div className="relative">
              <div className="flex items-center gap-4 pr-8 sm:gap-5">
                <Image
                  src="/images/passport-picture.jpg"
                  alt={personal.name}
                  width={100}
                  height={100}
                  className="shrink-0 size-16 rounded-full bg-linear-to-br from-red-500 via-primary-500 to-pink-500 p-[2.5px] object-cover object-[center_15%] sm:size-18"
                />

                <div className="min-w-0">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      Open to opportunities
                    </span>
                  </div>
                  <h3
                    id="contact-modal-title"
                    className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
                  >
                    {personal.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {personal.role}
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-zinc-400/60 dark:bg-zinc-800 sm:my-7" />

              <div className="space-y-1">
                {contactLinks.map((link, index) => (
                  <ContactRow
                    key={link.label}
                    {...link}
                    delay={120 + index * 60}
                  />
                ))}
              </div>

              <div
                className="mt-6 grid animate-contact-card-in"
                style={{
                  animationDelay: `${120 + contactLinks.length * 60}ms`,
                }}
              >
                <button
                  type="button"
                  onClick={saveContact}
                  className={gradientButton}
                >
                  <Shine />
                  <Download
                    size={17}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                  Save Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
