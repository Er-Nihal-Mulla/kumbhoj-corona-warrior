import React from "react";
import mainsymp from "../images/main-symp-img.png";
import sympa from "../images/symp-a.png";
import sympb from "../images/symp-b.png";
import sympc from "../images/symp-c.png";
import sympd from "../images/symp-d.png";
import sympe from "../images/symp-e.png";
import sympf from "../images/symp-f.png";

const Symtoms = () => {
  return (
    <div>
      <section className="symptoms" id="symptoms">
        <h1 className="heading">
          covid-19 symptoms<br></br>कोविड 19 लक्षणे
        </h1>

        <div className="column">
          <div className="main-image">
            <img src={mainsymp} alt="" />
          </div>

          <div className="box-container">
            <div className="box">
              <img src={sympa} alt="" />
              <h3>
                dry cough<br></br>
                कोरडा खोकला
              </h3>
            </div>

            <div className="box">
              <img src={sympb} alt="" />
              <h3>
                sore throat<br></br>घसा खवखवणे
              </h3>
            </div>

            <div className="box">
              <img src={sympc} alt="" />
              <h3>
                cold<br></br>थंड
              </h3>
            </div>

            <div className="box">
              <img src={sympd} alt="" />
              <h3>
                fever<br></br>ताप
              </h3>
            </div>

            <div className="box">
              <img src={sympe} alt="" />
              <h3>
                headache<br></br>डोकेदुखी
              </h3>
            </div>

            <div className="box">
              <img src={sympf} alt="" />
              <h3>
                vomiting<br></br>उलट्या होणे
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Symtoms;
