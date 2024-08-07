<template>
  <app-header v-bind:title="title"></app-header>
  <app-article v-bind:users="users"></app-article>
  <app-footer></app-footer>
</template>

<script>
import Header from './components/header.vue'
import Article from './components/article.vue';
import Footer from './components/footer.vue'


export default{
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-article": Article
  },
  data(){
    return{
      title:"Bu sayfamızın Başlığı",
      users: [
                { name: "Gökhun", spec: "Geliştirici", show: false },
                { name: "Elif", spec: "Dijital Pazarlama Uzmanı", show: false },
                { name: "Hasan", spec: "Full Stack Developer", show: false },
                { name: "Berkay", spec: "Back End Developer", show: false },
                { name: "Yaren", spec: "C# Geliştirici", show: false },
                { name: "Betül", spec: "Front End Developer - Veri Bilimi Mentörü", show: false },
            ]
    }
  }
}
</script>
<style scoped>
h1{
  color: red;
}
</style>