<template>
  <app-header v-bind:title="title" v-on:basligiDegistir="updatedTitle($event)"></app-header>
  <app-article v-bind:users="users"></app-article>
  <app-footer v-bind:title="title"></app-footer>
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
      title:"Betül Yel",
      users: [
                { name: "Gökhun", spec: "Geliştirici", show: false },
                { name: "Elif", spec: "Dijital Pazarlama Uzmanı", show: false },
                { name: "Hasan", spec: "Full Stack Developer", show: false },
                { name: "Berkay", spec: "Back End Developer", show: false },
                { name: "Yaren", spec: "C# Geliştirici", show: false },
                { name: "Betül", spec: "Front End Developer - Veri Bilimi Mentörü", show: false },
            ]
    }
  },
  methods: {
    updatedTitle: function(degisenBaslik){
      this.title = degisenBaslik;
    }
  }
}
</script>
<style scoped>
h1{
  color: red;
}
</style>