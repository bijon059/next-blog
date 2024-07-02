import Image from "next/image";
import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row   sm:px-4  md:px-4 pt-6">
      <div className="flex gap-2 flex-wrap ">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </main>
  );
}
