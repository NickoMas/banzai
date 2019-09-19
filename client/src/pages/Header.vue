<template>
    <header class="head-wrapper" v-bind:class="{ heroHeader: isActiveHero }">
        <nav class="head-nav-wrapper">
            <!-- <input type="checkbox" id="menu-toggle" hidden> -->
            <div class="head-nav-brand head-nav-blocks">
                <a class="head-nav-brand-link" href="/main">
                    <!-- <img src="./banzai_logo_min.jpg" alt="banzai_logo" height="65"> -->
                    <span class="head-nav-brand-link__name">Iaznab</span>
                </a>
            </div>
            <div class="head-nav-menu head-nav-blocks">
                <ul class="nav-items">
                    <li class="nav-item-main">
                        <!-- <a class="nav-item-link" href="#main" data-status="active">label1</a> -->
                        <label for="lg_main" data-link="hero">
                            <router-link class="nav-item-link" to="main" v-on:click.native="checkRadio">Main</router-link>
                            <input hidden type="radio" name="slot" id="lg_main" checked>
                        </label>
                    </li>
                    <li class="nav-item-about">
                        <!-- <a class="nav-item-link" href="#about">О нас</a> -->
                        <label for="lg_about">
                            <router-link class="nav-item-link" to="about" v-on:click.native="checkRadio">About</router-link>
                            <input hidden type="radio" name="slot" id="lg_about">
                        </label>
                    </li>
                    <li class="nav-item-contacts">
                        <!-- <a class="nav-item-link" href="#contacts">Контакты</a> -->
                        <label for="lg_contacts">
                            <router-link class="nav-item-link" to="contacts" v-on:click.native="checkRadio">Contacts</router-link>
                            <input hidden type="radio" name="slot" id="lg_contacts">
                        </label>
                    </li>
                    <li class="nav-item-coaches">
                        <!-- <a class="nav-item-link" href="#coaches">Тренеры</a> -->
                        <label for="lg_сoaches">
                            <router-link class="nav-item-link" to="сoaches" v-on:click.native="checkRadio">Coaches</router-link>
                            <input hidden type="radio" name="slot" id="lg_сoaches">
                        </label>
                    </li>
                    <!-- <router-view></router-view> -->
                </ul>
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
            </div>
            <!-- <label for="menu-toggle" class="label-toggle"></label> -->
        </nav>
        <!-- <div class="head-nav-pseudo-wrapper"></div> -->
    </header>
</template>

<script>
export default {
    data() {
        return {
            isActiveHero: true
        }
    },
    created() {
        this.isActiveHero = window.location.pathname === '/main';
    },
    watch: {
        name: () => console.log('whoawhoa'),
        $route: function() {
            console.log('this2', this);
        }
    },
    methods: {
        checkRadio: function (event) {
            const label = event.target.parentNode;
            label.click();
            this.isActiveHero = label.dataset.link ? true : false;
        }
    }
}
</script>


<style>
    .head-wrapper {
        height: 5rem;
        border: 1px solid red;
        background: #474343;
        transition: all .5s;
    }

    .head-nav-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .heroHeader .head-nav-wrapper {
        flex-flow: column;
    }

    .head-nav-menu {
        display: flex;
        align-items: center;
        width: calc(100% - 15%);
    }

    .head-nav-brand {
        width: 15%;
    }

    .red-color {
        background: red;
    }

    .heroHeader {
        height: 200px;
    }

    #mobile-menu {
        position: absolute;
        width: 100%;
        height: 360px;
        box-shadow: 0 0 10px #85888C;
        margin-top: -70px;
        padding: 50px;
        /* padding-top: 125px; */
        background-color: #2e2f31;
        -webkit-font-smoothing: antialiased;
        /* transform-origin: 0% 0%; */
        transform: translate(-95%, -120%);
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        list-style-type: none;
        border-radius: 20px 0 0 20px;
    }

    #mobile-menu li {
        padding: 10px 0;
        transition-delay: 2s;
    }

    .head-nav-mobile-menu input:checked ~ #mobile-menu {
        transform: translate(-94%, -3%);
    }

</style>
