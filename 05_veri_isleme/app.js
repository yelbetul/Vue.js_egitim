const{ createApp } = Vue

createApp({
    data(){
        return {
            name : "Betül",
            job: "Öğrenci",
            website: "http://gokhunyayla.com",
            websiteTag : '<a href= "https://webtangular.com"> Bu da HTML Tag eklenerek Benim Sitem</a>'
        }
    },
    methods: {
        
    }
}).mount("#app");
