const{ createApp } = Vue

const eleman = {
    template: '<p>Ben eleman taginin içerisiyim. {{ name }} </p> <button v-on:click="changeName">İsim Değiştir</button>',
    data(){
        return {
            name : "adnan ziyagil"
        }
    },
    methods: {
        changeName: function(){
             this.name = "Bihter Ziyagil"
        }
    }
}

var one = createApp({
    components: {
        "app-ilk": eleman
    },
    data(){
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        
    }
}).mount("#app-one");

var two = createApp({
    components: {
        "app-iki": eleman
    },
    data(){
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        
    }
}).mount("#app-two");