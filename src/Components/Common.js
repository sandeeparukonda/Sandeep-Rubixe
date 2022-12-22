import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import "./Common.css";
const Common = () => {
  return (
    <div className="card-conteiner">
      <p className="card-heading">TECH FOR TEENS - A RIBIXE INITIATIVE</p>
    <div className="cards">
      <Card2
        class="sk "
        cardhead="firstdiv"
        number="01"
        pic={"https://media.istockphoto.com/id/1364859722/photo/artificial-intelligence-concept.jpg?s=1024x1024&w=is&k=20&c=s2vD05u3Dnm9ys7PeCe6gSshiECwKSfCti8-jIxnRFQ="}
        title="Introducing AI to children in an age appropriate manner"
      />
      <Card1
        claa="num2 "
        cardhead="seconddiv"
        number="02"
        pic={"https://capable-creponne-a2ef8d.netlify.app/static/media/iot.531ba242c122d1ac6805.png"}
        title="Gain awareness on AI and build an Interactive story around it"
      />
      <Card2
        claa="num3 "
        cardhead="thirddiv"
        number="03"
        pic={"https://media.istockphoto.com/id/1364859722/photo/artificial-intelligence-concept.jpg?s=1024x1024&w=is&k=20&c=s2vD05u3Dnm9ys7PeCe6gSshiECwKSfCti8-jIxnRFQ="}
        title="Accquire programming skills in a user-friendly format"
      />
      <Card1
        claa="num4 "
        cardhead="fourthdiv"
        number="04"
        pic={"https://capable-creponne-a2ef8d.netlify.app/static/media/iot.531ba242c122d1ac6805.png"}
        title="Explore to mini projects on diverse topics"
      />
      <Card2
        claa="num5 "
        cardhead="fifthdiv"
        number="05"
        pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuG0v4IoN8G-8TS3a6Te3U_YcT3sToak4l2p57PYmVg&s"}
        title="Train the teachers programme"
      />
    </div>
    </div>
  );
};

export default Common;