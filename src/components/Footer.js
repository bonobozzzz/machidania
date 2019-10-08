import React from 'react'

import baku from '../img/baku.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-white">
        <div className="content has-text-centered" style={{marginBottom: '10px'}}>
          <img
            src={baku}
            alt="Machidania"
            style={{ width: '60px' }}
          />
          <p>© 2019 machidania</p>
        </div>
      </footer>
    )
  }
}

export default Footer
