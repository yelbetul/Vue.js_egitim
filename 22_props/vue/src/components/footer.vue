<template>
  <footer>
    <p>{{ copyright }} - {{ year }}</p>
  </footer>
</template>

<script>
export default {
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