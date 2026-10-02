import style from "./page.module.css";
import ProjectPreview from "@/components/projectPreview";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import Comment from "@/components/comment";
import { IComment } from "@/components/comment";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main>
      {projects &&
        projects.map((project: any) => {
          const comments: IComment[] = project.comments ?? [];

          return (
            <section
              key={project.slug}
              className={style.projectSection}
            >
              <ProjectPreview
                title={project.title}
                description={project.description}
                image={project.image}
                image_alt={project.imageAlt}
                slug={project.slug}
                comments={comments}
              />

              <div className={style.commentsSection}>
                <h2>Comments</h2>

                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <Comment
                      key={`${comment.user}-${comment.time}`}
                      comment={comment}
                    />
                  ))
                ) : (
                  <p>No comments yet.</p>
                )}
              </div>
            </section>
          );
        })}
    </main>
  );
}

async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().sort({ title: -1 }).lean();
    return projects;
  } catch (err) {
    return null;
  }
}