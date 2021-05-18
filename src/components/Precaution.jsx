import React from "react";
import do1 from "../images/do-img1.png";
import do2 from "../images/do-img2.png";
import do3 from "../images/do-img3.png";

import dont1 from "../images/dont-img1.png";
import dont2 from "../images/dont-img2.png";
import dont3 from "../images/dont-img3.png";

const Precaution = () => {
  return (
    <div>
      <section className="precautions" id="precautions">
        <h1 className="heading">take precautions against covid-19<br></br>कॉव्हिड -19 च्या विरोधात पूर्वकल्पना घ्या</h1>

        <div className="column">
          <div className="box-container">
            <h3 className="title">
              things you should DO<br></br>आपण काय करावे या गोष्टी
            </h3>

            <div className="box">
              <img src={do1} alt="" />
              <div className="info">
                <h3>
                  wash your hand<br></br>
                  हात धुवा
                </h3>
                <p>
                  Wash your hands often with soap and water. Use hand sanitizer
                  if soap and water arenâ€™t available.<br></br>आपले हात साबणाने
                  आणि पाण्याने वारंवार धुवा. साबण आणि पाणी नसल्यास हँड सॅनिटायझर
                  वापरा.
                </p>
              </div>
            </div>

            <div className="box">
              <img src={do2} alt="" />
              <div className="info">
                <h3>
                  always wear a mask<br></br>नेहमीच एक मुखवटा घाला
                </h3>
                <p>
                  Wear a mask that covers your nose and mouth to help protect
                  yourself and others.<br></br>स्वतःचे आणि इतरांचे रक्षण
                  करण्यासाठी आपल्या नाक आणि तोंड झाकणारा मुखवटा घाला.
                </p>
              </div>
            </div>

            <div className="box">
              <img src={do3} alt="" />
              <div className="info">
                <h3>
                  stay home during fever<br></br>ताप दरम्यान घरी रहा
                </h3>
                <p>
                  Most people with COVID-19 have mild illness and can recover at
                  home without medical care. Do not leave your home, except to
                  get medical care. Do not visit public areas.
                  <br></br>
                  कोविड -19 सह बहुतेक लोक सौम्य आजार आहेत आणि वैद्यकीय काळजी न
                  घेता घरी परत येऊ शकतात. वैद्यकीय सेवा वगळता आपले घर सोडू नका.
                  सार्वजनिक क्षेत्राला भेट देऊ नका.
                </p>
              </div>
            </div>
          </div>

          <div className="box-container">
            <h3 className="title">
              things you should NOT DO<br></br>आपण करू नये अशा गोष्टी
            </h3>

            <div className="box">
              <img src={dont1} alt="" />
              <div className="info">
                <h3>
                  avoid close contact with animals<br></br>प्राण्यांशी जवळचा
                  संपर्क टाळा
                </h3>
                <p>
                  People with suspected or confirmed COVID-19 should avoid
                  contact with animals, including pets, livestock, and wildlife.
                  <br></br>संशयित किंवा कन्फर्म्ड कोविड -19 असणार्‍या लोकांनी
                  पाळीव प्राणी, पशुधन आणि वन्यजीव यांचा समावेश असणार्‍या
                  प्राण्यांशी संपर्क करणे टाळले पाहिजे.
                </p>
              </div>
            </div>

            <div className="box">
              <img src={dont2} alt="" />
              <div className="info">
                <h3>
                  avoid close contact with peoples<br></br>लोकांशी जवळचा संपर्क
                  टाळा
                </h3>
                <p>
                  maintain 6 feet between the person who is sick and other
                  household members.<br></br>आजारी व्यक्ती आणि घरातील इतर
                  सदस्यांमध्ये 6 फूट अंतर ठेवा.
                </p>
              </div>
            </div>

            <div className="box">
              <img src={dont3} alt="" />
              <div className="info">
                <h3>
                  avoid crowded area<br></br>गर्दीचे क्षेत्र टाळा
                </h3>
                <p>
                  the virus that causes COVID-19 can transmit more easily
                  between people when there are many in close proximity.
                  <br></br>कोविड -19 ला कारणीभूत व्हायरस जवळजवळ बरेच लोक असतात
                  तेव्हा लोकांमध्ये सहजतेने प्रसारित होऊ शकतात.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Precaution;
