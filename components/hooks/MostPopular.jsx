import Heading from "../utilities/Typography";
import Link from "next/link";
import ProductContainer from "./ProductContainer";
import Product from "./Product";
export default function MostPopular({ children, title }) {
  return (
    <section className="py-5">
      <Heading className="">{title}</Heading>

      <Product />
    </section>
  );
}
