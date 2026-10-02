import style from "./page.module.css";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <main className={style.container}>
      {blogs &&
        blogs.map((blog) => (
          <BlogPreview
            // Prevents Error
            key={blog.slug}
            // These are the props we are passing in
            title={blog.title}
            date={new Date(blog.date)}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
            content={blog.content}
            comments={blog.comments}
          /> // This is how we call the component
        ))}
    </main>
  );
}

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 });
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
