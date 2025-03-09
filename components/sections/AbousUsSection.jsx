import teamData from "@/public/data/teamData.json";
import ImageCard from "../fragments/Card";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section
      id="about"
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
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-23rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-60rem)]"
      >
        <Image
          src="/ellipse.svg"
          alt="ellipse"
          width={1440}
          height={578}
          className="relative right-[calc(50%+3rem)] aspect-square w-[36.125rem] translate-x-1/2 opacity-60 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
