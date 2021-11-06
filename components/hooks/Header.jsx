import Link from "next/link";
export default function Header() {
 return (
  <>
   <main
    className="grid grid-cols-1 md:grid-cols-2"
    style={{ background: "#E0E0E0" }}
   >
    <div className="px-3 md:px-12 pt-28 md:pt-40 pb-10">
     <h1 className="text-6xl md:text-7xl font-bold">
      S/S 2021
     </h1>
     <h1 className="text-6xl md:text-7xl font-bold">
      Collection
     </h1>
     <p className="py-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Dolor, veniam.
     </p>
     <Link href="/">
      <a className="my-5 inline-block bg-black rounded-sm text-xs text-white px-10 py-3">
       SHOP NOW
      </a>
     </Link>
    </div>

    <div className="flex justify-end">
     <img
      src="/images/s80.jpg"
      className="object-cover flex flex-end justify-end items-end"
      alt="landing-banner-image"
     />
    </div>
   </main>
  </>
 );
}
