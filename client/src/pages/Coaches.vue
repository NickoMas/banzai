<template>
  <section class="content-block content-coaches" id="coaches">
    <!-- <h2 class="content-header">Coaches</h2> -->
    <h2 class="content-header">Тренеры</h2>
    <article class="content-coaches__wrapper">
      <figure class="content-coaches__coach content-coaches__kir">
        <!-- <img class="content-block__avatar" src="images/coaches_kir.jpg" alt="Раханский Кирилл Степанович"> -->
        <div class="avatars-container">
          <img
            class="content-block__avatar content-block__avatar--shown"
            src="images/kir-1.jpeg"
            alt="Раханский Кирилл Степанович"
          />
          <img
            class="content-block__avatar content-block__avatar--hidden"
            src="images/kir-2.jpeg"
            alt="Раханский Кирилл Степанович"
          />
        </div>
        <!-- <div class="image"></div> -->
        <figcaption class="content-coaches__text">
          Раханский Кирилл Степанович
          <!-- loremasdfasdfasdfasdfa afsdf asdf -->
        </figcaption>
      </figure>
      <figure class="content-coaches__coach content-coaches__eug">
        <div class="avatars-container">
          <img
            class="content-block__avatar content-block__avatar--shown"
            src="images/eug-1.jpeg"
            alt="Омельянчук Евгений Александрович"
          />
          <img
            class="content-block__avatar content-block__avatar--hidden"
            src="images/eug-2.jpeg"
            alt="Омельянчук Евгений Александрович"
          />
        </div>
        <!-- <img class="content-block__avatar" src="./coaches_eug.jpg" alt="Омельянчук Евгений Александрович"> -->
        <figcaption class="content-coaches__text">
          Омельянчук Евгений Александрович
          <!-- <img class="slide image" src="images/coaches_kir.jpg"/> -->
          <!-- <div class="image"></div> -->
          <!-- <p>loremasdfasdfasdfasdfa afsdf asdf</p> -->
        </figcaption>
      </figure>
    </article>
  </section>
</template>

<style>
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

.content-coaches__text .image {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #fff;
  margin: auto;
  margin-bottom: 15px;
}

.content-coaches__coach {
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  background-color: #000;
  color: #fff;

  height: auto;
  position: relative;
}

.content-block__avatar {
  height: auto;
  width: 100%;
  /* box-shadow: 0 0 7px 0px red; */
  position: relative;
  /* border-radius: 50%; */

  width: 50%;
  /* height: 100%; */
  transition: all 0.3s ease-in-out;
}

.content-block__avatar--shown {
  opacity: 1;
}

.content-block__avatar--hidden {
  opacity: 0;
  position: absolute;
}

.avatars-container:hover .content-block__avatar--hidden {
  opacity: 1;
}

.avatars-container:hover .content-block__avatar--shown {
  opacity: 0;
}

.avatars-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.content-block__avatar--kir {
  /* background: url('./coaches_kir.jpg') no-repeat -343px -29px; */
}

.content-block__avatar--eug {
  /* background: url('./coaches.jpg') no-repeat -173px -19px; */
}
</style>