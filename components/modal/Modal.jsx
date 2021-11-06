import Button from "../utilities/Button";
export default function Modal() {
 return (
  <div className="bg-gray-800">
   <div
    id="modal"
    className={`container mx-auto justify-center items-center px-4 md:px-10 py-20`}
   >
    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
     <div role="img" aria-label="Luxe. Logo.">
      <h2 className="text-2xl font-semibold tracking-wide">
       BEYOND
      </h2>
     </div>
     <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12">
      Welcome to the coveted family of Beyond!
     </h1>
     <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12">
      Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Consequuntur iure qui facilis est magnam ipsum?
     </p>
     <div className="mt-12 md:mt-14 w-full flex justify-center">
      <Button className="w-full md:w-auto py-4 px-5 border-black">
       Back to store{" "}
      </Button>
     </div>
    </div>
   </div>
  </div>
 );
}
