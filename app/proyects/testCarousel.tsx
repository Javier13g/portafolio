"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NetIcon, ReactIcon, SqlServerIcon, TypescriptIcon, VueIcon } from "../images/languagesIcons";

const projects = [
  {
    title: "Sistema de Guia de Transporte (CCN)",
    description: "Esta aplicación web permite la creación y gestión de rutas de transporte, facilitando la planificación de trayectos desde un punto de origen hasta un destino, con la opción de incluir varias paradas intermedias. Los choferes se asignan directamente a las guías de transporte, asegurando que cada ruta tenga un conductor asignado.",
    technologies: [<ReactIcon size={50} key="react" />, <NetIcon size={50} key="net" />, <TypescriptIcon size={50} key="typescript" />, <SqlServerIcon size={50} key="sql" />]
  },
  {
    title: "CRM Tennos",
    description: "El enfoque principal de este proyecto era la creación de nuevos módulos y el mantenimiento continuo del sistema interno de la empresa. Entre sus funciones se incluyen la creación de solicitudes que los empleados deben cumplir, la generación de reportes de desempeño y un calendario para organizar tareas y eventos importantes, todo diseñado para mejorar la eficiencia y gestión interna de la organización.",
    technologies: [<VueIcon size={50} key="vue" />, <NetIcon size={50} key="net" />, <SqlServerIcon size={50} key="sql" />]
  },
  {
    title: "CRM Two",
    description: "Una aplicación web increíble.",
    technologies: [<VueIcon size={50} key="vue" />, <NetIcon size={50} key="net" />, <SqlServerIcon size={50} key="sql" />]
  },
];

export default function testCarousel() {
  return (
    <section id="projects" className="py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Proyectos</h2>

      <Carousel className="w-full overflow-hidden">
        <CarouselContent className="flex justify-center">
          {projects.map((project, index) => {
            console.log(index); // Aquí se hace el console.log de project
            return (
              <CarouselItem key={index} className="flex justify-center text-center">
                <Card className="bg-white dark:bg-black border dark:border-white shadow-md w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[60%]">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </CardContent>
                  <CardContent>
                    <CardTitle className="text-gray-900 dark:text-white">Tecnologías</CardTitle>
                  </CardContent>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {project.technologies}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
