import Link from "next/link";
import {
 IoIosArrowForward,
 IoLogoWhatsapp,
} from "react-icons/io";
import {
 FaFacebookF,
 FaInstagram,
 FaHeart,
} from "react-icons/fa";

export default function Footer() {
 return (
  <>
   <hr />
   <main
    className="px-5 md:px-10 py-12 flex justify-center bg-gray-50 text-center md:text-left"
    id="footer"
   >
    <section className="grid grid-cols-1 md:grid-cols-5">
     <div>
      <h2 className="text-md text-black font-medium">
       CONTACT
      </h2>

      <ul className="text-gray-600 text-sm block hover:text-gray-500 my-5">
       <li className="py-3">21 Ikeja Bambelum</li>

       <li className="py-3">555-555-5555</li>

       <li className="py-3">name@company.com</li>
      </ul>
     </div>

     <div>
      <h2 className="text-md text-black font-medium">
       SUPPORT
      </h2>
      <ul className="flex flex-col my-5">
       <Link href="/">
        <a className=" text-gray-600 text-sm block hover:text-gray-400 py-2">
         Terms and Conditions
        </a>
       </Link>

       <Link href="/">
        <a className=" text-gray-600 text-sm block hover:text-gray-400 py-2">
         Privacy Policy
        </a>
       </Link>

       <Link href="/">
        <a className=" text-gray-600 text-sm block hover:text-gray-400 py-2">
         Return Policy
        </a>
       </Link>
      </ul>
     </div>

     <div>
      <h2 className="text-md text-black font-medium">
       Information
      </h2>
      <ul className="flex flex-col my-5">
       <Link href="#About">
        <a className=" text-gray-600 text-sm block hover:text-gray-400 py-2">
         About
        </a>
       </Link>

       <Link href="/">
        <a className=" text-gray-600 text-sm block hover:text-gray-400 py-2">
         News
        </a>
       </Link>

       <Link href="/">
        <a className=" text-gray-600 text-sm block hover:text-gray-400 py-2">
         Contact
        </a>
       </Link>
      </ul>
     </div>

     <div>
      <h2 className="text-md text-black font-medium">
       Work
      </h2>
      <ul className="flex flex-col my-5">
       <li className="text-gray-600 py-2 text-sm">
        Monday - Friday:{" "}
        <span className="text-gray-600 text-sm font-medium px-5">
         9AM - 11PM
        </span>
       </li>

       <li className="text-gray-600 py-2 text-sm">
        Saturday:{" "}
        <span className="text-gray-600 text-sm font-medium px-5">
         9AM - 11PM
        </span>
       </li>

       <li className="text-gray-600 py-2 text-sm">
        Sunday:
        <span className="text-gray-600 text-sm font-medium px-5">
         closed
        </span>
       </li>
      </ul>
     </div>
     <div>
      <h2 className="text-md text-black font-medium">
       BE IN THE KNOW
      </h2>

      <p className="py-7  text-gray-600 text-sm block">
       Promotions, new products and sales. Directly to your
       inbox.
      </p>
      <div className="flex justify-center items-center">
       <input
        type="email"
        className="py-2 px-3 border border-gray-900 "
        placeholder="Your email"
       />
       <button className="py-4 px-3 mx-1 bg-black text-white ">
        <IoIosArrowForward />
       </button>
      </div>
     </div>
    </section>
   </main>
   <section className="py-2 px-3 md:px-5 text-center md:text-left bg-gray-100 flex flex-col md:flex-row justify-between items-center ">
    <span className="flex md:ml-3 pr-2 pl-2shadow-sm  py-2 border-l-2 border-r-2 space-x-5 md:space-x-3 border-gray-200">
     <a className="text-gray-500 text-lg">
      <FaFacebookF />
     </a>
     <a className="ml-2 text-gray-500 text-lg">
      <FaInstagram />
     </a>
     <a className="ml-2 text-gray-500 text-lg">
      <IoLogoWhatsapp />
     </a>
    </span>
    <span className="text-gray-500">
     &copy; 2021 Beyond. Powered by Vendorspace
    </span>
   </section>
  </>
 );
}
