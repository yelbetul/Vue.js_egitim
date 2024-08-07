const{ createApp } = Vue

var one = createApp({
    components: {
        
    },
    data(){
        return {
            output: "",
        }
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            console.log(this.$refs.icerik.value);
            console.log(this.$refs.icerik2.innerHTML);

            this.output = this.$refs.icerik2.innerHTML;
        }
    },
    computed: {
        
    }
}).mount("#app-one");
