export default function BlogReviews() {
 return (
  <>
   <div className="flex w-full border-t border-gray-100">
    <div className="mt-3 mx-5 flex flex-row">
     <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
      Comments:
      <div className="ml-1 text-gray-400 font-thin text-ms">
       {" "}
       30
      </div>
     </div>
     <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
      Views:{" "}
      <div className="ml-1 text-gray-400 font-thin text-ms">
       {" "}
       60k
      </div>
     </div>
    </div>
    <div className="mt-3 mx-5 w-full flex justify-end">
     <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
      Likes:{" "}
      <div className="ml-1 text-gray-400 font-thin text-ms">
       {" "}
       120k
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
