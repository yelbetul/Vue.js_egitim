<template>
    <ul>
        <p>{{ copyright }} - {{ year }}</p>
    </ul>
</template>

<script>
export default{
  data(){
    return{
        copyright: "Tüm Hakları Saklıdır. (C)",
        year: 2001
    }
  }
}
</script>