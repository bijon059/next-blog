'use client'
import React,{useState} from "react";
import ActiveLink from "./ActiveLink";

const ProfileDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    console.log('called to show');
    setIsOpen(!isOpen);
};
  return (
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" onClick={toggleDropdown} className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="pro-pic.jpg" alt="user photo" />
      </button>
      {isOpen && (
      <><div className="z-50 my-4 text-base profile-dropdown list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <ActiveLink href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</ActiveLink>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div></>)}
  </div>
  );
};

export default ProfileDropdown;
