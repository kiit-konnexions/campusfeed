"use client";

import Image from "next/image";
import { useState } from "react";

export function FeatureCard({id, title, description, icon}) {
  return (
    <div className="rounded-2xl py-8 px-10 bg-background w-full min-h-fit flex flex-col border-[#8690b1] border-2 items-start justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-left mt-10 text-xl font-thin text-gray-700">
        {description}
      </p>
      <div className="mt-20 flex items-center justify-between w-full">
        <Image
          src={icon}
          height={60}
          width={60}
          alt="icon"
          className="object-contain shrink-0 p-3 border-[#8690b1] border-1 bg-gradient-to-tr from-[#8690b1] to-transparent shadow-inner rounded-2xl mb-4 fill-white"
        />
        <span className="font-semibold">
          FEATURE {id}
        </span>
      </div>
    </div>
  )
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
      className="relative isolate overflow-hidden px-6 lg:px-16"
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
          className="relative opacity-50 right-[calc(50%-11rem)] aspect-square w-[36.125rem] translate-x-[100%] sm:right-[calc(50%-45rem)] sm:w-[60.1875rem] "
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
              <FeatureCard key={index} id={index + 1} {...feature} />
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
