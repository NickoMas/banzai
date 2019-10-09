<template>
    <div class="head-nav-mobile-menu">
        <input type="checkbox" id="head-nav-mobile-toggle">
        <span></span>
        <span></span>
        <span></span>
        <ul id="mobile-menu">
            <li class="nav-item-main">
                <label for="md_main" data-link="hero">
                    <router-link class="nav-item-link" to="main" v-on:click.native="checkRadio">Main</router-link>
                    <input hidden type="radio" name="slot" id="md_main" checked>
                </label>
            </li>
            <li class="nav-item-about">
                <label for="md_about">
                    <router-link class="nav-item-link" to="about" v-on:click.native="checkRadio">About</router-link>
                    <input hidden type="radio" name="slot" id="md_about">
                </label>
            </li>
            <li class="nav-item-contacts">
                <label for="md_contacts">
                    <router-link class="nav-item-link" to="contacts" v-on:click.native="checkRadio">Contacts</router-link>
                    <input hidden type="radio" name="slot" id="md_contacts">
                </label>
            </li>
            <li class="nav-item-coaches">
                <label for="md_сoaches">
                    <router-link class="nav-item-link" to="сoaches" v-on:click.native="checkRadio">Coaches</router-link>
                    <input hidden type="radio" name="slot" id="md_сoaches">
                </label>
            </li>
        </ul>
    </div>
</template>

<style>
    .head-nav-mobile-menu {
        display: flex;
        flex-direction: column;
        top: 5px;
        right: 20px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }

    .head-nav-mobile-menu input {
        display: flex;
        width: 40px;
        height: 32px;
        position: absolute;
        cursor: pointer;
        opacity: 0;
        z-index: 2;
    }

    .head-nav-mobile-menu span {
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

    .head-nav-mobile-menu span:first-child {
        transform-origin: 0% 0%;
    }

    .head-nav-mobile-menu span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    .head-nav-mobile-menu input:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-3px, -1px);
        background: #36383F;
    }
    .head-nav-mobile-menu input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    .head-nav-mobile-menu input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
    }

    #mobile-menu {
        position: absolute;
        width: 100%;
        height: 360px;
        box-shadow: 0 0 10px #85888C;
        margin-top: -70px;
        padding: 100px;
        /* padding-top: 125px; */
        background-color: #2e2f31;
        -webkit-font-smoothing: antialiased;
        /* transform-origin: 0% 0%; */
        transform: translate(-45px, -100%);
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        list-style-type: none;
        border-radius: 0 0 10px 10px;
    }

    #mobile-menu li {
        padding: 10px 0;
        transition-delay: 2s;
    }

    .head-nav-mobile-menu input:checked ~ #mobile-menu {
        transform: translate(-45px, 0);
    }
</style>