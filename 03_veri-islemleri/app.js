const{ createApp } = Vue

createApp({
    data(){
        return {
            name: 'Betül', //string
            job:  'Öğrenci',
            age:  23, //int
            giyim: {
                sapka : true, //boolean
                pantolon: 'Kot',
                ayakkabi: false
            }, //obje
            yetenek : ["Python","HTML","CSS","Vue.js"]
        }
    }

}).mount("#ilk-uygulama");
