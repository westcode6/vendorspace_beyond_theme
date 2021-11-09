import ProductContainer from "./ProductContainer";
import Link from "next/link";
import {
 AiOutlineHeart,
 AiTwotoneHeart,
} from "react-icons/ai";
import Button from "../utilities/Button";
import { BsCartCheck } from "react-icons/bs";
import Heading from "../utilities/Typography";
export default function HotProducts({ title }) {
 const product = [
  {
   image: "/images/s84.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },

  {
   image: "/images/s96.webp",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },

  {
   image: "/images/s95.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },

  {
   image: "/images/s94.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },

  {
   image: "/images/s93.jpg",
   productName: "Green Bo Ivy",
   price: "$532.00 ",
   link: "/products/1",
  },

  {
   image: "/images/s87.jpg",
   productName: "Green Bo Ivy",
   price: "$132.00",
   link: "/products/1",
  },
 ];

 return (
  <section className="">
   <ProductContainer className="px-3 md:px-10">
    <div className="grid grid-cols-12 gap-5 md:gap-5">
     {product.map((item, index) => (
      <div
       className="col-span-6 md:col-span-2 shadow-sm  hover:shadow-2xl rounded-lg relative"
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

          <div className="flex justify-center font-semibold text-xs py-2 items-center">
           <span>{item.price}</span>
          </div>
          <div className="flex justify-center mt-2">
           <Button className="md:w-auto border-2 border-black hover:bg-black hover:text-white transition ease-out duration-300 text-xs">
            Add to Cart
            <span className="px-2">
             <BsCartCheck />
            </span>
           </Button>
          </div>
         </div>
        </div>
       </Link>

       <div className="absolute w-8 h-7 top-2 transition ease-out duration-300 hover:bg-pink-500 bg-gray-50 h-8 px-2 py-2 text-center rounded-full text-pink-500 hover:text-white cursor-pointer -right-2 shadow-xl">
        <span className="">
         <AiTwotoneHeart />
        </span>
       </div>
      </div>
     ))}
    </div>
   </ProductContainer>
  </section>
 );
}
