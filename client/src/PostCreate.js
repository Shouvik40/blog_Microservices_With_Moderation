import React, { useState } from "react";
import axios from "axios";
import PostList from "./PostList";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [titleData, setTitleData] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitleData(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <hr />
      <h1>Posts</h1>
      <PostList titleData={titleData} />
    </div>
  );
};

export default PostCreate;
