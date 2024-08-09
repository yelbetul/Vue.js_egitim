<script setup>
const vRainbow = {
    mounted: (el) => el.style.color = "#" + Math.random().toString().slice(2, 8)
}
</script>
<template>
    <div id="show-blogs">
        <h1>Tüm Blog Gönderileri</h1>
        <input type="text" v-model="keyword" placeholder="Bloglarda Ara">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id">
                <h2 v-rainbow>{{ $filters.buyutFiltre(blog.title) }}</h2>
            </router-link>
            <p>{{ blog.content }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            blogs: [],
            keyword: ""
        }
    },
    methods: {
        buyut: function (title) {
            return title.toUpperCase();
        }
    },
    computed: {
        buyutComputed() {
            return (title) => title.toUpperCase();
        },
        filteredBlogs() {
            return this.blogs.filter(blog => blog.title.match(this.keyword))
        }
    },
    created() {
        self = this;
        fetch("https://vue-playlist-e58d1-default-rtdb.firebaseio.com/post.json", {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json())
            .then(function (json) {
                var blogArray = [];

                for (let key in json) {
                    json[key].id = key;
                    blogArray.push(json[key]);
                }
                console.log(json);
                self.blogs=blogArray;

            }).catch(function (err) {
                console.log(err);
            })
    }
}
</script>
<style scoped>
#show-blogs {
    max-width: 800px;
    margin: 0px auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #e2e2e2;
    border-radius: 5px;
}
</style>