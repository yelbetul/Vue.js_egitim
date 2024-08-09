import {createRouter, createWebHistory} from 'vue-router'

import showsBlogs from './components/shows-blogs.vue'
import addBlog from './components/add-blog.vue'
import singleBlog from './components/single-blog.vue';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path: '/',component: showsBlogs},
        {path: '/ekle',component: addBlog},
        {path: '/blog/:id', component : singleBlog}
    ]
});

export default router