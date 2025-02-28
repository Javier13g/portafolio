import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../context/LanguajeContext";
import { BlazorIcon, CsharpIcon, GitHubIcon, GitIcon, JavaScriptIcon, NestIcon, NetIcon, PostmanIcon, ReactIcon, SqlServerIcon, TypescriptIcon, VueIcon } from "../images/languagesIcons";

export default function About() {
  const { translate } = useLanguage();
  return (
    <section id="about" className="py-16 flex justify-center">
      <Card className="w-full max-w-3xl bg-white dark:bg-black border dark:border-white shadow-md">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="text-2xl text-gray-900 dark:text-white">
            {translate('titleAbout')}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 justify-center">
          <JavaScriptIcon size={58} />
          <TypescriptIcon size={58} />
          <ReactIcon size={58} />
          <VueIcon size={58} />
          <NestIcon size={58} />
          <CsharpIcon size={58} />
          <NetIcon size={58} />
          <BlazorIcon size={58} />
          <GitIcon size={58} />
          <GitHubIcon size={58} />
          <PostmanIcon size={58} />
          <SqlServerIcon size={58} />
        </CardContent>
      </Card>
    </section>
  );
}
