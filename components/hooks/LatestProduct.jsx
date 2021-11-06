import Heading from "../utilities/Typography";
import Link from "next/link";
import ProductContainer from "./ProductContainer";
import HotProducts from "./HotProducts";
export default function LatestProduct({ children, title }) {
  return (
    <section className="pb-10">
      <Heading className="">{title}</Heading>
      <HotProducts />
    </section>
  );
}
