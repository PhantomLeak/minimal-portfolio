import React from "react";
import { BookCover } from "book-cover-3d";
import books from "../data/books";
import { Tooltip } from '@mantine/core';
// import { Carousel } from '@mantine/carousel';

function Bookshelf() {
  const handleRightClick = () => {
    document.getElementById("minimalBookshelf").scrollLeft += 600;
  };

  const handleLeftClick = () => {
    document.getElementById("minimalBookshelf").scrollLeft -= 600;
  };

  const toolTipMesage = "These are some of the books I've read and rated. ratings are based on my personal opinion. '?' means I am currently reading the book"

  return (
    <div className="mb-10">
      <span className="text-white text-2xl underline font-bold">
        <i className="fa-solid fa-book fa-xs mr-2" />
        My Bookshelf
        {" "}
        <Tooltip label={toolTipMesage} multiline withArrow w={300}>
          <i className="fa-solid fa-circle-info fa-xs text-white"/>
        </Tooltip>
      </span>
      <div className="flex overflow-x-auto overflow-y-visible mt-4">
        <button type="button" onClick={handleLeftClick}>
          <i className="fa-solid fa-chevron-left text-white"></i>
        </button>
        <div
          className="flex overflow-x-auto overflow-y-visible mx-3"
          id="minimalBookshelf"
        >
          {books.map((book, index) => (
            <div>
              <div className="flex-grow-0 flex-shrink-0 ml-10 my-5 mx-4">
                <BookCover height={250} width={150}>
                  <img src={book.url} />
                  key={index + "_item"}
                </BookCover>
              </div>
              <span className="ml-12 text-white">Rating: {book.rating}/10</span>
            </div>
          ))}
        </div>
        <button type="button" onClick={handleRightClick}>
          <i className="fa-solid fa-chevron-right text-white"></i>
        </button>
      </div>
    </div>
  );
}

export default Bookshelf;
