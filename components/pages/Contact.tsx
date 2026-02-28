"use client";

import Image from "next/image";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Contact"
      className="w-full min-h-screen bg-[#F3F3F3] flex items-start justify-center lg:px-3 md:px-3 px-3 relative overflow-hidden"
    >
      <div className="w-full py-3">
        <div className="relative w-full rounded-[32px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="object-cover"
              src="/img/bgconatct.svg"
              alt="Background"
              fill
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 px-6 py-12 lg:px-12 xl:px-16 gap-8 lg:gap-15">
            <div className=" flex flex-col justify-around items-start gap-8 text-white min-h-150">
              <div>
                <p className="text-4xl lg:text-7xl font-semibold leading-tight tracking-normal pb-3">
                  Let&apos;s Grow Together
                </p>
                <p className="text-lg lg:text-2xl text-[#A5A5A5] shrink-0">
                  Reach Out To Our Team For Expert Support And Inquiries
                </p>

              </div>
              <div className="w-full h-px bg-white/30 rounded-full"></div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <svg
                    className="w-10 h-10 md:w-15 md:h-15"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.5 22.5C42.5 32.175 34.1 40 23.75 40L21.425 42.8L20.05 44.4501C18.875 45.8501 16.625 45.55 15.85 43.875L12.5 36.4999C7.95 33.2999 5 28.225 5 22.5C5 12.825 13.4 5 23.75 5C31.3 5 37.825 9.17502 40.75 15.175C41.875 17.4 42.5 19.875 42.5 22.5Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M55.0008 32.1507C55.0008 37.8757 52.0508 42.9508 47.5008 46.1508L44.1508 53.5257C43.3758 55.2007 41.1258 55.5258 39.9508 54.1008L36.2508 49.6507C30.2008 49.6507 24.8008 46.9758 21.4258 42.8008L23.7508 40.0008C34.1008 40.0008 42.5008 32.1758 42.5008 22.5008C42.5008 19.8758 41.8758 17.4008 40.7508 15.1758C48.9258 17.0508 55.0008 23.9507 55.0008 32.1507Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 22.5H30"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-2xl py-2 mt-2 font-semibold">
                    Fast Response
                  </p>
                  <p className="text-sm text-gray-300">
                    Quick and attentive communication to keep
                  </p>
                  <p className="text-sm text-gray-300">
                    everything moving smoothly and efficiently.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="relative">
                    <svg
                      className="w-10 h-10 md:w-15 md:h-15"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.7496 42.5H45.2246C49.9746 42.5 52.4746 40 52.4746 35.25V5H7.47461V35.25C7.49961 40 9.99962 42.5 14.7496 42.5Z"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 5H55"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 55L30 50V42.5"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40 55L30 50"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.75 27.5L26.625 20.925C27.25 20.4 28.075 20.55 28.5 21.25L31.5 26.25C31.925 26.95 32.75 27.075 33.375 26.575L41.25 20"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-2xl font-semibold py-2 mt-2">
                      Structured Next Steps
                    </p>
                    <p className="text-sm text-gray-300">
                      Simple and well-outlined actions that guide your
                    </p>

                    <p className="text-sm text-gray-300">
                      progress with clear direction and precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end items-center">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full lg:w-5/6 bg-[#fafafa] p-8 rounded-xl backdrop-blur-md space-y-5"
              >

                <p className="text-xl xl:text-4xl text-center md:text-3xl text-[#131313] font-semibold leading-tight">
                  Have Questions Or Would Like To Discuss Further?
                </p>

                {submitStatus.type && (
                  <div
                    className={`p-3 rounded-lg ${submitStatus.type === "success"
                      ? "bg-green-100 text-[#1F4941]"
                      : "bg-red-100 text-red-800"
                      }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg text-[#131313] font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-[#131313] placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-[#131313] font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-[#131313] placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg text-[#131313] font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder="Start typing your message here"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-[#131313] placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1a5850] text-white font-semibold py-3 rounded-lg hover:bg-[#145046] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  By submitting, you acknowledge and accept my terms and privacy policy, along with the way your data will be managed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
