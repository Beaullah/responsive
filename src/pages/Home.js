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
  // const [message, setmessage] = useState(null);
  // const [print, setprint] = useState(false);
  const model = {
    textAlign: "Center",
  };
  const [comments, setComments] = useState([
    { id: 1, content: "First comment" },
    { id: 2, content: "Second comment" },
    // Add more comments as needed
  ]);

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleEdit = (commentId, commentContent) => {
    setEditingCommentId(commentId);
    setEditedComment(commentContent);
  };

  const handleUpdate = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, content: editedComment };
      }
      return comment;
    });

    setComments(updatedComments);
    setEditingCommentId(null);
    setEditedComment("");
  };

  const handleDelete = (commentId) => {
    const filteredComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(filteredComments);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    const newCommentObj = {
      id: Date.now(),
      content: newComment,
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
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
          <form onSubmit={handleCreate}>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Enter a new comment"
            />
            <button type="submit">Add Comment</button>
          </form>

          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id}>
                {editingCommentId === comment.id ? (
                  <>
                    <input
                      type="text"
                      value={editedComment}
                      onChange={(e) => setEditedComment(e.target.value)}
                    />
                    <button onClick={() => handleUpdate(comment.id)}>
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <p>{comment.content}</p>
                    <button
                      onClick={() => handleEdit(comment.id, comment.content)}
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(comment.id)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            ))
          ) : (
            <p>No comments available.</p>
          )}
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
