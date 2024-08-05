    const{ createApp } = Vue

    createApp({
        data(){
            return {
                ilkDegisken: 'Hoş geldiniz :)',
                ikinciDegisken: 'Tekrar Merhaba'
            }
        }

    }).mount("#ilk-uygulama");
