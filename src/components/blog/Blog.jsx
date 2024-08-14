import React from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";
import axios from "axios";
const Blog = ({post}) => {

    const date = new Date(post.publishedAt)
    const {day,month,year} = {
        day : date.getDate(),
        month : date.getMonth(),
        year : date.getFullYear()
    }

  return (
    <div className="myblog">
      <div className="myblog-title">
        <div className="title-name">
          <h1>{post.title}</h1>
          <span>{post.catagory}</span>
        </div>
        <div className="blog-des">
          <p>
            {post.description}
          </p>
        </div>
      </div>

      <div className="myimg">
        <img
          src={post.urlToImage}
          alt=""
        />
      </div>

      <div className="post-detail">
        <div className="post-title">
          <h3>Post Details</h3>
          <span>Hosted by {day}-{month}-{year} {post.author}</span>
        </div>
        <hr />
        <div className="post-content">
          <p>
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
