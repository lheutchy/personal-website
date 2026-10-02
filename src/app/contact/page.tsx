"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import style from "./page.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_2il82xg",
        "template_3mmo1uk",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "6E-FyzLBe_DwE87aD"
      );

      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("Error sending message. Try again.");
    }
  }

  return (
    <main className={style.container}>
      <h1 className={style.pageTitle}>Contact</h1>

      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>Name</label>
        <input
          name="name"
          type="text"
          className={style.input}
          value={form.name}
          onChange={handleChange}
          required
        />

        <label className={style.label}>Email</label>
        <input
          name="email"
          type="email"
          className={style.input}
          value={form.email}
          onChange={handleChange}
          required
        />

        <label className={style.label}>Message</label>
        <textarea
          name="message"
          className={style.textarea}
          value={form.message}
          onChange={handleChange}
          required
        />

        <input className={style.submit} type="submit" value="Send" />
      </form>

      {status && <p className={style.status}>{status}</p>}
    </main>
  );
}