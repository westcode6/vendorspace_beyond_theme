import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
export default function Navbar() {
 return (
  <>
   <nav
    className="px-3 py-1 w-full fixed bg-white shadow-sm md:shadow z-20 top-0"
    style={{ background: "#fffff" }}
   >
    <div className="container mx-auto  py-2 md:flex md:justify-between md:items-center">
     <div className="flex justify-between items-center">
      <div>
       <Link href="/">
        <a className="text-gray-900 text-2xl font-bold md:text-2xl hover:text-gray-700">
         BEYOND
        </a>
       </Link>
      </div>

      <div className="flex space-x-6 md:hidden">
       <a
        className="flex items-center block text-gray-800 hover:text-gray-900"
        href="#"
       >
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-6 w-6"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
         />
        </svg>
        <span className="absolute flex ml-4 -mt-5">
         <span className="h-3 w-3 animate-ping absolute inline-flex rounded-full bg-pink-500 opacity-75"></span>
         <span className="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
        </span>
       </a>
       <button
        type="button"
        className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        aria-label="toggle menu"
       >
        <svg
         viewBox="0 0 24 24"
         className="h-6 w-6 fill-current"
        >
         <path
          fillRule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
         ></path>
        </svg>
       </button>
      </div>
     </div>

     <div className=" relative w-96 mx-auto text-gray-600 hidden md:block">
      <input
       className=" h-6 outline-black text-gray-600 px-5 w-full rounded-sm text-xs"
       type="search"
       name="search"
       placeholder="Search all Products Here"
      />

      <button
       type="submit"
       className="absolute right-4 top-0 mt-1 mr-0 "
      >
       <BiSearch />
      </button>
     </div>

     <div className="md:flex items-center hidden md:block">
      <div className="flex flex-col md:flex-row md:mx-6">
       <Link href="/">
        <a
         className="my-1 text-xs text-gray-600 font-medium hover:text-gray-900 md:mx-4 md:my-0"
         href="#"
        >
         Home
        </a>
       </Link>{" "}
       <Link href="/">
        <a
         className="my-1 text-xs text-gray-600 font-medium hover:text-gray-900 md:mx-4 md:my-0"
         href="#"
        >
         Shop
        </a>
       </Link>
       <Link href="/blog/1">
        <a
         className="my-1 text-xs text-gray-600 font-medium hover:text-gray-900 md:mx-4 md:my-0"
         href="#"
        >
         Blog
        </a>
       </Link>
       <Link href="#footer">
        <a
         className="my-1 text-xs text-gray-600 font-medium hover:text-gray-900 md:mx-4 md:my-0"
         href="#"
        >
         Contact
        </a>
       </Link>
      </div>

      <div className="flex space-x-5">
       <a
        className="flex items-center block hover:text-gray-900"
        href="#"
       >
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-6 w-6"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
         />
        </svg>
        <span className="absolute flex ml-4 -mt-5">
         <span className="h-3 w-3 animate-ping absolute inline-flex rounded-full bg-pink-500 opacity-75"></span>
         <span className="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
        </span>
       </a>

       <button className="text-white text-xs bg-black hover:bg-gray-900 hover:shadow-sm flex items-center px-4 py-2 shadow-lg rounded">
        <a className="hover:text-white block px-1" href="#">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
         </svg>
        </a>
        Log in
       </button>
      </div>
     </div>
    </div>
   </nav>
  </>
 );
}
