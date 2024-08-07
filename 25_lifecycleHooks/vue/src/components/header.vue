<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      required: true
    }
  },
  methods:{
    changeTitle:function(){
      this.$emit("basligiDegistir","Alt Bileşen Tarafından Değiştirilen Başlık")
    }
  },
  data() {
    return {
        
    }
  }
}
</script>
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>