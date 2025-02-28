import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  { title: "Proyecto 1", description: "Una aplicación web increíble." },
  { title: "Proyecto 2", description: "Un dashboard interactivo con gráficos." },
  { title: "Proyecto 3", description: "E-commerce con Next.js y Tailwind." },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white dark:bg-black border dark:border-white shadow-md">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}