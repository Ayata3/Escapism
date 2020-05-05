const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

exports.createPages = async ({graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('./src/components/templates/PostTemplate.tsx')
  // TODO: queriesのものを使えるようにする
  const result = await graphql(`
    query FetchPosts {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt(pruneLength: 40)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY/MM/DD")
              title
            }
          }
        }
      }
    }
  `)

  if(result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length -1 ? null : posts[index+1].node
    const next = index === 0 ? null : posts[index-1].node

    createPage({
      // e.g., post.node.fields.slug: /2020-05-04/
      path: `information${post.node.fields.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })
  })
}
