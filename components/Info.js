import React from 'react'
import PropTypes from 'prop-types'

const Info = ({
  data,
  error,
  isFetchedOnServer = false,
}) => {
  const message = error
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
      {message}
      <p>(was character fetched on server? - <b>{isFetchedOnServer.toString()}</b>)</p>
    </div>
  )
}

Info.defaultProps = {
  error: null,
}

Info.propTypes = {
  data: PropTypes.shape({}).isRequired,
  error: PropTypes.string,
  isFetchedOnServer: PropTypes.bool.isRequired,
}

export default Info
