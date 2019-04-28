import axios from "axios";

export default {
    getAllBooks: function() {
        return axios.get("/api/books");
    },

    addBook: function(book) {
        return axios.post("/api/new", book);
    },

    searchBook: function(search) {
        return axios.get("/api/books/search", search);
    }
}