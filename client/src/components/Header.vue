<template>
  <header
    class="head-wrapper hor-head"
    v-bind:class="{ heroHeader: isActiveHero, isMobile: isMobile }"
  >
    <nav class="head-nav-wrapper">
      <!-- <input type="checkbox" id="menu-toggle" hidden> -->
      <div class="head-nav-brand head-nav-blocks">
        <a class="head-nav-brand-link" v-bind:class="{ heroHeader: isActiveHero }" href="/hero">
          <img
            class="head-nav-brand-link__mobile"
            src="images/banzai_club_logo.jpg"
            alt="banzai_logo"
            height="80"
          />
          <img
            class="head-nav-brand-link__desktop"
            src="images/banzai_logo_min.jpg"
            alt="banzai_logo"
            height="80"
          />
          <!-- <img class="head-nav-brand-link__desktop--hor" src="images/banzai_logo_hor.png" alt="banzai_logo" height="80"> -->
          <!-- <span class="head-nav-brand-link__name">Iaznab</span> -->
        </a>
      </div>
      <div class="head-nav-menu head-nav-blocks">
        <DesktopMenu></DesktopMenu>
        <MobileMenu></MobileMenu>
      </div>
      <HeaderContacts></HeaderContacts>
      <!-- <label for="menu-toggle" class="label-toggle"></label> -->
    </nav>
    <!-- <div class="head-nav-pseudo-wrapper"></div> -->
  </header>
</template>

<script>
import DesktopMenu from "./DesktopMenu.vue";
import MobileMenu from "./MobileMenu.vue";
import NavItem from "./NavItem.vue";
import HeaderContacts from "./HeaderContacts.vue";

import { breakpoints } from "../helpers/constants";

export default {
  components: {
    DesktopMenu,
    MobileMenu,
    NavItem,
    HeaderContacts
  },
  computed: {
    isActiveHero() {
      return this.$store.state.isActiveHero;
    },
    isMobile() {
      return window.innerWidth <= breakpoints.mobile;
    }
  },
  created() {
    this.$store.commit("initializeActiveHero");
  },
  watch: {
    name: () => console.log("whoawhoa"),
    $route: function() {
      console.log("this2", this);
    }
  }
};
</script>


<style>
.head-wrapper.heroHeader:not(.isMobile) .head-nav-brand-link__mobile {
  display: inline;
}

.head-wrapper:not(.isMobile) .head-nav-brand-link__mobile,
.head-wrapper.hor-head:not(.isMobile) .head-nav-brand-link__mobile {
  display: none;
}

.head-wrapper {
  width: 100%;
  height: 5rem;
  position: fixed;
  z-index: 10;
  /* border: 1px solid red; */
  transition: all 0.5s;
  background: #000;
}

.heroHeader.head-wrapper {
  background: #000;
}

.head-nav-wrapper {
  /* visibility: hidden; */
  height: 100%;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-template-areas:
            "logo logo"
            "menu menu"; */
  grid-template: "menu logo contacts" 2fr / 0.5fr 1fr minmax(0, 0.5fr);
  align-items: center;
  /* grid-template-columns: 2fr 1fr;
        grid-template-rows: repeat(2, 1fr); */
  /* align-items: center; */
  transition: all 0.5s;
}

.head-nav-wrapper:hover {
  background: var(--main-mobile-bg-color);
}

.head-nav-brand {
  grid-column: 2;
  grid-row: 1;
  grid-area: logo;
  justify-self: center;
}

.head-nav-brand-link__desktop {
  display: none;
}

.head-nav-brand-link__name {
  padding-left: 15px;
  font-size: 2rem;
}

.head-nav-menu {
  grid-column: 1;
  grid-row: 1;
  grid-area: menu;
  justify-self: center;
  position: relative;
}

.head-nav-contacts {
  grid-column: 3;
  grid-row: 1;
  grid-area: contacts;

  display: flex;
  flex-flow: column wrap;
  place-items: center;
}

.heroHeader .head-nav-wrapper {
  flex-flow: column;
}

/* .heroHeader {
        height: var(--hero-header-height);
    } */

/* .main-wrapper {
        height: calc(100% - var(--hero-header-height));
    } */
</style>
