import React, { Component } from 'react';
import API from "../utils/API";
import Book from "./../components/Book";
import triton from "./../assets/images/triton.jpg";

class Books extends Component {

  state = {
    name: "Books",
    books: []
  }

  componentDidMount() {
    API
      .getAllBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
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
    )
  }
}


export default Books;
