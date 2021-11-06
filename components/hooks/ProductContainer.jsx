import PropTypes from "prop-types";

export default function ProductContainer({
 children,

 className,
 ...rest
}) {
 return (
  <div
   className={`${className} max-w-7xl mx-auto`}
   {...rest}
  >
   {children}
  </div>
 );
}

ProductContainer.propTypes = {
 className: PropTypes.string,
 padding: PropTypes.string,
};
