import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class CreateBlog extends React.Component {
    
    state = {
        author: '',
        blog_text: ''
    }


    onChange_text = (e) => {
        if (e.target.value.length <=256) {
            this.setState({blog_text: e.target.value});
        }
    }
    onChange_author = (e) => {
        if (e.target.value.length <= 40) {
            this.setState({author: e.target.value});
        }
    }


    
    onClick = (e) => {
        e.preventDefault();
        if (!this.state.author || !this.state.blog_text){}
        else{

        const newBlog = {
            author: this.state.author,
            blog_text: this.state.blog_text
        };
        
        axios.post('/api/mblogs', newBlog)
            .then(res => console.log(res.data));
            
        

        this.props.createBlog(newBlog);
        this.setState({blog_text: ''});
        this.setState({author: ''});
    }
    }

    
 
    render() {
      return (
            <form>
                <div className="form-group">
                    <label htmlFor="nameform">Your name</label>
                    <input type="text" className="form-control" id="nameform" placeholder="nicname" value={this.state.author} onChange={this.onChange_author}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="blogtext">your text</label>
                    <textarea className="form-control" id="blogtext" rows="5" value={this.state.blog_text} onChange={this.onChange_text}></textarea>
                </div>
                <div style={{textAlign: "center"}}>
                <button type="submit" className="btn btn-primary mb-2" onClick={this.onClick}>Send</button>
                </div>
            </form>
      )
  }
}

export default CreateBlog;
