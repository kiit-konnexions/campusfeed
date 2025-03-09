"use client";

import Image from "next/image";
import { useState } from "react";

export function FeatureCard({ id, title, description, icon }) {
  return (
    <div className="flex min-h-fit w-full flex-col items-start justify-between rounded-2xl border-2 border-[#8690b1] bg-background px-10 py-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-10 text-left text-xl font-thin text-gray-700">
        {description}
      </p>
      <div className="mt-20 flex w-full items-center justify-between">
        <Image
          src={icon}
          height={60}
          width={60}
          alt="icon"
          className="mb-4 shrink-0 rounded-2xl border-2 border-[#8690b1] fill-white object-contain p-3 shadow-inner"
        />
        <span className="font-semibold">FEATURE {id}</span>
      </div>
    </div>
  );
}

export default function Features() {
  const [features] = useState([
    {
      title: "One Platform for All",
      description:
        "A central hub for all announcements, featuring exciting event notifications, and opportunities for society recruitment, designed to be easily accessible for students, teachers alike.",
      icon: "globe.svg",
    },
    {
      title: "Realtime Updates",
      description:
        "Stay informed with instant notifications that deliver real-time updates on crucial announcements, exciting events, and important academic notices, ensuring you never miss a key moment or opportunity.",
      icon: "clock.svg",
    },
    {
      title: "Easy to Manage",
      description:
        "It simplifies announcement management. With a user-friendly interface, you can quickly post, edit, and organize updates. It's easy for admins, teachers, and students to keep track of important information.",
      icon: "settings.svg",
    },
  ]);

  return (
    <section
      id="features"
      className="relative isolate overflow-hidden bg-transparent px-6 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-60 -z-10 transform-gpu overflow-visible blur-3xl sm:-top-8"
      >
        <Image
          src="/ellipse.svg"
          alt="ellipse"
          width={1440}
          height={578}
          className="right-[calc(50%-11rem)] aspect-square w-[36.125rem] translate-x-[100%] opacity-50 sm:right-[calc(50%-45rem)] sm:w-[60.1875rem]"
        />
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h6 className="mb-2 hidden font-sans text-base/normal font-normal uppercase text-slate-600 md:block">
            What sets us apart
          </h6>
          <h1 className="text-pretty font-sans text-5xl font-semibold">
            Features
          </h1>
          <h3 className="text-7 mt-6 font-sans text-slate-600">
            We provide a wide range of features to make your experience better.
          </h3>
        </div>
        <div className="mt-6 flex min-h-[50vh] flex-col items-center justify-center py-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} id={index + 1} {...feature} />
            ))}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-23rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-60rem)]"
      >
        <Image
          src="/ellipse.svg"
          alt="ellipse"
          width={1440}
          height={578}
          className="relative right-[calc(50%+3rem)] aspect-square w-[36.125rem] translate-x-1/2 opacity-50 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
}
