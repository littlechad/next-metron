import React from 'react'
import PropTypes from 'prop-types'

const Info = ({
  data,
  error,
}) => {
  const content = Object.keys(error).length > 0
    ? (<p>We encountered and error.</p>)
    : (
      <article>
        <h3>Character: {data.name}</h3>
        <p>birth year: {data.birth_year}</p>
        <p>gender: {data.gender}</p>
        <p>skin color: {data.skin_color}</p>
        <p>eye color: {data.eye_color}</p>
      </article>)

  return (
    <div className="CharacterInfo">
      {content}
    </div>
  )
}

Info.propTypes = {
  data: PropTypes.shape({}).isRequired,
  error: PropTypes.shape({}).isRequired,
}

export default Info
