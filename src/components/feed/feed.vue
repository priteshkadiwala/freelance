<template>
  <div class="post" :style="setHeight">
    <section
      class="position-relative h-100"
      v-for="(post, index) in posts"
      :id="'post_' + index"
      :key="index"
    >
      <!-- images -->
      <b-carousel :interval="0" indicators class="h-100">
        <!-- image 1 -->
        <b-carousel-slide v-if="post.image_path_1 != ''" class="h-100">
          <template v-slot:img>
            <img
              class="item_photos"
              :style="setHeight"
              v-lazy="url + post.image_path_1"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <!-- image 2 -->
        <b-carousel-slide v-if="post.image_path_2 != ''" class="h-100">
          <template v-slot:img>
            <img
              class="item_photos"
              :style="setHeight"
              v-lazy="url + post.image_path_2"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <!-- image 3 -->
        <b-carousel-slide v-if="post.image_path_3 != ''" class="h-100">
          <template v-slot:img>
            <img
              class="item_photos"
              :style="setHeight"
              v-lazy="url + post.image_path_3"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <!-- image 4 -->
        <b-carousel-slide v-if="post.image_path_4 != ''" class="h-100">
          <template v-slot:img>
            <img
              class="item_photos"
              :style="setHeight"
              v-lazy="url + post.image_path_4"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <!-- image 5 -->
        <b-carousel-slide v-if="post.image_path_5 != ''" class="h-100">
          <template v-slot:img>
            <img
              class="item_photos"
              :style="setHeight"
              v-lazy="url + post.image_path_5"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <!-- icons -->
      <div class="other_icons rounded d-flex flex-column align-items-center justify-content-center">
        <div class="">
          <div
            class="my-2 py-1 d-flex flex-column
            align-items-center justify-content-center"
          >
            <i class="text_shadow fas fa-cart-plus fa-2x mb-1 p-0 text-white"></i>
          </div>
          <div
            class=" my-2 py-1 d-flex flex-column
            align-items-center justify-content-center"
          >
            <i class="text_shadow fas fa-heart fa-2x mb-1 p-0 text-white"></i>
            <h4 class="text-white mb-1">
              {{ 20 }}
            </h4>
          </div>
          <div
            class=" my-2 py-1 px-2 d-flex flex-column
            align-items-center justify-content-center"
          >
            <i class="text_shadow fas fa-question-circle fa-2x mb-1 p-0 text-white"></i>
          </div>
          <div
            class=" my-2 py-1 px-2 d-flex flex-column
            align-items-center justify-content-center"
          >
            <i class="text_shadow fas fa-share fa-2x text-white mb-1 p-0"></i>
          </div>
        </div>
      </div>
      <div class="phone_call d-flex flex-column align-items-center justify-content-center">
        <div
          class="py-3 px-2 d-flex flex-column
          align-items-center justify-content-center"
        >
          <h4 class="m-0 text-white">
            <i class="fas fa-phone-alt mr-2" style="color: rgba(69, 185, 168, 1)"></i>
            Please call
          </h4>
        </div>
      </div>

      <!-- details -->
      <div class="w-100 details py-3 px-2">
        <h4 class="text-white mb-1 font-weight-bold">
          ID: {{ post.id }} / {{ typeList[post.type_id] }}
        </h4>
        <!-- <div>
          <h4 class="text-white mb-1 font-weight-bold">
            Price: 1,200,000,000vnd
          </h4>
          <h4 class="text-white mb-1 font-weight-bold">
            H: 6.5m W: 2.5m C: 120cm
          </h4>
        </div> -->
        <div v-if="lang == 'en'">
          <h4 class="text_shadow text-white mb-1 font-weight-bold">
            {{ lang_json.en.price }}: {{ post.selling_price_val }}
          </h4>
          <h4 class="text_shadow text-white mb-1 font-weight-bold">
            {{ lang_json.en.height }}: {{ post.height }}m {{ lang_json.en.width }}:
            {{ post.width }}m {{ lang_json.en.circumference }}: {{ post.around }}cm
          </h4>
        </div>
        <div v-if="lang == 'vi'">
          <h4 class="text_shadow text-white mb-1 font-weight-bold">
            {{ lang_json.vi.price }}: {{ post.selling_price_val }}
          </h4>
          <h4 class="text_shadow text-white mb-1 font-weight-bold">
            {{ lang_json.vi.height }}: {{ post.height }}m {{ lang_json.vi.width }}:
            {{ post.width }}m {{ lang_json.vi.circumference }}: {{ post.around }}cm
          </h4>
        </div>
        <div v-if="lang == 'ja'">
          <h4 class="text_shadow text-white mb-1 font-weight-bold">
            {{ lang_json.ja.price }}: {{ post.selling_price_val }}
          </h4>
          <h4 class="text_shadow text-white mb-1 font-weight-bold">
            {{ lang_json.ja.height }}: {{ post.height }}m {{ lang_json.ja.width }}:
            {{ post.width }}m {{ lang_json.ja.circumference }}: {{ post.around }}cm
          </h4>
        </div>
        <div v-if="lang == 'zh'">
          <h4 class="text_shadow text-white mb-1 font-weight-bold">
            {{ lang_json.zh.price }}: {{ post.selling_price_val }}
          </h4>
          <h4 class="text_shadow text-white mb-1 font-weight-bold">
            {{ lang_json.zh.height }}: {{ post.height }}m {{ lang_json.zh.width }}:
            {{ post.width }}m {{ lang_json.zh.circumference }}: {{ post.around }}cm
          </h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

