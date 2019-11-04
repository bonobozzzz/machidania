import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component<TagType> {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug} style={{ borderBottom: "0.5px solid #abb1b5", padding: 0}}>
        <Link to={post.node.fields.slug}>
          <h4>{post.node.frontmatter.title}</h4>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${tag} (${totalCount}件)`

    return (
      <Layout>
      <section className="section " style={{ paddingTop: '100px' }}>
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content" style={{justifyContent: "center" }}>
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem'}}
            >
              <p>{tagHeader}</p>
              <ul className="taglist" style={{display: "inline"}}>{postLinks}</ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
