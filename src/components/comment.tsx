import style from "./comment.module.css";

export interface IComment {
  user: string;
  comment: string;
  time: Date;
}

export default function Comment({ comment }: { comment: IComment }) {
  return (
    <div className={style.commentCard}>
      <h4 className={style.user}>{comment.user}</h4>
      <p className={style.text}>{comment.comment}</p>
      <span className={style.time}>
        {new Date(comment.time).toLocaleString("en-US")}
      </span>
    </div>
  );
}