import debounce from 'lodash/debounce';

import axios from 'axios';
import post_json from '../../assets/post.json';
import lang_from_json from '../../assets/lang.json';

export default {
  name: 'feed',
  data() {
    return {
      setHeight: {
        height: 'auto',
      },
      lang_json: lang_from_json,
      likes: [],
      posts: [],
      typeList: [],
    };
  },
  computed: {
    ...mapGetters({
      lang: 'lang',
      // posts: 'posts',
      // featureList: 'featureList',
      // typeList: 'typeList',
      url: 'url',
    }),
  },
  watch: {
    posts(val) {
      console.log(val);
    },
  },
  methods: {
    isInViewport(elem) {
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0
        && bounding.left >= 0
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  },
  mounted() {
    this.setHeight.height = `${window.innerHeight}px`;
    this.posts = post_json.results.data.data;
    this.typeList = post_json.typeList;
    this.$store.dispatch('GET_DATA');

    // $('.post').scroll(
    //   debounce(() => {
    //     for (let i = 0; i < this.posts.length; i++) {
    //       const ele = document.getElementById(`post_${i}`);
    //       if (this.isInViewport(ele)) {
    //         axios.get(`https://dashu.2-d.jp/like?id=${this.posts[i].id}`).then((resp) => {
    //           console.log(resp);
    //           this.likes[i] = resp;
    //         });
    //       }
    //     }
    //   }, 250),
    // );
  },
};
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800');
@import url('https://use.fontawesome.com/releases/v5.2.0/css/all.css');
@import '../../assets/css/blk-design-system.css'; */

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
  /* height: calc(100vh - 68px); */
  width: 100%;
  object-fit: cover;
  border-radius: 0;
}

.other_icons {
  position: absolute;
  bottom: 150px;
  right: 15px;
  /* background: rgba(60, 60, 60, 0.53); */
  z-index: 2;
}

.phone_call {
  position: absolute;
  bottom: 100px;
  right: 0;
  /* background: rgba(60, 60, 60, 0.53); */
  z-index: 2;
  background-color: rgba(7, 10, 60, 0.7);
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
}

.details {
  position: absolute;
  bottom: 110px;
  /* background: rgba(60, 60, 60, 0.53); */
}

.text_shadow {
  text-shadow: 0px 0px 10px rgb(33, 33, 33);
}

/* h1,
h2,
h3,
h4,
h5,
h6,
i {
  text-shadow: 1px 1px rgb(187, 187, 187);
} */
</style>
<style>
.carousel-inner {
  height: 100%;
}

.carousel-indicators {
  top: 80px;
  bottom: 0;
  z-index: 1;
}

.carousel-indicators li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: none;
  background-color: rgba(112, 112, 112, 0.5);
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
