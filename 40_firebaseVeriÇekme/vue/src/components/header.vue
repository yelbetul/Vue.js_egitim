<template>
    <nav>
        <ul>
            <li><router-link to="/">Blogları Göster</router-link></li>
            <li><router-link to="/ekle">Blog Ekle</router-link></li>
        </ul>
    </nav>
</template>
<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin:0;
}
li{
    display: inline-block;
    margin: 0px 10px;
}
a{
    color: #ffff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color:#444;
}
</style>