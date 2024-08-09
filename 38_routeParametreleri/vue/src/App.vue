<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<script>
import addBlog from './components/add-blog.vue';
import showsBlogs from './components/shows-blogs.vue';
import header from './components/header.vue';
export default {
  components: {
    "add-blog": addBlog,
    "show-blog": showsBlogs,
    "app-header" : header
  },
  data() {
    return {

    }
  }
}
</script>