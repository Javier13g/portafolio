import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../context/LanguajeContext";
import { BlazorIcon, CsharpIcon, GitHubIcon, GitIcon, JavaScriptIcon, NestIcon, NetIcon, PostmanIcon, ReactIcon, SqlServerIcon, TypescriptIcon, VueIcon } from "../images/languagesIcons";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { CustomActiveShapePieChart } from "@/components/CustomActiveShapePieChart";

export default function About() {
  const { translate } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<{ name: string } | null>(null);

  const technologies = [
    {
      name: "JavaScript"
    },
    {
      name: "TypeScript"
    },
    {
      name: "React"
    },
    {
      name: "Vue"
    },
    {
      name: "NestJS"
    },
    {
      name: "C#"
    },
    {
      name: ".NET"
    },
    {
      name: "Blazor"
    },
    {
      name: "Git"
    },
    {
      name: "GitHub"
    },
    {
      name: "Postman"
    },
    {
      name: "SQL Server"
    }
  ];

  const handleIconClick = (index: number) => {
    setSelectedTech(technologies[index]);
    setIsDrawerOpen(true);
  };

  const [dataDrawer, setDataDrawer] = useState("");

  useEffect(() => {
    if (selectedTech != undefined) {
      switch (selectedTech.name) {
        case "JavaScript":
          setDataDrawer(translate('descriptionJavaScript'));
          break;
        case "TypeScript":
          setDataDrawer(translate('descriptionTypeScript'));
          break;
        case "React":
          setDataDrawer(translate('descriptionReact'));
          break;
        case "Vue":
          setDataDrawer(translate('descriptionVue'));
          break;
        case "NestJS":
          setDataDrawer(translate('descriptionNestJS'));
          break;
        case "C#":
          setDataDrawer(translate('descriptionCSharp'));
          break;
        case ".NET":
          setDataDrawer(translate('descriptionDotNet'));
          break;
        case "Blazor":
          setDataDrawer(translate('descriptionBlazor'));
          break;
        case "Git":
          setDataDrawer(translate('descriptionGit'));
          break;
        case "GitHub":
          setDataDrawer(translate('descriptionGitHub'));
          break;
        case "Postman":
          setDataDrawer(translate('descriptionPostman'));
          break;

        case "SQL Server":
          setDataDrawer(translate('descriptionSQLServer'));
          break;

        default:
          break;
      }
    }
  }, [selectedTech, translate])

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
              {dataDrawer && (
                dataDrawer
              )}
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
