<template>
  <p><deneme></deneme></p>
  <div>
    <a :target="target" :href="link">WebTangular'a Git</a>
    <p><button @click="guncelle">Güncelle</button></p>
  </div>
</template>
<script>
import deneme from './components/deneme.vue';
export default {
  components:{
    "deneme" : deneme
  },
  data() {
    return{
      link:"",
      target:""
    }
  },
  methods:{
    guncelle(){
      this.link="https://webtangular.com";
      this.target="_blank"
    }
  }
}
</script>
