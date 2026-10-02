import React from 'react';
import style from "./page.module.css";

export default function Resume() {
  return(
    <main className={style.container}>
      <h1 className={style.pageTitle}>Resume</h1>
      <p className={style.downloadTitle}>
        <a href="/Lorinc_Heutchy_Resume.pdf" download>Download Resume</a>
      </p>
      <div className="resume">
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Education</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>California Polytechnic State University</h3>
            <p className={style.entryInfo}>
              San Luis Obispo, CA <strong>|</strong> Expected Graduation: May 2029
            </p>
            <p className={style.entryInfo}>
              B.S. in Computer Science <strong>|</strong> GPA: 3.67
            </p>
            <p className={style.entryInfo}>
              <strong>Relevant Courses:</strong> Data Structures, Intro to Computer
              Organization, Systems Programming, Linear Analysis
            </p>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Technical Skills</h2>
          <ul className={style.skillList}>
            <li><strong>Languages:</strong> Java, TypeScript, Python, HTML, C, Assembly</li>
            <li><strong>Technologies:</strong> React, React Native, Expo, Node.js, Convex, MongoDB, Supabase</li>
            <li><strong>Developer Tools:</strong> Git, GitHub, Vercel</li>
          </ul>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Technical Experience</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>CodeBox Software Developer (Poly Buys)</h3>
            <p className={style.entryInfo}>Sep. 2025 - May 2026</p>
            <div className={style.entryDescription}>
              <ul>
                <li>Developed features for a student marketplace app with 175+ users using React Native, TypeScript, and Convex</li>
                <li>Built secure, real-time buyer-seller messaging, including inbox, chat, read receipts, reporting, and conversation hiding</li>
                <li>Implemented tag-based listing filters and hidden-content handling across feeds, listing pages, and owner views</li>
                <li>Added profile-picture uploads and mobile-only prompts that keep web users in browse-only mode</li>
              </ul>
            </div>
          </div>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>Hack4Impact Software Developer (One Cool Earth)</h3>
            <p className={style.entryInfo}>Sep. 2025 - May 2026</p>
            <div className={style.entryDescription}>
              <ul>
                <li>Developed volunteer and admin event-management interfaces with sorting, status indicators, and event-detail navigation</li>
                <li>Created a sign-up interface for minors with parent/guardian fields, password requirements, and responsive styling</li>
                <li>Researched and implemented Jotform waiver verification using an API route, email matching, and MongoDB</li>
                <li>Enhanced the calendar experience with a mobile-responsive redesign and expandable components</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Projects</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>PolyPassengers</h3>
            <p className={style.entryInfo}>
              React Native, TypeScript, Expo, Supabase <strong>|</strong> Sep. 2026
            </p>
            <div className={style.entryDescription}>
              <ul>
                <li>Built a Cal Poly rideshare app enabling drivers to post rides and riders to browse, join, and request rides</li>
                <li>Integrated Supabase for live ride data and user-linked memberships</li>
                <li>Added ride departure times, cost-share display, pull-to-refresh, and loading/error states</li>
                <li>Built a named-passenger view so drivers can see riders who joined each ride</li>
              </ul>
            </div>
          </div>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>Personal Website</h3>
            <p className={style.entryInfo}>
              TypeScript, React, Node.js, MongoDB <strong>|</strong> Sep. 2025
            </p>
            <div className={style.entryDescription}>
              <ul>
                <li>Created a personal website using HTML and CSS, then rebuilt it with TypeScript, React, and Node.js</li>
                <li>Designed and developed multiple pages including blogs, a project portfolio, and a personal resume</li>
                <li>Implemented a navbar to provide seamless navigation across pages</li>
                <li>Integrated MongoDB to store portfolio projects and blog posts, enabling dynamic content updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Work Experience</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>Fall City Floating</h3>
            <p className={style.entryInfo}>
              Outdoor Crew &amp; Shuttle Driver <strong>|</strong> June - Sep. 2024 - 2026
            </p>
            <div className={style.entryDescription}>
              <ul>
                <li>Supported 500+ daily customers across six sites with equipment usage, river safety, and shuttle operations</li>
                <li>Safely transported customers and equipment across six sites and maintained shuttle statistics</li>
                <li>Maintained cleanliness and safety standards and managed online booking through Peek Pro</li>
                <li>Coordinated daily across three departments to complete shared operations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
