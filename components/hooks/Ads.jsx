import Product from "./Product";
import PropTypes from "prop-types";
import Heading from "../utilities/Typography";
export default function Ads({ title }) {
  return (
    <>
      <main className="my-10  flex flex-col md:flex-row">
        <div className="flex justify-start hidden md:block">
          <img
            src="/images/carrybag2.jpg"
            className="object-contain-scale h-96"
            alt="ads-banner"
          />
        </div>
        <div className="flex justify-center hidden md:block">
          <img
            src="/images/backface.jpg"
            className="object-contain-scale h-96"
            alt="ads-banner"
          />
        </div>
        <div className="flex justify-end">
          <img
            src="/images/s90.jpg"
            className="object-contain-scale h-96"
            alt="ads-banner"
          />
        </div>
      </main>
    </>
  );
}
Ads.propTypes = {
  title: PropTypes.string,
};
