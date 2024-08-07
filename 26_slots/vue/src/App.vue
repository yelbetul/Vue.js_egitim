<template>
  <h1>Slotlar</h1>
  <alt-bilesen>
    <template #baslik>
      <h2>{{title}}</h2>
    </template>
    <template #icerik>
      <p>Bu alt bileşene gönderilecek içeriktir.</p>
    </template>
    <template #baslik2>
      <h2>Bu alt Bileşene Gönderilecek Başlıktır2.</h2>
    </template>
    <template #icerik2>
      <p>Bu alt bileşene gönderilecek içeriktir.2</p>
    </template>

  </alt-bilesen>
</template>
<script>
import altBilesen from './components/alt-bilesen.vue';
export default {
  components: {
    "alt-bilesen": altBilesen,
  },
  data() {
    return {
      title:"merhaba ben alt bileşene gönderilecek basligim"
    }
  }
}
</script>
