import React from "react";
import "../../styles/exercises.css";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Mental Health Support</span>
          </h2>
          <p>
          Our platform is dedicated to supporting your mental health through a variety of tools and resources. </p>
        </div>

        {/* ========== exercise list ======== */}
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            {/* <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span> */}

            <div className="exercise__content">
              <h4>Healthy Mind</h4>
              <p>A healthy mind is the foundation of a fulfilling life. Our platform offers tools and guidance to help you nurture and sustain your mental health.</p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            {/* <span className="exercise__icon">
              <img src={yoga} alt="" />
            </span> */}

            <div className="exercise__content">
              <h4>Increased Mental Flexibility</h4>
              <p>Mental flexibility allows you to adapt to new situations and think creatively. Enhance your cognitive agility with our specially designed activities and exercises.</p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            {/* <span className="exercise__icon">
              <img src={extended} alt="" />
            </span> */}

            <div className="exercise__content">
              <h4>Reducing Stress and Anxiety</h4>
              <p>Managing stress and anxiety is easier with the right tools. Access techniques and resources that help you track, manage, and reduce stressors effectively.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
