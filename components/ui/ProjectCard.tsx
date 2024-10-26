import React from "react";
import { CardBody, CardContainer, CardItem } from "./CardContainer";
import Link from "next/link";
import Image from "next/image";
import { getRandomColor } from "@/utils";

type ProjectCardProps = {
  index: number;
  name: string;
  image: string;
  description: string;
  tags: string[];
  detail_link: string;
  web_demo: string;
};
const ProjectCard = ({
  index,
  name,
  image,
  description,
  tags,
  detail_link,
  web_demo,
}: ProjectCardProps) => {
  return (
    <CardContainer className="inter-var" key={index}>
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          as="h1"
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="30" className="w-full mt-4">
          <Image
            src={image}
            width="300"
            height="400"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem translateZ="20" className="w-full mt-4 flex flex-wrap gap-0.5">
          {tags.map((tag, idx) => (
            <span
              key={`${idx}-${tag}`}
              className={`text-[14px] text-${getRandomColor()}`}
            >
              #{tag}
            </span>
          ))}
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={detail_link}
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Detail
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={web_demo}
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Demo
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
export { ProjectCard };
