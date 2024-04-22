import React from 'react'
import Book from './Book'
import EventExamples from './EventExamples';
  
import { books } from './books';


const BookList = () => {
    const getBook = (id)=>{
      const book = books.find((book)=> book.id === id)
      console.log(book);
      };
    
    return (
      <div>
        <div className="event">
          <h1>Amazon's Best Sellers</h1>
          <EventExamples />
        </div>
        <section className="booklist">
          {books.map((book, index) => {
            return (
              <Book
                {...book}
                key={book.id}
                getBook={getBook}
                number={index}
              ></Book>
            )
          })}
        </section>
      </div>
    )
};

export default BookList