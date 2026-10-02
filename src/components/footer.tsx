import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className = {style.footer}>
      <div className={style.inner}>
        © 2025 Lorinc's Website | All Rights Reserved
      </div>
    </footer>
  );
}