<template>
  <div class="container">
    <h1><a :href="blog.url">{{blog.title}}</a></h1>
    <section>
      <h2>Posts</h2>
      <section class="post" v-for="post in posts" :key="post.id">
        <h3><a :href="blog.post_url">{{post.title}}</a></h3>
        <p>{{Object.keys(post)}}</p>
        <div class="blog-body" v-html="post.body"></div>
      </section>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { client } from '../../services/tumblr-client'

const blogName = 't-skgm'

export default {
  async asyncData ({ params }) {
    // const { blog: blog } = await client.blogInfo(blogName)
    const postsAll = await client.blogPosts(blogName)
    return {
      ...postsAll
    }
  }
}
</script>

<style lang="scss" scoped="">
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
