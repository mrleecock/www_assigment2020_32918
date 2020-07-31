import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from './components/blogs-component'
import CreateBlog from './components/create-blog-component';
import axios from 'axios';

class App extends React.Component {

  state = {
    blogs: []
  };

  componentDidMount() {
    axios.get('/api/mblogs')
        .then(response => {
            this.setState({blogs: response.data});
            this.setState({blogs: this.state.blogs.reverse()});
        })
        .catch(function(error){
            console.log(error);
        })
}

  createBlog = (newBlog) => {
    this.setState({blogs: [newBlog, ...this.state.blogs]});
  }

  render() {
      return (
        <div className="bg-dark">
         <div className="container bg-secondary">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">MBLOGS</h1>
              <p className="lead">minimalist micro-blogging</p>
            </div>
          </div>
          
          <CreateBlog createBlog={this.createBlog}/>
          
          <Blogs blogs={this.state.blogs}/>
         </div>
        </div>
      );
  }
}

export default App;
