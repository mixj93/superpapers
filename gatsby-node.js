const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allPapersJson {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  result.data.allPapersJson.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/paper.js`),
      context: {
        id: node.id
      }
    })
  })
}
