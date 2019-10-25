<template>
    <li>
        <!-- <a class="nav-item-link" href="#main" data-status="active">label1</a> -->
        <label for="lg_main" data-link="hero">
            <router-link class="nav-item-link" to="main" v-on:click.native="checkRadio">Main</router-link>
            <input hidden type="radio" name="slot" id="lg_main" checked>
        </label>
    </li>
</template>

<script>
export default {

}
</script>

<style>

</style>