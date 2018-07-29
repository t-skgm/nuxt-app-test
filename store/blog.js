import axios from 'axios'
import { client } from '../services/tumblr-client'

const blogName = 't-skgm'

const state = () => ({
  blogInfo: {},
  posts: []
})

const mutations = {
  SET_POSTS (state, { blog, posts }) {
    state.blogInfo = blog
    state.posts = posts
  },
}

const actions = {
  async GET_POSTS ({ commit }) {
    const res = await client.blogPosts(blogName)
    commit('SET_POSTS', res)
  }
}

export { state, mutations, actions }
