import React from 'react'
import PropTypes from 'prop-types'
import note from '../img/social/note.png'

const NoteLink = ({ item }) => {
  if (item.link.includes("note.mu")) {
    return (
    <a title="note" href={item.link}>
      <img
        className="fas fa-lg"
        src={note}
        alt="note"
        style={{ width: '22px', height: '22px' }}
      />
    </a>
    )
  } else {
    return null
  }
}

NoteLink.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
  }).isRequired,
}

export default NoteLink
