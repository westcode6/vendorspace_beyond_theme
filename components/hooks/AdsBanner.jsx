import PropTypes from "prop-types";
import { FiArrowRightCircle } from "react-icons/fi";
import Button from "../utilities/Button";

export default function AdsBanner({
 gridOrder = "1",
 image,
}) {
 return (
  <>
   <main className="md:mx-8">
    <section className="grid md:grid-cols-12">
     {/* Banner image */}

     <div className="col-span-8 order-1">
      <img
       src="/images/bags-banner.png"
       className="object-cover object-center w-full h-80"
       alt="Landing banner image"
      />
     </div>

     {/* Banner text */}
     <div
      className={`col-span-4 px-3 md:px-10 py-10  mx-3 bg-gray-100 shadow order-${gridOrder}`}
     >
      <h1 className="text-2xl font-bold tracking-wide">
       Subscribe for new Arrivals update
      </h1>

      <p className="my-4 text-gray-800 tracking-wide leading-7">
       Lorem ipsum dolor sit amet consectetur.
      </p>

      <Button className="w-full md:w-auto">
       Subscribe
       <FiArrowRightCircle className="inline text-xl ml-2" />
      </Button>
     </div>
    </section>
   </main>
  </>
 );
}

AdsBanner.propTypes = {
 gridOrder: PropTypes.string,
 image: PropTypes.string,
};
