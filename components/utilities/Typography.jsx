import PropTypes from "prop-types";
export default function Heading({ children, className }) {
  const headerClasses = `py-7 px-3 md:px-10 text-lg text-gray-700 font-semibold tracking-wider`;
  return (
    <>
      <h1 className={headerClasses}>{children}</h1>
    </>
  );
}
Heading.propTypes = {
  className: PropTypes.string,
};
