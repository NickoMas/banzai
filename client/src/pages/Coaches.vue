<template>
    <section class="content-block content-coaches" id="coaches">
        <h2 class="content-header">Coaches</h2>
        <article class="content-coaches__wrapper">
            <figure class="content-coaches__coach content-coaches__kir">
                <!-- <img class="content-block__avatar" src="./coaches_kir.jpg" alt="Раханский Кирилл Степанович"> -->
                <figcaption class="content-coaches__text">
                    <!-- Раханский Кирилл Степанович -->
                    <div class="image"></div>
                    loremasdfasdfasdfasdfa afsdf asdf
                </figcaption>    
            </figure>
            <figure class="content-coaches__coach content-coaches__eug">
                <!-- <img class="content-block__avatar" src="./coaches_eug.jpg" alt="Омельянчук Евгений Александрович"> -->
                <figcaption class="content-coaches__text">
                    <!-- Омельянчук Евгений Александрович -->
                    <div class="image">
                        <!-- <img class="slide image" src="images/coaches_kir.jpg"/> -->
                    </div>
                    <p>loremasdfasdfasdfasdfa afsdf asdf</p>
                </figcaption>
            </figure>
        </article>        
    </section>
</template>

<style>
    .image {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: #fff;
        margin: auto;
    }

    .content-coaches {
        height: 100%;
        padding: 0 40px;
        justify-content: flex-start;
    }

    .content-coaches__wrapper {
        height: 100%;
        display: flex;
        flex-flow: column;
    }

    .content-coaches__text {
        padding-left: 10px;
        padding-top: 10px;
        text-align: center;
    }

    .content-coaches__coach {
        height: 100%;
        display: flex;
        align-items: center;
        flex-flow: column;
        justify-content: center;
        /* height: auto; */
        background-color: #000;
        color: #fff;
    }

    .content-block__avatar {
        height: auto;
        width: 100%;
        max-width: 80px;
        box-shadow: 0 0 7px 0px red;
        position: relative;
        border-radius: 50%;
    }

    .content-block__avatar--kir {
        /* background: url('./coaches_kir.jpg') no-repeat -343px -29px; */
    }

    .content-block__avatar--eug {
        /* background: url('./coaches.jpg') no-repeat -173px -19px; */
    }

</style>