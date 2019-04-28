import React, { Component } from 'react';
import API from "./../utils/API";

class Add extends Component {

  state = {
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
  };

  handleInput = e => {
    const { name, value } = e.target;
    // let name = e.target.name;
    // let value = e.target.value;
    this.setState({ [name]: value });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    API
      .addBook(this.state)
      .then(res => {
        alert(`Added new book ${res.data.title}`)
        this.setState({
          title: "",
          author: "",
          description: "",
          image: "",
          link: "",
        });
      }).catch(err => console.log(err));
  }


  render() {
    return (
      <div className="add">
        <form>
          <div className="form-group">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              className="form-control"
              placeholder="Enter Author"
              value={this.state.author}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              placeholder="Enter description"
              value={this.state.description}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              className="form-control"
              placeholder="Enter image"
              value={this.state.image}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              name="link"
              id="link"
              className="form-control"
              placeholder="Enter link"
              value={this.state.link}
              onChange={this.handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}


export default Add;
