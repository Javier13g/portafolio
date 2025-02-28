import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-16 flex justify-center">
      <Card className="w-full max-w-3xl bg-white dark:bg-black border dark:border-white shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 dark:text-white">Contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full p-2 border border-gray-300 dark:border-white bg-transparent text-gray-900 dark:text-white rounded-md"
            />
            <input
              type="email"
              placeholder="Tu Email"
              className="w-full p-2 border border-gray-300 dark:border-white bg-transparent text-gray-900 dark:text-white rounded-md"
            />
            <textarea
              placeholder="Tu Mensaje"
              rows={4}
              className="w-full p-2 border border-gray-300 dark:border-white bg-transparent text-gray-900 dark:text-white rounded-md"
            ></textarea>
            <Button type="submit" className="w-full">Enviar Mensaje</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}