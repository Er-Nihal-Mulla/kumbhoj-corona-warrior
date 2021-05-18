import React from "react";

const Doctor = () => {
  return (
    <div>
      <section className="doctor" id="doctor">
        <h1 className="heading">
          Which COVID test is best? Pros and cons of coronavirus detection
          methods<br></br>कोणत्या कोविड चाचणी सर्वोत्तम आहे? कोरोनाव्हायरस
          शोधण्याच्या पद्धतींचे साधक आणि बाधक
        </h1>

        <div className="box-container">
          {/*First row start*/}
          <div className="box">
            <h3>PCR (48-hour results)</h3>
            <span>
              <b className="green">Pros:</b> Most specific, most sensitive
              <br></br>
              <b className="red">Cons:</b> Can take a few days to get results
            </span>
          </div>

          <div className="box">
            <h3>Antigen (15-minute results)</h3>
            <span>
              <b className="green">Pros:</b> Fast results, highly specific,
              highly sensitive for positive results<br></br>
              <b className="red">Cons:</b> Less reliable for negative tests than
              PCR; less effective later in disease
            </span>
          </div>

          <div className="box">
            <h3>Antibody (results may be available within 24 hours)</h3>
            <span>
              <b className="green">Pros:</b> Simple blood test; can show whether
              you've had COVID-19
              <br></br>
              <b className="red">Cons:</b> Research still developing; not all
              people will have antibodies if infection was mild
            </span>
          </div>
          {/*First row end*/}
        </div>
      </section>
      {/*Second row start*/}
      <section className="doctor1" id="doctor1">
        <h1 className="heading">Testing method</h1>

        <div className="box-container">
          <div className="box">
            <h3>Nasal pharyngeal swab</h3>
            <span>
              <b className="green">Pros:</b> Most sensitive and accurate; higher concentration of virus in this area; widely available
              <br></br>
              <b className="red">Cons:</b> Uncomfortable; results take longer
            </span>
          </div>

          <div className="box">
            <h3>Nasal swab</h3>
            <span>
              <b className="green">Pros:</b> Less invasive; may encourage more people to get tested<br></br>
              <b className="red">Cons:</b> Less accurate
            </span>
          </div>

          <div className="box">
            <h3>Saliva</h3>
            <span>
              <b className="green">Pros:</b> Less invasive; option for people with pharyngeal conditions, such as throat cancer
              <br></br>
              <b className="red">Cons:</b> Takes a lot of saliva; potentially less sensitive
            </span>
          </div>
        </div>
      </section>

      {/*second row end*/}
    </div>
  );
};

export default Doctor;
