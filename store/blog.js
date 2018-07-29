import axios from 'axios'
import { client } from '../services/tumblr-client'

const blogName = 't-skgm'

const state = () => ({
  blogInfo: {},
  posts: []
})

const mutations = {
  setPosts (state, { blog, posts }) {
    state.blogInfo = blog
    state.posts = posts
  },
}

const actions = {
  async getPosts ({ commit }, opts) {
    const res = await client.blogPosts(blogName, opts)
    commit('setPosts', res)
  }
}

export { state, mutations, actions }
