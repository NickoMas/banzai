<template>
    <ul class="head-nav-menu__desktop">
        <li
            v-for="(value, name, index) in navItems"
            :key="index">
            <!-- <a class="nav-item-link" href="#main" data-status="active">label1</a> -->
            <label
                :for="`lg_${name}`"
                v-bind="{ 'data-link': index === 0 ? 'main' : null }">
                <router-link
                    class="nav-item-link"
                    :to="name"
                    @click.native="updateActiveHero">
                    {{ value }}
                </router-link>
                <input
                    hidden
                    type="radio"
                    name="slot"
                    :id="`lg_${name}`"
                    v-bind="{ 'checked': index === 0 ? 'checked' : null }">
            </label>                        
        </li>
    </ul>
</template>

<script>
    import { navItemsCollection } from "../helpers/collections";

    export default {
        data() {
            return {
                navItems: navItemsCollection
            }
        },
        methods: {
            updateActiveHero() {
                return this.$store.commit('updateActiveHero', { event })
            }
        }        
    }
</script>

<style>
    .head-nav-menu__desktop {
        padding: 0;
        display: none;
        list-style-type: none;
    }

    .head-nav-menu__desktop li {
        cursor: pointer;
        color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 2.3vw;
    }
</style>