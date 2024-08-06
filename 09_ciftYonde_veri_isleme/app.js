const{ createApp } = Vue

createApp({
    data(){
        return {
            name : '',
            age : ''
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
