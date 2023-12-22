import { useTheme } from "../context/ThemeContext";
import ButtonAction from "./ui/ButtonAction";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <nav className="container flex items-center justify-end space-x-4 py-4">
      <div className="">
        <button
          onClick={toggleDarkMode}
          className={
            "text-text_primary dark:text-text_primary_dark group flex w-full  cursor-pointer rounded-full p-2 text-sm font-semibold leading-6 "
          }
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg  ">
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </span>
          <span className="truncate"></span>
        </button>
      </div>
      {/* action button */}
      <ButtonAction>Resume</ButtonAction>
    </nav>
  );
};

export default Navbar;
