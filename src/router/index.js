import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import PostList from '../views/PostList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostList
    },
    // redirect
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router