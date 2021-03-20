import React from "react";
import PropTypes from "prop-types";

function Movie(props) {
  const { id, title, year, summary, poster } = props;
  return (
    <div className='movie__data'>
      <div>{title}</div>
      <h5>{year}</h5>
      <p>{summary}</p>
    </div>
  );
}

Movie.propType = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
