// https://www.gatsbyjs.org/docs/node-apis/

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const Parser = require('rss-parser');
const crypto = require('crypto');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // only edit markdown nodes
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const parser = new Parser({
    customFields: {
      item: ['description'],
    },
  })

  const feed = await parser.parseURL('https://blog.ethereum.org/en/next-billion/feed.xml')

  feed.items.forEach(blogPost => {
    const blogPostNode = {
      // Gatsby wants this...
      id: blogPost.title,
      parent: `__SOURCE__`,
      internal: {
        type: `BlogPost`
      },

      // Actually useful props
      title: blogPost.title,
      description: blogPost.description,
      date: blogPost.pubDate ? new Date(blogPost.pubDate).getTime() : 0,
      body: blogPost['content:encoded'] || blogPost.description,
      permaLink: blogPost.link,
      imageUrl: blogPost.enclosure ? blogPost['enclosure'].url : '',
    }

    // Gatsby also wants this...
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(blogPostNode))
      .digest(`hex`);

    blogPostNode.internal.contentDigest = contentDigest;

    createNode(blogPostNode);
  })
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    const component = path.resolve(`./src/templates/static.js`)
    createPage({
      path: node.fields.slug,
      component,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
