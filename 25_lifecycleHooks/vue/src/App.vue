<template>
  <h1>Lifecycle Hooks {{ title }}</h1>
  <button v-on:click="basligiGuncelle"> Başlığı Güncelle</button>
</template>

<script>
export default{
  data(){
    return{
      title: "deneme başlığı"
    }
  },
  methods:{
    basligiGuncelle(){
      this.title = "Başlığı Güncelledim."
    }
  },
  beforeCreate(){
    alert("create edilmeden önce")
  },
  created(){
    alert("create edildi.")
  },
  beforeMount(){
    alert("mount edilmeden önceki işlemler")
  },
  mounted(){
    alert("mount edildi.")
  },
  beforeUpdate(){
    alert("Update etmeden önce son sözleri olan burda söylesin:)")
  },
  updated(){
    alert("iş işten geçti update çoktan ettim")
  }
}
</script>
