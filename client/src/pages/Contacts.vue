<template>
  <section class="content-block content-contacts" id="contacts">
    <!-- <h2 class="content-header">Contacts</h2> -->
    <h2 class="content-header">Контакты</h2>
    <article class="content-contacts__wrapper">
      <p class="contacts-line">
        &#9742;
        <a
          class="head-nav-contacts__line phone"
          href="tel:+375(29)6414870"
        >&nbsp;+375(29)6414870</a>
        <!-- +375 (29) 641-48-70 -->
      </p>
      <p class="contacts-line">
        <i class="fa fa-map-marker"></i> улица Уборевича, 74, Минск
      </p>
      <p class="contacts-line">
        <i class="fa fa-clock-o"></i> 9:00 - 21:00
      </p>
    </article>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          gesture="media"
          allow="encrypted-media"
          allowfullscreen
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=minsk%20ubarevicha%2074&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <!-- <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> -->
        <!-- <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a> -->
      </div>
      <!-- <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> -->
    </div>
  </section>
</template>
<style>
.head-nav-contacts__line.phone {
  color: #fff;
  text-decoration: none;
}

.content-contacts {
  justify-content: center;
}

.content-contacts__wrapper .contacts-line {
  padding-bottom: 20px;
}

.gmap_canvas {
  position: relative;
  overflow: hidden;
  /* padding-top: 56.25%; */
}

.gmap_canvas iframe {
  /* position: absolute; */
  /* top: 0;
        left: 0; */
  width: 100%;
  height: 100%;
  min-height: 50vh;
  /* border: 0; */
}

@media screen and (min-width: 768px) {
  .gmap_canvas iframe {
    /* position: absolute; */
    /* top: 0;
        left: 0; */
    width: 50%;
    /* border: 0; */
  }
}
</style>
