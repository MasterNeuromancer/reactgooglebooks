import React, { Component } from 'react';
// import Book from "./../components/Book";
import API from "./../utils/API";

class Search extends Component {

  state = {
    search: "",
    book: []
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
      .searchBook(this.state.search)
      .then(res => console.log(res))
      .then(res => this.setState({ book: res.data}))
      .then(console.log(this.state.book))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <div className="add">
          <form>
            <div className="form-group">
              <label htmlFor="search">Book Search</label>
              <input
                type="text"
                name="search"
                id="search"
                className="form-control"
                placeholder="Search Title"
                value={this.state.search}
                onChange={this.handleInput}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
          </form>

        </div>
        {/* <div>
          <div className="books">
            <img src={triton} alt="UCSD Triton" />
            {this.state.books.map(book => (
              <Book
                key={book._id}
                title={book.title}
                author={book.author}
                description={book.description}
                image={book.image}
                link={book.link}
              />
            ))}
          </div>
        </div> */}
      </div>
    )
  }
}


export default Search;
