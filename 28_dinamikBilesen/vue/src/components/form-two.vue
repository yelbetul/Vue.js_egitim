<template>
    <alt-bilesen>
        <template #form-header>
            <h2>Giriş Formu 2</h2>
            <p>Giriş yapmak için lütfen formu doldurunuz.</p>
        </template>
        <template #form-elements>
            <label for="email">E-Posta</label>
            <input type="email" name="email" placeholder="E-Posta adresini giriniz.">

            <label for="password">Şifre</label>
            <input type="password" name="password" placeholder="Şifrenizi giriniz.">
        </template>
        <template #form-controls>
            <button>Giriş Yap</button>
        </template>

    </alt-bilesen>
</template>
<script>
import altBilesen from './alt-bilesen.vue';
export default {
    components: {
        "alt-bilesen": altBilesen
    },
    data() {
        return {
        }
    }
}
</script>