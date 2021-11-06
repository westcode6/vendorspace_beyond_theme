import ProductContainer from "./ProductContainer";
import Button from "../utilities/Button";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";
export default function Product({ title }) {
 const product = [
  {
   image: "/images/s87.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   discount: "$175.00 ",
   link: "/products/1",
  },

  {
   image: "/images/s82.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   discount: "$175.00 ",
   link: "/products/1",
  },

  {
   image: "/images/s85.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   discount: "$175.00 ",
   link: "/products/1",
  },

  {
   image: "/images/s86.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   discount: "$175.00 ",
   link: "/products/1",
  },

  {
   image: "/images/s83.jpg",
   productName: "Green Bo Ivy",
   price: "$532.00 ",
   discount: "$175.00 ",
   link: "/products/1",
  },

  {
   image: "/images/s99.webp",
   productName: "Green Bo Ivy",
   price: "$132.00",
   discount: "$175.00 ",
   link: "/products/1",
  },
 ];

 return (
  <section>
   <ProductContainer className="px-3 md:px-10">
    <div className="grid grid-cols-12 gap-5 md:gap-5">
     {product.map((item, index) => (
      <div
       className="col-span-6 md:col-span-2 mb-5 transition ease-out duration-300 shadow-sm  hover:shadow-2xl rounded-lg relative"
       key={index}
      >
       <Link href={item.link}>
        <div className="">
         <figure>
          <img
           src={item.image}
           className="object-cover h-56 w-full rounded-t-lg"
           alt="product"
          />
         </figure>

         <div className="py-3 text-center">
          <h5 className="font-medium text-sm text-gray-700">
           {item.productName}
          </h5>

          <div className="flex flex-col justify-center items-center">
           <span className="font-semibold">
            {item.price}
           </span>
           <span className="text-gray-400 px-4">
            {item.discount}
           </span>
          </div>

          <div className="flex justify-center mt-2">
           <Button className="md:w-auto border-2 border-black transition ease-out duration-300 bg-black hover:bg-gray-700 hover:shadow-2xl shadow text-white text-xs">
            Add to Cart
            <span className="px-2">
             <BsCartCheck />
            </span>
           </Button>
          </div>
         </div>
        </div>
       </Link>

       <div className="absolute w-8 h-8 rounded-lg bg-gray-50 rounded-sm text-center font-semibold text-xs items-center  flex  justify-center text-pink-600 top-2 -right-2 shadow-xl">
        -20%
       </div>
      </div>
     ))}
    </div>
   </ProductContainer>
  </section>
 );
}
