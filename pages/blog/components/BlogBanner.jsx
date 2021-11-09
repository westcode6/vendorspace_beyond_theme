export default function BlogBanner() {
 return (
  <>
   <div
    className="w-full bg-cover bg-center h-96 mt-10"
    style={{ backgroundImage: "url(/images/blogger.jpg)" }}
   >
    <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
     <div className="text-center">
      <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
       This Week Blog Post
      </h1>
      <p className="py-4 text-gray-100">
       Lorem ipsum dolor sit amet consectetur adipisicing
       elit. Nemo, ad.
      </p>
     </div>
    </div>
   </div>
  </>
 );
}
