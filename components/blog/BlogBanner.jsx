export default function BlogBanner() {
 return (
  <>
   <main className="mt-12">
    <div
     className="w-full bg-center bg-cover h-96"
     style={{
      backgroundImage: "url(/images/blogger.jpg); ",
     }}
    >
     <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
      <div
       role="main"
       className="flex flex-col items-center justify-center"
      >
       <h1 className="text-4xl font-semibold leading-9 text-center text-white">
        This Week Blogs
       </h1>
       <p className="text-base leading-normal text-center text-gray-200 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
        If you&apos;re looking for random paragraphs,
        you&apos;ve come to the right place. When a random
        word or a random sentence isn&apos;`t quite enough
       </p>
      </div>
     </div>
    </div>
   </main>
  </>
 );
}
