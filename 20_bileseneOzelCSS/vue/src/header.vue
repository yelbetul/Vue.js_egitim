<template>
  <h1>Bu İç Component'in Başlığı</h1>
    <ul>
        <li v-for="eleman in liste">{{ eleman }}</li>
    </ul>
</template>

<script>
export default{
  data(){
    return{
      liste: ["Anasayfa","Hakkımızda","Blog","İletişim"]
    }
  }
}
</script>
<style scoped>
h1{
  color: green;
}
</style>