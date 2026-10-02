import React from 'react';
import Blog from '@/database/blogSchema'
import style from './blogPreview.module.css';
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  //Added to avoid error
  const src = props.image.startsWith("/") ? props.image : `/images/${props.image}`;

  return (
    <div className={style.card}>
      <div className={`${style.imageWrapper} media-frame`}>
        <Image 
          src={src}
          alt={props.imageAlt}
          fill
          sizes="(max-width: 850px) calc(100vw - 3rem), 800px"
        />
      </div>

      <div className={style.content}>
        <h3 className={style.title}>{props.title}</h3>
        <p className={style.date}>{props.date.toDateString()}</p>
        <p className={style.description}>{props.description}</p>

        <Link className={style.link} href={`/blogs/${props.slug}`}>
          Read More
        </Link>
        
      </div>
    </div>
  );
}
