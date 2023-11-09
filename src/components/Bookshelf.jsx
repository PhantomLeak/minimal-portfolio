import React from 'react';
import { BookCover } from 'book-cover-3d';
import books from '../data/books'


function Bookshelf() {
    return (
       <div className="flex mt-24 mb-24 overflow-x-auto overflow-y-visible">
            {books.map((book, index) => (
                <div>
                    <div className='flex-grow-0 flex-shrink-0 ml-10 my-5'>
                        <BookCover
                            height={250}
                            width={150}>
                            <img src={book.url} />
                        </BookCover>
                    </div>
                    <span className='ml-12'>Rating: {book.rating}/10</span>
                </div>
            ))}
       </div>
    )
 }
 
 export default Bookshelf;