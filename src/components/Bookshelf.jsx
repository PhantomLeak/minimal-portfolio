import React from 'react';
import { BookCover } from 'book-cover-3d';
import books from '../data/books'


function Bookshelf() {

    const handleRightClick = () => {
        document.getElementById("minimalBookshelf").scrollLeft += 600;
    }

    const handleLeftClick = () => {
        document.getElementById("minimalBookshelf").scrollLeft -= 600;
    }

    return (
        <div>
            <div className='flex overflow-x-auto overflow-y-visible'>
                <button type='button' onClick={handleLeftClick}><i class="fa-solid fa-chevron-left"></i></button>
                <div className="flex overflow-x-auto overflow-y-visible mx-3" id='minimalBookshelf'>
                    {books.map((book, index) => (
                        <div>
                            <div className='flex-grow-0 flex-shrink-0 ml-10 my-5 mx-4'>
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
                <button type='button' onClick={handleRightClick}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <span className='text-center  md:mx-48 my-10'>
                Scroll to see more books I've read. P.S. a ? means I'm currently readint it.
            </span>
        </div>
    )
}
 
 export default Bookshelf;