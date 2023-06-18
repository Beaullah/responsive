import React from "react";
import model1 from "./imgaes/model1.jpg";
import Model2 from "./imgaes/Model2.jpg";
import Model3 from "./imgaes/Model3.jpg";
import Model4 from "./imgaes/Model4.jpg";
import Model5 from "./imgaes/Model5.jpg";
import Model6 from "./imgaes/model6.jpg";
import rat from "./imgaes/rat.jpg";
import val from "./imgaes/val.jpg";
const Home = () => {
  const model = {
    textAlign: "Center",
  };
  const Comments = {
    com: "She is beautiful",
  };
  const revealContent = (event) => {
    const clickedElement = event.currentTarget;
    const hiddenContent = clickedElement.querySelector(".model-p");

    if (hiddenContent.classList.contains("reveal-btn")) {
      hiddenContent.classList.remove("reveal-btn");
    } else {
      hiddenContent.classList.add("reveal-btn");
    }
  };
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
          <form>
            <input></input>
            <button>Comment</button>
          </form>
        </div>
      </div>
      <div className="model-pics">
        <div className="reveal-btn">
          {" "}
          <img src={Model2} />
          <p className="model-p" onClick={revealContent}>
            she hails from kumasi.{" "}
          </p>
        </div>
        <div>
          <img src={Model3} />
        </div>
        <div>
          <img src={Model3} />
        </div>
        <div>
          {" "}
          <img src={Model4} />
        </div>
      </div>
      <div className="model-pics">
        <div>
          <img src={Model5} />
        </div>
        <div>
          <img src={Model6} />
        </div>
        <div>
          {" "}
          <img src={rat} />
        </div>
        <div>
          {" "}
          <img src={rat} />
        </div>
      </div>
    </div>
  );
};

export default Home;
