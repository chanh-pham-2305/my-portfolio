"use client";
import { skills } from "@/constants";
import { SkillVisible } from "./SkillVisible";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Skills = () => {
  const skill_text = {
    title: "My skills",
    description:
      "With my current technical and soft skills, I will strive to develop and become a more experienced developer.",
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center h-screen relative text-white pt-20"
    >
      <div>
        {/* title */}
        <h1 className="text-3xl font-bold">{skill_text.title}</h1>
        {/* description */}
        <TextGenerateEffect words={skill_text.description} />
      </div>

      {/* skills */}
      <div className="flex flex-col justify-center items-center gap-5 mt-5">
        {skills.map((level, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between gap-3"
          >
            {level.map((skill, index) => (
              <SkillVisible key={index} name={skill} index={index} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export { Skills };
