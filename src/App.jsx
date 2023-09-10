import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';
const App = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = reviews[index];
  console.log(reviews);

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
        <p className="info">
          <div className="btn-container">
            <button className="prev-btn">
              <FaChevronLeft />
            </button>
            <button className="next-btn">
              <FaChevronRight />
            </button>
          </div>
          <button className="btn btn-hipster">surprise me</button>
        </p>
      </article>
    </main>
  );
};
export default App;
