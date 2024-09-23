import { createRouter, createWebHistory } from 'vue-router' // createWebHistory: 1.Clean URLs without# 2.SEO Friendly 3.Utilize Browsers' History API for nav. 
import HomePage from './views/Home'
import AboutPage from './views/About'

// Set Routes
const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage }
]

// Create the router instance
const router = createRouter({
    history: createWebHistory(), // Use the History API for clean URLs
    routes
})

// Export the router so it can be used in main.js
export default router
