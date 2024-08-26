import React from "react";
import "../../styles/start.css";
import journalImg from "../../assets/img/journalImg.jpg";
import { v4 as uuidV4 } from "uuid"
import axios from "axios";



const Start = () => {

  async function newPage(){
    const id=uuidV4();
    const date=new Date();
    const data="";
    const email = localStorage.getItem('loggedInUser');
    const fetchData = async () => {
      try {
          const response = await axios.post('http://localhost:8080/newPage', {
              data: { email: email,_id:id,data:data,date:date }
          });
          console.log(response);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  await fetchData();

    window.open(`/document/${id}`, '_blank');
  }



  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={journalImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
            Start Your Journey to Better Mental Health with  <span className="highlights">Journaling</span>
            </h2>
            <p>
            Taking the first step towards better mental health can be challenging, but it is incredibly rewarding. Journaling is a powerful tool to help you process your thoughts, understand your emotions, and track your progress over time.
            </p>

            <button className="register__btn" onClick={newPage}>Get Started</button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;