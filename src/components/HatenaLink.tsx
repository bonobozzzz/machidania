import * as React from 'react'
import hatenablog from '../img/social/hatenablog-logo.svg'

interface Link {
  link: string
}

const hatenaLink = ({link}: Link) => {
  if (link !== undefined && link.includes("hatenablog.jp")) {
    return (
    <a title="hatenablog" href={link}>
      <img
        className="fas fa-lg"
        src={hatenablog}
        alt="hatenablog"
        style={{ width: '22px', height: '22px' }}
      />
    </a>
    )
  } else {
    return null
  }
}

export default hatenaLink
