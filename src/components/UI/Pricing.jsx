import React from "react";
import "../../styles/pricing.css";

const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Choose your test
          </h2>
          <p>
          Take our diagnostic tests to assess your mental health and wellbeing in multiple areas of life, 
          <br /> 
          gain more insight and take charge of your growth and wellbeing. <br /> 
          </p>
        </div>

        {/* ========== pricing wrapper =========== */}
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Anxiety</h2>
              <h2 className="pricing section__title">
                <span>Check if you are living<br></br>
                  with anxiety. </span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Worry about uncertain events.

                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Restlessness
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Rapid heartbeat
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Trauma
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Therapy, medication, lifestyle changes.
                </li>
              </ul>

              <button className="register__btn">
                <a href="https://heartitout.in/take-psychological-test/anxiety-test/" target="_blank">Understand Anxiety</a>
                </button>
            </div>
          </div>

          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Depression</h2>
              <h2 className="pricing section__title">
                <span>Check if you are at a risk of experiencing depression.</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Persistent sadness
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Loss of interest
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Sleep issues
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Low energy
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Hopelessness
                </li>
              </ul>

              <button className="register__btn">
              <a href="https://heartitout.in/take-psychological-test/depression-test/" target="_blank">Start Depression Test</a>
              </button>
            </div>
          </div>

          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">ADHD</h2>
              <h2 className="pricing section__title">
                <span>Manage your ADHD through an accurate diagnosis.</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Difficulty focusing
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Hyperactivity
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Impulsiveness
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Restlessness
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Genetics
                </li>
              </ul>

              <button className="register__btn">
              <a href="https://heartitout.in/take-psychological-test/adhd-test/" target="_blank">Start ADHD Test</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
