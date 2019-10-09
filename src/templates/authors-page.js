import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const AuthorsPageTemplate = ({
  heading,
  main,
}) => (
  <div className="content">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-7 is-offset-1">
            <h3 className="josefin has-text-weight-semibold is-size-2">{heading}</h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Features gridItems={main.authors} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

AuthorsPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  main: PropTypes.shape({
    authors: PropTypes.array,
  }),
}

const AuthorsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AuthorsPageTemplate
        heading={frontmatter.heading}
        main={frontmatter.main}
      />
    </Layout>
  )
}

AuthorsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AuthorsPage

export const authorsPageQuery = graphql`
  query AuthorsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        main {
          authors {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
            text
            name
          }
        }
      }
    }
  }
`
