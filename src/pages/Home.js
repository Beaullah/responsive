import React from "react";

const Home = () => {
  const model = {
    textAlign: "Center",
  };
  const Comments = {
    com: "She is beautiful",
  }; 
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h3 style={model}>Daily Models</h3>
      <div className="post">
        <div className="post-image">
          <img src="model1.jpg" height="500px" width="100%" />
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
    </div>
  );
};

export default Home;
