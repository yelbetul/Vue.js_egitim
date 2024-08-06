const{ createApp } = Vue

createApp({
    data(){
        return {
            name: "Betül",
            a : 3,
            b : 4
        }
    },
    methods: {
        hesapla: function(isim,gunDurumu){
            return "İyi " + gunDurumu + " "+ this.name;
        },
        topla: function(){
            return this.a + this.b;
        }
    }
}).mount("#ilk-uygulama");
