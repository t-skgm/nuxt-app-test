<template>
  <div class="container">
    <h1><nuxt-link :to="{ name: 'blog' }">{{blogInfo.title}}</nuxt-link></h1>
    <section>
      <h2>Posts</h2>
      <section class="post" v-for="post in posts" :key="post.id">
        <h3><nuxt-link :to="{ name: 'blog-id', params: { id: post.id }}">{{post.id}}, {{post.title}}</nuxt-link></h3>
        <p>{{post.tags}}</p>
        <div class="blog-body" v-html="post.body"></div>
      </section>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    blogInfo () {
      return this.$store.state.blog.blogInfo
    },
    posts () {
      return this.$store.state.blog.posts
    }
  },
  methods: {
    ...mapActions({
      getPosts: 'blog/getPosts'
    })
  },
  async fetch ({store, params}) {
    await store.dispatch('blog/getPosts', {
      id: params.id
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;

  > section {
    margin: 1rem 0;
  }
}

.post {
  border: 1px solid #ddd;
  padding: 1rem;

  > h3 {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1rem;
  }
}

</style>
