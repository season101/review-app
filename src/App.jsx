import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';
const App = () => {
  const [index, setIndex] = useState(0);
  const { image, job, name, text } = reviews[index];

  // Helper function to generate random number [0, reviews.length].
  const returnRandom = () => {
    const randomNumber = Math.ceil(Math.random() * reviews.length);
    return randomNumber === index ? returnRandom() : randomNumber;
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight className="beer" />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button
            className="prev-btn"
            onClick={() =>
              index === 0 ? setIndex(reviews.length - 1) : setIndex(index - 1)
            }
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() =>
              index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1)
            }
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => {
            setIndex(returnRandom());
          }}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
