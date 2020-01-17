<template>
    <div class="head-nav-contacts head-nav-blocks">
        <!-- <div class="head-nav-contacts__line phone">+31412345252345</div> -->
        <a class="head-nav-contacts__line phone" href="tel:+375(29)6414870">+375(29)6414870</a>
        <ul class="head-nav-contacts__line social">
            <li class="social-icon">
                <a target="_blank" href="https://vk.com/banzai_team"><i class="fa fa-vk"></i></a>
            </li>
            <li class="social-icon">
                <a target="_blank" href="https://www.instagram.com/banzai_karate/"><i class="fa fa-instagram"></i></a>
            </li>
            <li class="social-icon">
                <a target="_blank" href="https://www.youtube.com/channel/UC1IFLnA3X21JLUPxTrKEWRA"><i class="fa fa-youtube"></i></a>
            </li>
            <li class="social-icon">
                <a target="_blank" href="https://www.facebook.com/banzaikarateteam/"><i class="fa fa-facebook"></i></a>
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
    .head-nav-contacts {
        color: #fff;
    }

    .phone {
        font-size: 3vw;
    }

    @media screen and (min-width: 768px) {
        .phone {
            font-size: 1.5vw;
        }
    }

    .social {
        display: flex;
        justify-content: center;
        flex-flow: wrap;
    }

    .social-icon {
        padding: 0 10px;
    }

    .head-nav-contacts__line {
        padding-bottom: 8px;
    }

</style>