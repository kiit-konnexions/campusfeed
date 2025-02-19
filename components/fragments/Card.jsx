import { Card, CardBody, CardFooter, Image, Link } from "@heroui/react";
import { FaGithub } from "react-icons/fa";

const ImageCard = ({ title, subtitle = "subtext", image, github }) => {
  return (
    <Card
      isPressable
      className="bg-gradient-to-b from-slate-800 to-neutral-100 select-none group shrink-0 w-[160px] snap-center h-full rounded-xl hover:scale-105 transform-all duration-200 ease-in-out"
      shadow="lg"
    >
      <CardBody className="overflow-visible p-2">
        <div className="flex aspect-square overflow-hidden rounded-xl items-center justify-center">
          <Image
            shadow="sm"
            alt={title}
            className="object-cover w-[160px] h-[160px]"
            src={image}
          />
        </div>
      </CardBody>
      <CardFooter className="justify-between flex flex-row text-neutral-900 w-full">
        <div className="flex flex-col w-[75%] gap-2 items-center justify-start">
          <h1 className="text-left font-bold text-md w-full">{title}</h1>
          <h1 className="text-left text-sm w-full">{subtitle}</h1>
        </div>
        <div className="flex items-end justify-end w-[20%] h-full">
          <Link href={github} target="_blank">
            <FaGithub className="text-2xl" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
