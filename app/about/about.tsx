import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../context/LanguajeContext";
import { BlazorIcon, CsharpIcon, GitHubIcon, GitIcon, JavaScriptIcon, NestIcon, NetIcon, PostmanIcon, ReactIcon, SqlServerIcon, TypescriptIcon, VueIcon } from "../images/languagesIcons";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useState } from "react";
import CustomActiveShapePieChart from "@/components/CustomActiveShapePieChart";

export default function About() {
  const { translate } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<{ name: string; description: string } | null>(null);

  // Datos de las tecnologías
  const technologies = [
    { name: "JavaScript", description: "JavaScript es un lenguaje de programación..." },
    { name: "TypeScript", description: "TypeScript es un superset de JavaScript..." },
    { name: "React", description: "React es una biblioteca de JavaScript para construir interfaces de usuario..." },
    { name: "Vue", description: "Vue es un framework progresivo de JavaScript..." },
    { name: "NestJS", description: "NestJS es un framework de Node.js para construir aplicaciones escalables..." },
    { name: "C#", description: "C# es un lenguaje de programación desarrollado por Microsoft..." },
    { name: ".NET", description: ".NET es un framework de desarrollo de software..." },
    { name: "Blazor", description: "Blazor es un framework de desarrollo web de Microsoft..." },
    { name: "Git", description: "Git es un sistema de control de versiones distribuido..." },
    { name: "GitHub", description: "GitHub es una plataforma de desarrollo colaborativo..." },
    { name: "Postman", description: "Postman es una herramienta para probar APIs..." },
    { name: "SQL Server", description: "SQL Server es un sistema de gestión de bases de datos relacionales..." },
  ];

  // Función para manejar el clic en un ícono
  const handleIconClick = (index: number) => {
    setSelectedTech(technologies[index]);
    setIsDrawerOpen(true);
  };
  return (
    <section id="about" className="py-16 flex justify-center">
      <Card className="w-full max-w-3xl bg-white dark:bg-black border dark:border-white shadow-md">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="text-2xl text-gray-900 dark:text-white">
            {translate('titleAbout')}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 justify-center">
          <JavaScriptIcon size={58} onClick={() => handleIconClick(0)} />
          <TypescriptIcon size={58} onClick={() => handleIconClick(1)} />
          <ReactIcon size={58} onClick={() => handleIconClick(2)} />
          <VueIcon size={58} onClick={() => handleIconClick(3)} />
          <NestIcon size={58} onClick={() => handleIconClick(4)} />
          <CsharpIcon size={58} onClick={() => handleIconClick(5)} />
          <NetIcon size={58} onClick={() => handleIconClick(6)} />
          <BlazorIcon size={58} onClick={() => handleIconClick(7)} />
          <GitIcon size={58} onClick={() => handleIconClick(8)} />
          <GitHubIcon size={58} onClick={() => handleIconClick(9)} />
          <PostmanIcon size={58} onClick={() => handleIconClick(10)} />
          <SqlServerIcon size={58} onClick={() => handleIconClick(11)} />
        </CardContent>
      </Card>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader style={{ textAlign: "center" }}>
            <DrawerTitle style={{ fontSize: "30px" }}>{selectedTech?.name}</DrawerTitle>
            <DrawerDescription style={{ fontSize: "20px" }}>
              {selectedTech?.description}
            </DrawerDescription>
            <DrawerDescription>
              {selectedTech && (
                <DrawerDescription>
                  <CustomActiveShapePieChart languageName={selectedTech.name} />
                </DrawerDescription>
              )}
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
