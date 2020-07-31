import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import axios from 'axios';

class Blog extends React.Component {

    render() {
      return (
          <div className="card" style={{margin: "20px 20px 20px 20px"}}>
              <div className="card-body">
                <h5 className="card-title"> {this.props.blog.author} </h5>
                <p className="card-text">{this.props.blog.blog_text}</p>
              </div>
          </div>
      )
  }
}

export default Blog;
