import Heading from "../utilities/Typography";
import Product from "./Product";
import Link from "next/link";
import PropTypes from "prop-types";
export default function RecommendedProducts({ title }) {
 return (
  <section className="py-5">
   <Heading className="">{title}</Heading>
   <Product />
  </section>
 );
}
RecommendedProducts.propTypes = {
 title: PropTypes.string,
};
