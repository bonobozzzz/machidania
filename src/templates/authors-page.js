import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const AuthorsPageTemplate = ({
  heading,
  description,
  intro,
}) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={intro.blurbs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

AuthorsPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const AuthorsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AuthorsPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        description
        intro {
          blurbs {
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
