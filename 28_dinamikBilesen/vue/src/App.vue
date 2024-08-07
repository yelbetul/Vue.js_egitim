<template>
<component v-bind:is="component"></component>
<button v-on:click="component='form-one'">Form1 i Göster</button>
<button v-on:click="component='form-two'">Form2 i Göster</button>
</template>
<script>
import formOne from './components/form-one.vue';
import formTwo from './components/form-two.vue';
export default {
  components: {
    "form-one": formOne,
    "form-two":formTwo
  },
  data() {
    return {
      component:'form-two'
    }
  }
}
</script>
<style scoped>

</style>