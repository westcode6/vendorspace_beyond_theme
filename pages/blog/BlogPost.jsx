import Link from "next/link";
import { AiTwotoneHeart } from "react-icons/ai";
import Navbar from "../../components/common/Navbar";
import AddComment from "../../components/blog/AddComment";
import BlogReviews from "../../components/blog/BlogReviews";
import BlogHeadLines from "./BlogHeadLines";
import Footer from "../../components/common/Footer";

export default function BlogPost() {
 return (
  <>
   <Navbar />
   <div className="pt-5 md:py-16 bg-white">
    <div className="flex max-w-xl my-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
     <div className="flex items-center w-full">
      <div className="w-full">
       <div className="flex flex-row mt-2 px-2 py-3 mx-3">
        <div className="w-auto h-auto rounded-full border-2 border-pink-500">
         <img
          className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
          alt="User avatar"
          src="/images/wizzy.jpg"
         />
        </div>
        <div className="flex flex-col mb-2 ml-4 mt-1">
         <div className="text-gray-600 text-sm font-semibold">
          Coder West
         </div>
         <div className="flex w-full mt-1">
          <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
           Developer
          </div>
          <div className="text-gray-400 font-thin text-xs">
           • 30 seconds ago
          </div>
         </div>
        </div>
       </div>
       <div className="border-b border-gray-100"></div>
       <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
        <img
         className="rounded"
         src="/images/bags-banner.png"
        />
       </div>
       <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
        Dummy text of the printing and typesetting industry
       </div>
       <div className="text-gray-500 leading-relaxed  text-sm mb-6 mx-3 px-2">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry&apos;`s standard dummy text ever since the
        Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Veniam ex blanditiis ipsa nesciunt optio
        recusandae nihil natus illum iusto excepturi! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit.
        Magnam, quasi. 1500
       </div>
       <div className="flex justify-start mb-4 border-t border-gray-100">
        <div className="flex w-full mt-1 pt-2 pl-5">
         <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           width="14px"
           viewBox="0 0 24 24"
           stroke="currentColor"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
           />
          </svg>
         </span>

         <img
          className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
          src="/images/wizzy.jpg"
          alt=""
         />
        </div>
        <div className="flex justify-end w-full mt-1 pt-2 pr-5">
         <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           width="14px"
           viewBox="0 0 24 24"
           stroke="currentColor"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
           />
          </svg>
         </span>
         <span className="transition ease-out duration-300 hover:bg-pink-500 bg-pink-100 h-8 px-2 py-2 text-center rounded-full text-pink-600 hover:text-white cursor-pointer">
          <AiTwotoneHeart />
         </span>
        </div>
       </div>
       <BlogReviews />
       <AddComment />
      </div>
     </div>
    </div>
   </div>

   <BlogHeadLines />
   <Footer />
  </>
 );
}
