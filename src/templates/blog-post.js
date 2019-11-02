import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import note from '../img/social/note_big.png'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  link,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section" style={{paddingTop: "100px"}}>
      {helmet || ''}
      <div className="container content ">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="is-size-5-mobile is-size-4-widescreen has-text-weight-bold is-bold-light" style={{paddingLeft: "5px"}}>
              {title}
            </h1>
            {tags && tags.length ? (
              <div>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`} className="tag-item">
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <PostContent content={content} />
            <div className="has-text-centered" style={{marginTop: "50px"}}>
              <a className="josefin" style={{color: "#2b2523", fontSize: "18px"}}
                href={link} target="_blank">続きはnoteへ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  link: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        link={post.frontmatter.link}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="link"
              content={`${post.frontmatter.link}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        link
        tags
      }
    }
  }
`
