<template>
    <div id="users">
        <ul>
            <li v-for="user in users" v-on:click="user.show = !user.show">
                <h2>{{ user.name }}</h2>
                <p v-show="user.show">{{ user.spec }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
#users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>