import React from "react";
import pre1 from "../images/pre-1.png";
import pre2 from "../images/pre-2.png";
import pre3 from "../images/pre-3.png";
import pre4 from "../images/pre-4.png";
import pre5 from "../images/pre-5.png";
import pre6 from "../images/pre-6.png";

const Prevention = () => {
  return (
    <div className="prevention">
      <section className="prevent" id="prevent">
        <h1 className="heading">
          {" "}
          how to prevent virus<br></br>व्हायरस कसे टाळावे
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={pre1} alt="" />
            <h3>Wash your place</h3>
            <p>
              Disinfect frequently used items and touched surfaces often.
              <br></br>
              बर्‍याचदा वापरल्या जाणार्‍या वस्तू आणि स्पर्श केलेल्या पृष्ठभागाचे
              निर्जंतुकीकरण करा.
            </p>
          </div>

          <div className="box">
            <img src={pre2} alt="" />
            <h3>Maintain distance</h3>
            <p>
              Avoid places that are crowded and maintain physical distancing of
              at least 6 feet.<br></br>गर्दी असलेली ठिकाणे टाळा आणि कमीतकमी 6
              फुटांचे शारीरिक अंतर राखू शकता.
            </p>
          </div>

          <div className="box">
            <img src={pre3} alt="" />
            <h3>Don't touch face</h3>
            <p>
              Kindly avoid touching your face, especially your eyes, nose and
              mouth.<br></br>
              कृपया आपला चेहरा, विशेषत: आपले डोळे, नाक आणि तोंड यांना स्पर्श
              करणे टाळा.
            </p>
          </div>

          <div className="box">
            <img src={pre4} alt="" />
            <h3>Wash your hand</h3>
            <p>
              Practise good hygiene: cover coughs and sneezes, don't touch your
              face,and wash hands often at least 20 seconds.<br></br>चांगले
              स्वच्छतेचा सराव करा: खोकला आणि शिंक घ्या, आपला चेहरा लावू नका आणि
              कमीतकमी 20 सेकंदात वारंवार हात धुवा.
            </p>
          </div>

          <div className="box">
            <img src={pre5} alt="" />
            <h3>Use napkin</h3>
            <p>
              Cough or sneeze into a tissue or your elbow. Throw the tissue away
              and wash your hands after.<br></br>ऊतक किंवा आपल्या कोपर्यात खोकला
              किंवा शिंक. उती दूर फेकून द्या आणि नंतर आपले हात धुवा.
            </p>
          </div>

          <div className="box">
            <img src={pre6} alt="" />
            <h3>Wear a mask</h3>
            <p>
              It helps to reduce the risk of spread both by close contact and by
              airborne transmission.<br></br>हे जवळचे संपर्क आणि एअरबोर्न
              ट्रान्समिशनद्वारे प्रसार होण्याचे जोखीम कमी करण्यास मदत करते.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prevention;
