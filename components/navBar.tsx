import { Contact, FolderGit2, House, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-3xl bg-white dark:bg-black border border-gray-200 dark:border-white shadow-lg rounded-xl p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Abdiel Cuevas
        </div>

        {/* Links de navegación */}
        <nav className="hidden md:flex space-x-6">
          <Button variant="ghost" className="text-gray-700 dark:text-white">
            <House className="w-6 h-6" />
            Home
            </Button>
          <Button variant="ghost" className="text-gray-700 dark:text-white">
            <User className="w-6 h-6" />
            About
            </Button>
          <Button variant="ghost" className="text-gray-700 dark:text-white">
            <FolderGit2 className="w-6 h-6" />
            Proyects
            </Button>
          <Button variant="ghost" className="text-gray-700 dark:text-white">
            <Contact className="w-6 h-6" />
            Contact
            </Button>
        </nav>

        {/* Menú móvil */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="text-gray-700 dark:text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <nav className="flex flex-col space-y-4 mt-6">
              <Button variant="ghost" className="w-full">Inicio</Button>
              <Button variant="ghost" className="w-full">Proyectos</Button>
              <Button variant="ghost" className="w-full">Contacto</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
