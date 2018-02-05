import React from 'react'

const Info = ({data, error, fetchCharacter, isFetchedOnServer = false}) => (
  <div className='CharacterInfo'>
    {
      error ? <p>We encountered and error.</p>
        : <article>
          <h3>Character: {data.name}</h3>
          <p>birth year: {data.birth_year}</p>
          <p>gender: {data.gender}</p>
          <p>skin color: {data.skin_color}</p>
          <p>eye color: {data.eye_color}</p>
        </article>

    }
    <p>
      ( was character fetched on server? -
      <b>{isFetchedOnServer.toString()})</b>
    </p>
    <style jsx>{`
      article {
        background-color: #528CE0;
        border-radius: 15px;
        padding: 15px;
        width: 250px;
        margin: 15px 0;
        color: white;
      }
      button {
        margin-right: 10px;
      }
    `}</style>
  </div>
)

export default Info
