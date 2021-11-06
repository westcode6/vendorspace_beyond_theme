import PropTypes from "prop-types";
import Link from "next/link";

export default function Button({
 children,
 className,
 hover = "hover:bg-gray-900 hover:text-white",
 py = "2",
 px = "3",
 text,
 to,
 href,
 ...rest
}) {
 // button classes
 const btnClasses = `${className} text-${text} ${hover} py-${py} px-${px} border flex justify-center items-center space-x-3 rounded border-gray-900  font-semibold capitalize text-center`;

 return (
  <>
   {to ? (
    <Link href={to}>
     <a className={btnClasses} {...rest}>
      {children}
     </a>
    </Link>
   ) : href ? (
    <a href={href} className={btnClasses} {...rest}>
     {children}
    </a>
   ) : (
    <button className={btnClasses} {...rest}>
     {children}
    </button>
   )}
  </>
 );
}

Button.propTypes = {
 className: PropTypes.string,
 hover: PropTypes.string,
 py: PropTypes.string,
 px: PropTypes.string,
 to: PropTypes.string,
 href: PropTypes.string,
};
