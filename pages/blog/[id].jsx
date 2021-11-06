import BlogBanner from "../../components/blog/BlogBanner";
import Blog from "./BlogHeadLines";
import Navbar from "..//../components/common/Navbar";
import BlogHeadLines from "./BlogHeadLines";
import Footer from "../../components/common/Footer";

export default function BlogPage() {
 return (
  <>
   <div>
    {/* Navbar component */}
    <Navbar />
   </div>

   <div>
    {/* BlogBanner component */}
    <BlogBanner />
   </div>

   <div>
    {/* BlogHeadLines component */}
    <BlogHeadLines />
   </div>

   <div>
    {/* Footer component */}
    <Footer />
   </div>
  </>
 );
}
