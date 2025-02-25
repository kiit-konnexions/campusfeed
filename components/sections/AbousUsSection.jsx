import teamData from "@/public/data/teamData.json";
import ImageCard from "../fragments/Card";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-6 lg:px-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96"
      >
        <Image
          src="ellipse.svg"
          alt="ellipse"
          width={1440}
          height={578}
          className="z-80 relative right-0 aspect-square w-[36.125rem] translate-x-[100%] opacity-50 sm:right-[calc(50%-45rem)] sm:w-[60.1875rem]"
        />
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-pretty font-sans text-5xl font-semibold">
            Meet Our Team
          </h1>
          <h3 className="text-7 mt-6 font-sans text-slate-600">
            Meet the developers and designers behind this awesome project.
          </h3>
        </div>
        <div className="mt-6 flex min-h-[50vh] flex-col items-center justify-center py-2">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
            {teamData.map((member) => (
              <ImageCard
                key={member.id}
                title={member.title}
                subtitle={member.subtitle}
                image={member.image}
                github={member.github}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
