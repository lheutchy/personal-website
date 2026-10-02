import Image from 'next/image'
import connectDB from '@/database/db'
import blogSchema from '@/database/blogSchema'
import Blog from '@/database/blogSchema'
import Comment from '@/components/comment'
import { IComment } from '@/components/comment'
import style from './page.module.css'

type Props = { params: Promise<{ slug: string }> }

async function getBlog(slug: string) {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})
		// This checks that the GET request was successful
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params

  await connectDB()
  const blog = (await blogSchema.findOne({ slug }).lean()) as Blog | null

  if(!blog) {
    return(
      <h1>Page Not Found</h1>
    )
  }

  const imageSrc = blog.image && blog.image.startsWith('/') ? blog.image : `/images/${blog?.image ?? 'default.jpg'}`

  return (
    <main className={style.blogContainer}>
      <h1 className={style.title}>{blog?.title}</h1>
      <p className={style.date}>{String(blog?.date)}</p>

      {imageSrc && (
        <div className={`${style.imageWrapper} media-frame`}>
          <Image
            src={imageSrc}
            alt={blog?.imageAlt || blog?.title || 'Blog image'}
            fill
            sizes="(max-width: 960px) calc(100vw - 3rem), 900px"
          />
        </div>
      )}

      <div className={style.description}>
        {blog?.description ? (
          <div dangerouslySetInnerHTML={{ __html: blog.description }} />
        ) : (
          <p>{blog?.description}</p>
        )}
      </div>

      <section className={style.commentsSection}>
        <h2>Comments</h2>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment = {comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </section>

    </main>
  )
}
