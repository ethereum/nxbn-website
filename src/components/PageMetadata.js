import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

const PageMetadata = ({ description, meta, title }) => {
  // TODO replace ogImageDefault
  const { site, ogImageDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
            url
          }
        }
        ogImageDefault: file(
          relativePath: { eq: "ef-fellowship-program-og-image.png" }
        ) {
          childImageSharp {
            fixed(width: 758) {
              src
            }
          }
        }
      }
    `
  )

  const desc = description || site.siteMetadata.description
  const siteTitle = site.siteMetadata.title
  const siteUrl = site.siteMetadata.url
  const ogImageUrl = siteUrl.concat(ogImageDefault.childImageSharp.fixed.src)

  return (
    <Location>
      {({ location }) => {
        const { pathname } = location
        const canonical = `${site.siteMetadata.url}${pathname}`

        return (
          <Helmet
            htmlAttributes={{ lang: `en` }}
            title={title}
            titleTemplate={`%s | ${siteTitle}`}
            link={[{ rel: "canonical", key: canonical, href: canonical }]}
            meta={[
              {
                name: `description`,
                content: desc,
              },
              {
                name: `image`,
                content: ogImageUrl,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: desc,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: site.siteMetadata.author,
              },
              {
                name: `twitter:site`,
                content: site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: desc,
              },
              {
                property: `og:url`,
                content: site.siteMetadata.url,
              },
              {
                property: `og:image`,
                content: ogImageUrl,
              },
            ].concat(meta)}
          />
        )
      }}
    </Location>
  )
}

PageMetadata.defaultProps = {
  meta: [],
  description: ``,
  title: ``,
}

PageMetadata.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default PageMetadata
