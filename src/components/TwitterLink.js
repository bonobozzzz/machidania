import React from 'react'
import PropTypes from 'prop-types'
import twitter from '../img/social/twitter.svg'

const TwitterLink = ({ item }) => {
  if (item.link === undefined) {
    return null
  } else {
    return (
      <a title="twitter" href={item.link}>
      <img
        className="fas fa-lg"
        src={twitter}
        alt="Twitter"
        style={{ width: '20px', height: '20px' }}
      />
    </a>
    )
  }
}

TwitterLink.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
  }).isRequired,
}

export default TwitterLink
