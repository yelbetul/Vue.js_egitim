<template>
  <!-- <add-blog></add-blog> -->
  <show-blog></show-blog>
</template>

<script>
import addBlog from './components/add-blog.vue';
import showsBlogs from './components/shows-blogs.vue';
export default {
  components: {
    "add-blog": addBlog,
    "show-blog": showsBlogs
  },
  data() {
    return {

    }
  }
}
</script>