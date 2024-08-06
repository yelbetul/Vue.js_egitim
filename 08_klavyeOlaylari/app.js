const{ createApp } = Vue

createApp({
    data(){
        return {
            age : 23,
            x : 0,
            y : 0
        }
    },
    methods: {
        isimYakala: function(){
            console.log("İsim alanına bir şey yazdın");
        },
        yasYakala: function(){
            console.log("Yaş alanına bir şey yazdın");
        }
    }
}).mount("#app");
