<template>
  <footer>
    <p>{{ copyright }} - {{ year }} - {{ title }}</p>
  </footer>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      copyright: "Tüm Hakları Saklıdır. (C)",
      year: 2001
    }
  }
}
</script>
<style scoped>
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>