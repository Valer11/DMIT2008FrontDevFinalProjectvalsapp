import Link from "next/link";
import { IoBonfire, IoHomeOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
function NavBar({ children }) {
  return (
    <nav className="py-4 px-4  ">
      <ul className="flex justify-between gap-x-8 items-center">
        <li>
          <Link className="text-rose-600 font-medium" href="/">
            <figure className="flex items-center text-red-500 gap-1">
              <IoHomeOutline className="w-6 h-6  " />
              <figcaption className="text-sm">Back to Home</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 font-medium" href="/employees">
            Products
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 font-medium"
            href="https://github.com/Valer11/DMIT2008FrontDevFinalProjectvalsapp"
          >
            <IoLogoGithub className="w-6 h-6 text-gray-500" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
