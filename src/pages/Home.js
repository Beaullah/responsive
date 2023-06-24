import React from "react";
import { useState } from "react";
import model1 from "./imgaes/model1.jpg";
import Model2 from "./imgaes/Model2.jpg";
import Model3 from "./imgaes/Model3.jpg";
import Model4 from "./imgaes/Model4.jpg";
import Model5 from "./imgaes/Model5.jpg";
import Model6 from "./imgaes/model6.jpg";
import rat from "./imgaes/rat.jpg";
import val from "./imgaes/val.jpg";
const Home = () => {
  const [message, setmessage] = useState(null);
  const [print, setprint] = useState(false);
  const model = {
    textAlign: "Center",
  };

  const getData = (val) => {
    setprint(false);
    setmessage(val.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    // Your code for handling the comment submission goes here
    event.target.reset();
  }

  return (
    <div style={{ backgroundColor: "pink" }}>
      <h3 style={model}>Daily Models</h3>
      <div className="post">
        <div className="post-image">
          <img src={model1} height="500px" width="100%" />
        </div>
        <div className="post-input">
          <h3 style={model}> Aba</h3>
          <p>
            {" "}
            unwavering determination and positive outlook, she tackles
            challenges head-on and inspires those around her. Known for her
            intelligence and quick wit, Aba's sharp mind and insightful
            perspectives add depth to any conversation. Her kindness and empathy
            create a warm and welcoming atmosphere, making people feel valued
            and understood in her presence. Aba's adventurous spirit leads her
            to explore new opportunities and embrace diverse experiences, always
            seeking personal growth and learning. Her radiant smile and
            infectious laughter brighten up any room, leaving a lasting
            impression on everyone fortunate enough to cross paths with her. Aba
            is not only a woman of substance but also a true friend, always
            ready to offer support and encouragement to those in need.
          </p>
          <form onSubmit={handleSubmit}>
            <p> {print ? <h1>{message}</h1> : null}</p>
            <input onChange={getData}></input>
            <button onClick={() => setprint(true)}>Comment</button>
          </form>
        </div>
      </div>
      <div className="model-pics">
        <div className="reveal-btn">
          {" "}
          <img src={Model2} />
          <div className="overlay">
            <button id="click-me1">Click me</button>
          </div>
          <p className="model-p">she hails from kumasi. </p>
        </div>
        <div className="reveal-btn">
          <img src={Model3} />
          <div className="overlay">
            <button id="click-me1">Click me</button>
          </div>
          <p className="model-p">she hails from kumasi. </p>
        </div>
        <div className="reveal-btn">
          <img src={Model3} />
          <div className="overlay">
            <button id="click-me">Click me</button>
          </div>
          <p className="model-p">she hails from kumasi. </p>
        </div>
        <div className="reveal-btn">
          {" "}
          <img src={Model4} />
          <div className="overlay">
            <button id="click-me">Click me</button>
          </div>
          <p className="model-p">she hails from kumasi. </p>
        </div>
      </div>
      <div className="model-pics">
        <div className="reveal-btn">
          <img src={Model5} />
          <div className="overlay">
            <button id="click-me">Click me</button>
          </div>
          <p className="model-p">she hails from kumasi. </p>
        </div>
        <div className="reveal-btn">
          <img src={Model6} />
          <div className="overlay">
            <button id="click-me">Click me</button>
          </div>
          <p className="model-p">she hails from kumasi. </p>
        </div>
        <div className="reveal-btn">
          {" "}
          <img src={rat} />
          <div className="overlay">
            <button id="click-me">Click me</button>
          </div>
          <p className="model-p">she hails from kumasi. </p>
        </div>
        <div className="reveal-btn">
          {" "}
          <img src={rat} />
          <div className="overlay">
            <button id="click-me">Click me</button>
          </div>
          <p className="model-p">she hails from kumasi. </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
