"use client";

import Image from "next/image";
import { useState } from "react";

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
      className="relative isolate overflow-hidden px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96"
      >
        <Image
          src="/ellipse.svg"
          alt="ellipse"
          width={1440}
          height={578}
          className="relative opacity-50 right-[calc(50%-11rem)] aspect-square w-[36.125rem] translate-x-1/2 sm:right-[calc(50%-45rem)] sm:w-[60.1875rem] "
        />
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h6 className="text-base/normal font-sans mb-2 hidden md:block font-normal text-slate-600 uppercase">
            What sets us apart
          </h6>
          <h1 className="text-5xl font-semibold font-sans text-pretty">
            Features
          </h1>
          <h3 className="mt-6 text-7 font-sans text-slate-600">
            We provide a wide range of features to make your experience better.
          </h3>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center min-h-[50vh] py-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-xl p-8 bg-background text-center"
              >
                <Image
                  src={feature.icon}
                  height={50}
                  width={50}
                  alt="icon"
                  className="object-contain shrink-0 p-3 bg-[#8690b1] shadow-inner rounded-2xl mx-auto mb-4 fill-white"
                />
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-700 text-base text-left">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
      >
        <Image
          src="/ellipse.svg"
          alt="ellipse"
          width={1440}
          height={578}
          className="relative opacity-50 right-[calc(50%+3rem)] aspect-square w-[36.125rem] translate-x-1/2 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
}
