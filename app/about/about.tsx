import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 flex justify-center">
      <Card className="w-full max-w-3xl bg-white dark:bg-black border dark:border-white shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 dark:text-white">Sobre Mí</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">
          Soy un desarrollador apasionado por la tecnología, siempre buscando nuevas formas de mejorar y crear soluciones innovadoras que tengan un impacto real en el mundo. Desde que comencé mi viaje en la programación, me he enfocado en combinar mi curiosidad natural con mi amor por el aprendizaje constante. Me encanta enfrentar desafíos complejos y descomponerlos en soluciones simples y eficientes.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
