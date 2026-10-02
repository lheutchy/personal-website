import React from 'react';
import style from "./page.module.css";

export default function Resume() {
  return(
    <main>
      <h1 className="page title">
        <a href="lorinc heutchy resume.pdf" download>Download Resume</a>
      </h1>
      <div className="resume">
        <section className="section">
          <h1 className="section-title">Education</h1>
          <div className="entry">
            <h3 className="entry-title">Eastside Catholic High School</h3>
            <p className="entry-info">
              Sammamish, WA <strong>|</strong> 08/2021 - 06/2025 <strong>|</strong>
              GPA 3.95 UW <strong>|</strong> 10 AP Courses
            </p>
            <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
            <p className="entry-info">
              California Polytechnic State University, San Luis Obispo
              <strong>|</strong> Expected Graduation May 2029
            </p>
          </div>
        </section>

        <section className="section">
          <h1 className="section-title">Work Experience</h1>
          <div className="entry">
            <h3 className="entry-title">Fall City Floating</h3>
            <p className="entry-info">
              Outdoor Crew <strong>|</strong> 06/2024 - 09/2024
            </p>
            <div className="entry-description">
              <ul>
              <li>Maintained cleanliness & safety standards across six sites</li>
              <li>Assisted customers with equipment usage & river safety</li>
              <li>Updated team daily on river conditions</li>
              <li>Managed online booking system</li>
              </ul>
            </div>

            <p className="entry-info">
              Shuttle Driver <strong>|</strong> 06/2025 - 09/2025
            </p>
            <div className="entry-description">
              <ul>
              <li>Safely transported customers & equipment between six sites</li>
              <li>Ensured vehicle cleanliness & safety standards</li>
              <li>Assisted passengers with loading/unloading gear</li>
              <li>Informed customers on river safety & daily conditions</li>
              </ul>
            </div>

            <h3 className="entry-title">Fall City Little League</h3>
            <p className="entry-info">
              Umpire <strong>|</strong> 03/2023 - 05/2024
            </p>
            <div className="entry-description">
              <ul>
                <li>Enforced & explained rules</li>
                <li>Cultivated a competitive & learning environment</li>
                <li>Led coach & player meetings</li>
                <li>Collaborated with field umpires</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h1 className="section-title">Skills</h1>
          <ul className="skill-list">
            <li>Java</li>
            <li>Python</li>
            <li>Semantic HTML5</li>
            <li>Swift</li>
          </ul>
        </section>

        <section className="section">
          <h1 className="section-title">Projects</h1>
          <div className="entry">
            <h3 className="entry-title">Personal Website</h3>
            <p className="entry-info">
              Designed and built a personal website usisng HTML and CSS
            </p>
            <ul>
              <li>Safely transported customers & equipment between six sites</li>
              <li>Ensured vehicle cleanliness & safety standards</li>
              <li>Assisted passengers with loading/unloading gear</li>
              <li>Informed customers on river safety & daily conditions</li>
              </ul>
          </div>
        </section>
      </div>
    </main>
  )
}