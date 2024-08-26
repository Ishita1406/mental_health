import React from "react";
import "../../styles/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import boxBreathing from "../../assets/img/Box+breathing.gif";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";
import binauralBeats from "../../assets/img/binauralBeats.jpeg";
import wheel from "../../assets/img/wheelOfEmotion.jpg";

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section__title">Techniques</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={binauralBeats} alt="" />
                </div>

                <h4>Binaural Beats</h4>
                <p>
                Binaural beats are an auditory technique where two slightly different frequencies are played in each ear, creating a perceived third tone. This effect helps synchronize brainwaves, promoting states such as relaxation, focus, and deep sleep. By targeting specific brainwave frequencies like Delta for sleep, Theta for meditation, and Alpha for focus, binaural beats can enhance mental well-being and cognitive performance.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={boxBreathing} alt="" />
                </div>

                <h4>Box Breathing</h4>
                <p>
                {/* Box breathing is a stress-relief technique involving four steps: inhale deeply through your nose for 4 seconds, hold your breath for 4 seconds, exhale slowly through your mouth for 4 seconds, and hold your breath again for 4 seconds. This rhythmic pattern helps calm the nervous system, improve focus, and manage stress. */}
                Box breathing, also known as square breathing, is a technique used to reduce stress and promote relaxation. It involves four simple steps<br></br> <br></br>
                1. Inhale: Breathe in slowly and deeply through your nose for 4secs.<br></br>
                2. Hold: Hold your breath for 4secs.<br></br>
                3. Exhale: Exhale slowly and completely through your mouth for a count of 4.<br></br>
                4. Hold: Hold your breath for 4secs before beginning the next inhale.<br></br> <br></br>
                You can adjust the count to fit your comfort level, but maintaining the same duration for each step helps create a steady rhythm. This technique can help calm the nervous system, improve focus, and manage stress. 
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={wheel} alt="" />
                </div>

                <h4>Wheel of Emotion</h4>
                <p>
                The Wheel of Emotions, created by psychologist Robert Plutchik, is a visual tool that categorizes and relates different emotions. It displays primary emotions at the center, with secondary emotions and varying intensities extending outward. By illustrating contrasts between emotions, such as joy versus sadness, the wheel helps individuals identify, understand, and communicate their emotional states more effectively.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
