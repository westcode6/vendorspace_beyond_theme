import { AiOutlineTag } from "react-icons/ai";
export default function About() {
  return (
    <>
      <main
        className="px-4 py-12 md:py-10 max-w-lg mx-auto grid grid-cols-2 gap-3"
        id="About"
      >
        <div className="border border-gray-400 px-2 py-3 flex items-center">
          <h1 className="text-sm font-semibold flex items-center">
            <span className="text-gray-400 pr-2">
              <AiOutlineTag />
            </span>
            Discover{" "}
            <span className="text-sm text-gray-500 px-1">Our Collection</span>
          </h1>
        </div>

        <div className="border border-gray-400 px-2 py-3 flex items-center">
          <h1 className="text-sm font-semibold flex items-center">
            <span className="text-gray-400 pr-2">
              <AiOutlineTag />
            </span>
            Huge{" "}
            <span className="text-sm text-gray-500 px-1">Discount for All</span>
          </h1>
        </div>
      </main>
    </>
  );
}
