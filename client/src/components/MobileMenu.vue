<template>
    <div class="head-nav-menu__mobile">
        <input
            type="checkbox"
            id="head-nav-mobile-toggle"
            @change="checkInput"
            v-bind="{ checked: checkedInput ? true : null }">
        <span></span>
        <span></span>
        <span></span>
        <ul id="mobile-menu">
            <li
                v-for="(value, name, index) in navItems"
                :key="index">
                <a
                    class="nav-item-link"
                    v-scroll-to="{
                        el: `#${name === 'main' ? 'hero' : name}`,
                        onDone: checkInput
                    }"
                >
                    {{ value }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { navItemsCollection } from "./../helpers/collections";
    export default {
        data() {
            return {
                navItems: navItemsCollection,
                checkedInput: false
            }
        },
        methods: {
            checkInput: function ($event) {
                console.log('check', this.checkedInput);
                this.checkedInput = !this.checkedInput;
            },
        }
    }
</script>

<style>
    .head-nav-menu__mobile {
        display: flex;
        flex-direction: column;
        top: 5px;
        right: 20px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }

    .head-nav-menu__mobile > input {
        display: flex;
        width: 40px;
        height: 32px;
        position: absolute;
        cursor: pointer;
        opacity: 0;
        z-index: 2;
        top: 0;
    }

    .head-nav-menu__mobile span {
        display: flex;
        width: 29px;
        height: 2px;
        margin-bottom: 5px;
        position: relative;
        background: #ffffff;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 5px 0px;
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
    }

    .head-nav-menu__mobile span:first-child {
        transform-origin: 0% 0%;
    }

    .head-nav-menu__mobile span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    .head-nav-menu__mobile input:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-3px, -1px);
        background: #36383F;
    }
    .head-nav-menu__mobile input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    .head-nav-menu__mobile input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
    }

    #mobile-menu {
        position: absolute;
        width: 50vw;
        height: 360px;
        box-shadow: 0 0 10px #85888C;
        margin-top: -70px;
        padding: 100px;
        background-color: #2e2f31;
        -webkit-font-smoothing: antialiased;
        transform: translate(-45px, -100%);
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        list-style-type: none;
        border-radius: 0 0 10px 10px;
    }

    #mobile-menu li {
        padding: 10px 0;
        transition-delay: 2s;
    }

    .head-nav-menu__mobile input:checked ~ #mobile-menu {
        transform: translate(-45px, 0);
    }
</style>