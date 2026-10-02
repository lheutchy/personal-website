import React from 'react';
import Project from '@/database/projectSchema'
import style from './projectPreview.module.css';
import Image from "next/image";

export default function ProjectPreview(props: Project) {
  //Added to avoid error
  const src = props.image.startsWith("/") ? props.image : `/images/${props.image}`;

  return (
    <div className={style.card}>
      <h3 className={style.title}>{props.title}</h3>

      <div className={`${style.imageWrapper} media-frame`}>
        <Image 
          src={src}
          alt={props.image_alt || props.title}
          fill
          sizes="(max-width: 900px) calc((100vw - 2.5rem) * 0.6), 510px"
        />
	    </div>

      <p className={style.description}>{props.description}</p>
    </div>
  );
}
