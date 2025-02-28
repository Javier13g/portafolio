import { Contact, FolderGit2, House, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/app/context/LanguajeContext";

interface NavbarProps {
  className?: string;
}


export default function Navbar({ className }: NavbarProps) {
  const { translate } = useLanguage();
  return (
    <header
      className={`${className} fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-16px)] max-w-3xl px-4 sm:px-6 bg-white dark:bg-black border border-gray-200 dark:border-white shadow-lg rounded-xl p-4`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Abdiel Cuevas
        </div>

        {/* Links de navegación */}
        <nav className="hidden md:flex space-x-6">
          <Button variant="ghost" className="text-gray-700 dark:text-white">
            <House className="w-6 h-6" />
            {translate('itemHome')}
          </Button>
          <Button variant="ghost" className="text-gray-700 dark:text-white">
            <User className="w-6 h-6" />
            {translate('itemAbout')}
          </Button>
          <Button variant="ghost" className="text-gray-700 dark:text-white">
            <FolderGit2 className="w-6 h-6" />
            {translate('itemProyects')}
          </Button>
          <Button variant="ghost" className="text-gray-700 dark:text-white">
            <Contact className="w-6 h-6" />
            {translate('itemContact')}
          </Button>
        </nav>

        {/* Menú móvil */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="text-gray-700 dark:text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <nav className="flex flex-col space-y-4 mt-6">
              <Button variant="ghost" className="w-full">{translate('itemHome')}</Button>
              <Button variant="ghost" className="w-full">{translate('itemAbout')}</Button>
              <Button variant="ghost" className="w-full">{translate('itemProyects')}</Button>
              <Button variant="ghost" className="w-full">{translate('itemContact')}</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
