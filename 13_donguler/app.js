const{ createApp } = Vue

createApp({
    data(){
        return {
            karakterler:["Adnan","Bihter","Behlül","Matmazel"],
            ozellikler: [
                {name:"Adnan",age:55},
                {name:"Bihter",age:25},
                {name:"Behlül",age:27},
                {name:"Matmazel",age:53},
            ]
        }
    },
    methods: {
        
    },
    computed: {
        
    }
}).mount("#app");
