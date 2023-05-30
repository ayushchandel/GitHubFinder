import React from "react";
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
const NavBar = ({title}) =>
{
    return(
       <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithub className="inline pr-2 text-4xl"></FaGithub>
                <Link to="/" className="text-lg font-bold align-middle">
                {title}
                </Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                <Link to="/" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Home
                </Link>
                <Link to="/about" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    About
                </Link>
                </div>

            </div>
        </div>
       </nav>
    )
}
NavBar.defaultProps = {
    title: 'GitHub Finder'
}

export default NavBar;