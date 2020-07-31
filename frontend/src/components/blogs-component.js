import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Blog from './blog-component';

class Blogs extends React.Component {

    render() {
      return this.props.blogs.map((blog, i) => (
        <Blog key={i} blog={blog}/>
      ));
  }
}

export default Blogs;
