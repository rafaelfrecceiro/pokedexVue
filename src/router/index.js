import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonCardList from '@/components/PokemonCardList'
import PagePlayer from "@/views/PagePlayer";
import PagePokedex from "@/views/PagePokedex";

Vue.use(VueRouter)

const routes = [
    {
        path: '/player',
        name: 'PagePlayer',
        component: PagePlayer

    },
    {
        path: '/pokedex',
        name: 'PagePokedex',
        component: PagePokedex,
        children: [{
            path: ':id',
            name: 'PokemonCardList',
            component: PokemonCardList
        }]
    }
]

const router = new VueRouter({
    linkActiveClass: 'active-link',
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
