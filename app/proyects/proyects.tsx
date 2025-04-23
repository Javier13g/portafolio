"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NetIcon, ReactIcon, SqlServerIcon, TypescriptIcon, VueIcon } from "../images/languagesIcons";
import { Translations, useLanguage } from "../context/LanguajeContext";

const rawProjects = [
  {
    title: "titleProjectOne",
    description: "projectOne",
    technologies: [<ReactIcon size={50} key="react" />, <NetIcon size={50} key="net" />, <TypescriptIcon size={50} key="typescript" />, <SqlServerIcon size={50} key="sql" />]
  },
  {
    title: "titleProjectTwo",
    description: "projectTwo",
    technologies: [<VueIcon size={50} key="vue" />, <NetIcon size={50} key="net" />, <SqlServerIcon size={50} key="sql" />]
  },
];

export default function Projects() {
  const { translate } = useLanguage();

  const projects = rawProjects.map(p => ({
    ...p,
    title: translate(p.title as keyof Translations),
    description: translate(p.description as keyof Translations),
  }));

  return (
    <section id="projects" className="py-16 flex flex-col items-center w-full max-w-[100%]">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{translate('projects')}</h2>

      <Carousel className="w-full mx-auto overflow-hidden">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="flex justify-center text-center">
              <Card className="bg-white dark:bg-black border dark:border-white shadow-md w-full max-w-[100%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[60%]">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                </CardContent>
                <CardContent>
                  <CardTitle className="text-gray-900 dark:text-white">
                    {translate('technologies')}
                  </CardTitle>
                </CardContent>
                <CardContent>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {project.technologies}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
