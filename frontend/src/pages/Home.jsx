import React, {useEffect, useState} from "react";
import api from "../api";
import {Link} from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  api.get("/posts")
    .then((response) => {
      // console.log("Response from backend:", response);
      setPosts(response.data);
    })
    .catch((error) => console.error("Error fetching posts:", error.message));
  }, []);


   return (
    <div style={{ padding: "20px" }}>
      <h1>Personal Blog</h1>
      <hr />
      {posts && posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/article/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Home;