import React from "react";
import { RiVirusFill } from "react-icons/ri";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h1>
            Kumbhoj C<RiVirusFill />RONA warrior<br></br>कुंभोज कोरोना योध्दा
          </h1>
          <h3>
            stay home, stay safe<br></br>घरी रहा, सुरक्षित रहा
          </h3>
          <a
            href="https://script.google.com/macros/s/AKfycbz7gBn_tpsVJW4N5XLxGHwuW2PP7631vCiwWNWjTA/exec"
            className="btn"
          >
            Check vaccine
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
