import axios from 'axios'
import { client } from '../services/tumblr-client'

const blogName = 't-skgm'

const state = () => ({
  blogInfo: {},
  posts: []
})

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  setBlogInfo (state, blog) {
    state.blogInfo = blog
  },
}

const actions = {
  async getPosts ({ commit }, opts) {
    const { blog, posts } = await client.blogPosts(blogName, opts)
    commit('setBlogInfo', blog)
    commit('setPosts', posts)
  }
}

export { state, mutations, actions }
