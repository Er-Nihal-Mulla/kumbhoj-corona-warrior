import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>about us</h3>
          <p>
            ही एक वेबसाइट आहे, जिथे लोकांना कोविड -19 ला कसे रोखता येईल,
            कोविड -19 ची लक्षणे काय आहेत, आपण खबरदारी कशी घेऊ शकतो,
            त्यांच्याशी संपर्क साधण्यासाठी सोशल मीडिया लिंकसह डॉक्टरांचा तपशील.
            अधिक माहितीसाठी आपण "आरोग्य आणि कुटुंब कल्याण विभागातील मिस्ट्री" वर
            भेट देऊ शकता<br></br> <a href="https://www.mohfw.gov.in/" className="btn" >Click here </a>
          </p>
        </div>

        <div className="box">
          <h3>locations</h3>
          <a href="/">Maharashtra</a>
          <a href="/">Kolhapur</a>
          <a href="/">Hatkanangale</a>
          <a href="/">Kumbhoj</a>
          <a href="/">...</a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="/">home</a>
          <a href="/">prevent</a>
          <a href="/">symptoms</a>
          <a href="/">precautions</a>
          <a href="/">doctor</a>
          <a href="/">hand-wash</a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="/">facebook</a>
          <a href="/">twitter</a>
          <a href="/">instagram</a>
          <a href="/">linkedin</a>
          <a href="/">youtube</a>
        </div>
      </div>

      <h1 className="credit">
        {" "}
        created and developed by{" "}
        <a href="https://mr-nihal-mulla.github.io/nihal-portfolio-v1/">
          Er. Nihal Mulla{" "}
        </a>{" "}
        &copy; copyright @ 2021{" "}
      </h1>
    </div>
  );
};

export default Footer;
