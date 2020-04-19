<template>
  <div class="post" :style="setHeight">
    <section class="position-relative h-100" v-for="(post, index) in posts" :key="index">
      <!-- images -->
      <b-carousel :interval="0" indicators class="h-100">
        <!-- image 1 -->
        <b-carousel-slide v-if="post.image_path_1 != ''" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="url + post.image_path_1" alt="image slot" />
          </template>
        </b-carousel-slide>
        <!-- image 2 -->
        <b-carousel-slide v-if="post.image_path_2 != ''" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="url + post.image_path_2" alt="image slot" />
          </template>
        </b-carousel-slide>
        <!-- image 3 -->
        <b-carousel-slide v-if="post.image_path_3 != ''" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="url + post.image_path_3" alt="image slot" />
          </template>
        </b-carousel-slide>
        <!-- image 4 -->
        <b-carousel-slide v-if="post.image_path_4 != ''" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="url + post.image_path_4" alt="image slot" />
          </template>
        </b-carousel-slide>
        <!-- image 5 -->
        <b-carousel-slide v-if="post.image_path_5 != ''" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="url + post.image_path_5" alt="image slot" />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <!-- icons -->
      <div class="other_icons d-flex flex-column align-items-center justify-content-center">
        <div
          class="icon_outer my-2 py-3 d-flex flex-column
          align-items-center justify-content-center"
        >
          <i class="fas fa-cart-plus fa-2x mb-1 p-0 text-white"></i>
          <h4 class="m-0 text-white">カートへ</h4>
        </div>
        <div
          class="icon_outer my-2 py-3 d-flex flex-column
          align-items-center justify-content-center"
        >
          <i class="fas fa-heart fa-2x mb-1 p-0 text-white"></i>
          <h4 class="m-0 text-white">お気に入り</h4>
        </div>
        <div
          class="icon_outer my-2 py-3 px-2 d-flex flex-column
          align-items-center justify-content-center"
        >
          <i class="fas fa-question-circle fa-2x mb-1 p-0 text-white"></i>
          <h4 class="m-0 text-white">問い合わせ</h4>
        </div>
        <div
          class="icon_outer my-2 py-3 px-2 d-flex flex-column
          align-items-center justify-content-center"
        >
          <i class="fas fa-share fa-2x text-white mb-1 p-0"></i>
          <h4 class="m-0 text-white">シェア</h4>
        </div>
      </div>
      <!-- details -->
      <div class="w-100 details py-3 px-2">
        <h4 class="text-white mb-1 font-weight-bold">
          ID: {{ post.id }} / {{ typeList[post.type_id] }}
        </h4>

        <div v-if="lang == 'en'">
          <h4 class="text-white mb-1 font-weight-bold">
            {{ lang_json.en.height }}: {{ post.height }} {{ lang_json.en.width }}: {{ post.width }}
          </h4>
          <h4 class="text-white mb-1 font-weight-bold">
            {{ lang_json.en.circumference }}: {{ post.around }}
          </h4>
        </div>
        <div v-if="lang == 'vi'">
          <h4 class="text-white mb-1 font-weight-bold">
            {{ lang_json.en.height }}: {{ post.height }} {{ lang_json.en.width }}: {{ post.width }}
          </h4>
          <h4 class="text-white mb-1 font-weight-bold">
            {{ lang_json.en.circumference }}: {{ post.around }}
          </h4>
        </div>
        <div v-if="lang == 'ja'">
          <h4 class="text-white mb-1 font-weight-bold">
            {{ lang_json.en.height }}: {{ post.height }} {{ lang_json.en.width }}: {{ post.width }}
          </h4>
          <h4 class="text-white mb-1 font-weight-bold">
            {{ lang_json.en.circumference }}: {{ post.around }}
          </h4>
        </div>
        <div v-if="lang == 'zh'">
          <h4 class="text-white mb-1 font-weight-bold">
            {{ lang_json.en.height }}: {{ post.height }} {{ lang_json.en.width }}: {{ post.width }}
          </h4>
          <h4 class="text-white mb-1 font-weight-bold">
            {{ lang_json.en.circumference }}: {{ post.around }}
          </h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import lang_from_json from '@/../public/static/lang.json';

import { mapGetters, mapState } from 'vuex';

export default {
  name: 'feed',
  data() {
    return {
      setHeight: {
        height: 'auto',
      },
      lang_json: lang_from_json,
    };
  },
  computed: {
    ...mapGetters({
      lang: 'lang',
      posts: 'posts',
      featureList: 'featureList',
      typeList: 'typeList',
      url: 'url',
    }),
  },
  mounted() {
    this.setHeight.height = `${window.innerHeight - 68}px`;
    this.$store.dispatch('GET_DATA');
  },
};
</script>

<style scoped>
.post {
  /* height: calc(100vh - 68px); */
  width: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

section {
  scroll-snap-align: start;
}

.item_photos {
  height: calc(100vh - 68px);
  width: 100%;
  object-fit: cover;
  border-radius: 0;
}

.other_icons {
  position: absolute;
  bottom: 45px;
  right: 5px;
}

.details {
  position: absolute;
  bottom: 0;
}
</style>
<style>
.carousel-inner {
  height: 100%;
}

.carousel-indicators {
  top: 70px;
  bottom: 0;
  z-index: 1;
}

.carousel-indicators li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: none;
}

img[lazy='loading'] {
  width: 100px !important;
  height: 100px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
