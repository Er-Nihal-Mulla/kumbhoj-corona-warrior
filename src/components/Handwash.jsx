import React from "react";
import washa from "../images/wash-a.png";
import washb from "../images/wash-b.png";
import washc from "../images/wash-c.png";
import washd from "../images/wash-d.png";
import washe from "../images/wash-e.png";
import washf from "../images/wash-f.png";
import mainwash from "../images/main-wash-img.png";

const Handwash = () => {
  return (
    <div>
      <section className="hand-wash" id="hand-wash">
        <h1 className="heading">
          how to wash hand properly<br></br>नेहमी हात कसे धुवायचे
        </h1>

        <div className="column">
          <div className="box-container">
            <div className="box">
              <img src={washa} alt="" />
              <h3>
                water and soap<br></br>पाणी आणि साबण
              </h3>
            </div>

            <div className="box">
              <img src={washb} alt="" />
              <h3>
                palm to palm<br></br>पाम ते पाम
              </h3>
            </div>

            <div className="box">
              <img src={washc} alt="" />
              <h3>
                Between Fingurs<br></br>बोटांच्या दरम्यान
              </h3>
            </div>

            <div className="box">
              <img src={washd} alt="" />
              <h3>
                Focus on Thumbs<br></br>बोटांवर लक्ष द्या
              </h3>
            </div>

            <div className="box">
              <img src={washe} alt="" />
              <h3>
                Back of Hands<br></br>हात मागे
              </h3>
            </div>

            <div className="box">
              <img src={washf} alt="" />
              <h3>
                Focus on wrist<br></br>मनगटावर लक्ष द्या
              </h3>
            </div>
          </div>

          <div className="main-image">
            <img src={mainwash} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Handwash;
