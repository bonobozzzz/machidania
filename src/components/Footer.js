import React from 'react'

import logo from '../img/logo2.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-white">
        <div className="content has-text-centered" style={{marginBottom: '10px'}}>
          <img
            src={logo}
            alt="Machidania"
            style={{ width: '50px' }}
          />
          <p>© 2019 machidania</p>
        </div>
      </footer>
    )
  }
}

export default Footer
