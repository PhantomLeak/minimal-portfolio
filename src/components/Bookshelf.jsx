import React, { useRef } from "react";
import { BookCover } from "book-cover-3d";
import books from "../data/books";
import { Tooltip } from '@mantine/core';

function Bookshelf() {
  const bookshelfRef = useRef(null);

  const handleRightClick = () => {
    if (bookshelfRef.current) {
      bookshelfRef.current.scrollLeft += 300;
    }
  };

  const handleLeftClick = () => {
    if (bookshelfRef.current) {
      bookshelfRef.current.scrollLeft -= 300;
    }
  };

  const toolTipMessage = "These are some of the books I've read and rated. Ratings are based on my personal opinion. '?' means I am currently reading the book.";

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
        <i className="fa-solid fa-book fa-xs mr-3 text-accent-light" />
        <span className="accent-underline">My Bookshelf</span>
        {" "}
        <Tooltip 
          label={toolTipMessage} 
          multiline 
          withArrow 
          w={300}
          position="top"
          color="rgba(100, 179, 244, 0.9)"
        >
          <i className="fa-solid fa-circle-info fa-xs text-accent-light ml-2 cursor-help"/>
        </Tooltip>
      </h2>
      
      <div className="relative">
        {/* Gradient fade on left side */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface-dark to-transparent z-10"></div>
        
        {/* Gradient fade on right side */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface-dark to-transparent z-10"></div>
        
        <div className="flex items-center">
          <button 
            type="button" 
            onClick={handleLeftClick}
            className="bg-surface-light bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 mr-2 z-20 transition-all duration-300 hover:shadow-glow"
          >
            <i className="fa-solid fa-chevron-left text-white"></i>
          </button>
          
          <div
            className="flex overflow-x-auto overflow-y-visible py-8 px-4 hide-scrollbar"
            ref={bookshelfRef}
            style={{ scrollBehavior: 'smooth' }}
          >
            {books.map((book, index) => (
              <div key={index} className="flex flex-col items-center mx-6 transform transition-transform duration-300 hover:scale-105">
                <div className="mb-4 shadow-xl">
                  <BookCover height={220} width={140}>
                    <img src={book.url} alt={book.title} />
                  </BookCover>
                </div>
                <div className="flex items-center bg-surface-light bg-opacity-30 rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">Rating: </span>
                  <span className="ml-1 text-accent-light font-bold">{book.rating}/10</span>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            type="button" 
            onClick={handleRightClick}
            className="bg-surface-light bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 ml-2 z-20 transition-all duration-300 hover:shadow-glow"
          >
            <i className="fa-solid fa-chevron-right text-white"></i>
          </button>
        </div>
      </div>
      
      {/* Add custom CSS to hide scrollbar but keep functionality */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
}

export default Bookshelf;
