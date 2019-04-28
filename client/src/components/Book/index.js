import React from "react";

function Book(props) {
    return(
    <div>
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
        <p>Description: {props.description}</p>
        <p>Image: {props.image}</p>
        <p>Link: {props.link}</p>
        <hr />
    </div>)
}

export default Book;