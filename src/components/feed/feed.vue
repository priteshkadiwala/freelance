<template>
  <div class="post" :style="setHeight">
    <section class="position-relative h-100" v-for="(item, index) in images" :key="index">
      <!-- images -->
      <b-carousel :interval="0" indicators class="h-100">
        <!-- image 1 -->
        <b-carousel-slide v-if="item.image1 != null" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="item.image1" alt="image slot" />
          </template>
        </b-carousel-slide>
        <!-- image 2 -->
        <b-carousel-slide v-if="item.image2 != null" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="item.image2" alt="image slot" />
          </template>
        </b-carousel-slide>
        <!-- image 3 -->
        <b-carousel-slide v-if="item.image3 != null" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="item.image3" alt="image slot" />
          </template>
        </b-carousel-slide>
        <!-- image 4 -->
        <b-carousel-slide v-if="item.image4 != null" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="item.image4" alt="image slot" />
          </template>
        </b-carousel-slide>
        <!-- image 5 -->
        <b-carousel-slide v-if="item.image5 != null" class="h-100">
          <template v-slot:img>
            <img class="item_photos" v-lazy="item.image5" alt="image slot" />
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
        <h4 class="text-white mb-1 font-weight-bold">ID: 1042/Padocarpus</h4>
        <h4 class="text-white mb-1 font-weight-bold">Height: 420cm Width: 250cm</h4>
        <h4 class="text-white mb-1 font-weight-bold">Circumference: 105cm</h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'feed',
  data() {
    return {
      images: [
        {
          image1:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image2:
            'https://images.unsplash.com/photo-1586278500132-7c85dfbc51d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image3: null,
          image4: null,
          image5: null,
        },
        {
          image1:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image2:
            'https://images.unsplash.com/photo-1586278500132-7c85dfbc51d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image3:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image4: null,
          image5: null,
        },
        {
          image1:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image2: null,
          image3: null,
          image4: null,
          image5: null,
        },
        {
          image1:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image2:
            'https://images.unsplash.com/photo-1586278500132-7c85dfbc51d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image3:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image4:
            'https://images.unsplash.com/photo-1586278500132-7c85dfbc51d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image5:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
        },
        {
          image1:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image2:
            'https://images.unsplash.com/photo-1586278500132-7c85dfbc51d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image3:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image4: null,
          image5: null,
        },
        {
          image1:
            'https://images.unsplash.com/photo-1586398001762-7ddd311debd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
          image2: null,
          image3: null,
          image4: null,
          image5: null,
        },
      ],
      setHeight: {
        height: 'auto',
      },
    };
  },
  mounted() {
    this.setHeight.height = `${window.innerHeight - 68}px`;
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
  bottom: 30px;
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
