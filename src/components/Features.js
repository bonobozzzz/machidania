import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import twitter from '../img/social/twitter.svg'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section box">
          <div className="has-text-centered">
            <div
              style={{
                width: '180px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px' }}>
            <h3 style={{ marginBottom: 5, paddingRight: 5 }}>{item.name}</h3>
            <a title="twitter" href={item.link}>
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: '20px', height: '20px' }}
              />
            </a>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
