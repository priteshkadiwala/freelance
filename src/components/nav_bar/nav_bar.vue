<template>
  <div>
    <b-navbar class=" py-0 navbar-transparent" fixed="top" toggleable="lg" type="">
      <!-- container not fuild -->
      <b-container class="">
        <!-- no gutters help put some padding in the containers -->
        <b-row no-gutters class="w-100 justify-content-center">
          <!-- main col with full width -->
          <b-col cols="12">
            <!-- @NOTE: show this when screen width < lg (1024px) -->
            <div :style="{ height: '40px' }" class="d-lg-none">
              <div>
                <img src="/static/assets/img/webicon.png" class="main_img pt-2" />
              </div>
              <b-navbar-nav class="flex-row justify-content-around" v-if="lang == 'en'">
                <b-nav-item class="p-0 mr-2">
                  <h4 class="m-0 font-weight-bold text-center" v-if="product_type == 1">
                    {{ lang_json.en.garden_plant }}
                  </h4>
                  <h4 class="m-0 text-center" v-else>
                    {{ lang_json.en.garden_plant }}
                  </h4>
                </b-nav-item>
                <b-nav-item class="p-0 d-flex align-items-center">
                  <h4 class="m-0 font-weight-bold" v-if="product_type == 2">
                    {{ lang_json.en.bonsai }}
                  </h4>
                  <h4 class="m-0" v-else>
                    {{ lang_json.en.bonsai }}
                  </h4>
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="flex-row justify-content-around" v-if="lang == 'vi'">
                <b-nav-item class="p-0 mr-2">
                  <h4 class="m-0 font-weight-bold" v-if="product_type == 1">
                    {{ lang_json.vi.garden_plant }}
                  </h4>
                  <h4 class="m-0 " v-else>{{ lang_json.vi.garden_plant }}</h4>
                </b-nav-item>
                <b-nav-item class="p-0">
                  <h4 class="m-0  font-weight-bold" v-if="product_type == 2">
                    {{ lang_json.vi.bonsai }}
                  </h4>
                  <h4 class="m-0 " v-else>{{ lang_json.vi.bonsai }}</h4>
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="flex-row justify-content-around" v-if="lang == 'ja'">
                <b-nav-item class="p-0">
                  <h4 class="m-0  font-weight-bold" v-if="product_type == 1">
                    {{ lang_json.ja.garden_plant }}
                  </h4>
                  <h4 class="m-0 " v-else>{{ lang_json.ja.garden_plant }}</h4>
                </b-nav-item>
                <b-nav-item class="p-0">
                  <h4 class="m-0  font-weight-bold" v-if="product_type == 2">
                    {{ lang_json.ja.bonsai }}
                  </h4>
                  <h4 class="m-0 " v-else>{{ lang_json.ja.bonsai }}</h4>
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="flex-row justify-content-around" v-if="lang == 'zh'">
                <b-nav-item class="p-0">
                  <h4 class="m-0  font-weight-bold" v-if="product_type == 1">
                    {{ lang_json.zh.garden_plant }}
                  </h4>
                  <h4 class="m-0 " v-else>{{ lang_json.zh.garden_plant }}</h4>
                </b-nav-item>
                <b-nav-item class="p-0">
                  <h4 class="m-0  font-weight-bold" v-if="product_type == 2">
                    {{ lang_json.zh.bonsai }}
                  </h4>
                  <h4 class="m-0 " v-else>{{ lang_json.zh.bonsai }}</h4>
                </b-nav-item>
              </b-navbar-nav>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>

    <!-- Nav bar fixed at the bottom -->
    <b-navbar
      class="border-top d-lg-none d-flex align-items-start py-2 px-1"
      fixed="bottom"
      :style="{ minHeight: '50px', backgroundColor: '#010212' }"
    >
      <!-- container not fuild -->
      <b-container class="position-relative">
        <!-- no gutters help put some padding in the containers -->
        <b-row no-gutters class="w-100 justify-content-around">
          <!-- main col with full width -->
          <b-col cols="5" class="nav_bottom">
            <b-navbar-nav class="flex-row justify-content-around">
              <!-- home page -->
              <b-nav-item class="p-0">
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <i class="fas fa-user fa-lg text-white m-0 mb-1 p-0"></i>
                  <h5 class="m-0" v-if="lang == 'en'">{{ lang_json.en.my_page }}</h5>
                  <h5 class="m-0" v-if="lang == 'vi'">{{ lang_json.vi.my_page }}</h5>
                  <h5 class="m-0" v-if="lang == 'ja'">{{ lang_json.ja.my_page }}</h5>
                  <h5 class="m-0" v-if="lang == 'zh'">{{ lang_json.zh.my_page }}</h5>
                </div>
              </b-nav-item>
              <!-- notification page -->
              <b-nav-item class="p-0">
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <i class="fas fa-bell fa-lg text-white m-0 mb-1 p-0"></i>
                  <h5 class="m-0" v-if="lang == 'en'">{{ lang_json.en.notification }}</h5>
                  <h5 class="m-0" v-if="lang == 'vi'">{{ lang_json.vi.notification }}</h5>
                  <h5 class="m-0" v-if="lang == 'ja'">{{ lang_json.ja.notification }}</h5>
                  <h5 class="m-0" v-if="lang == 'zh'">{{ lang_json.zh.notification }}</h5>
                </div>
              </b-nav-item>
            </b-navbar-nav>
          </b-col>
          <!-- main col with full width -->
          <b-col class="position-relative">
            <b-navbar-nav
              class="search_outer rounded-circle d-flex align-items-center justify-content-center"
            >
              <!-- search page -->
              <b-nav-item
                class="p-0"
                @click="
                  showFilter = !showFilter;
                  showLang = false;
                "
              >
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <i class="fas fa-search fa-2x text-white m-0 mb-1 p-0"></i>
                </div>
              </b-nav-item>
            </b-navbar-nav>
          </b-col>
          <!-- main col with full width -->
          <b-col cols="5" class="nav_bottom">
            <b-navbar-nav class="flex-row justify-content-around">
              <!-- cart page -->
              <b-nav-item class="p-0">
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <i class="fas fa-shopping-cart fa-lg text-white m-0 mb-1 p-0"></i>
                  <h5 class="m-0" v-if="lang == 'en'">{{ lang_json.en.shopping }}</h5>
                  <h5 class="m-0" v-if="lang == 'vi'">{{ lang_json.vi.shopping }}</h5>
                  <h5 class="m-0" v-if="lang == 'ja'">{{ lang_json.ja.shopping }}</h5>
                  <h5 class="m-0" v-if="lang == 'zh'">{{ lang_json.zh.shopping }}</h5>
                </div>
              </b-nav-item>
              <!-- search page -->
              <b-nav-item
                class="p-0"
                @click="
                  showLang = !showLang;
                  showFilter = false;
                "
              >
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <i class="fas fa-globe fa-lg text-white m-0 mb-1 p-0"></i>
                  <h5 class="m-0" v-if="lang == 'en'">{{ lang_json.en.lang_change }}</h5>
                  <h5 class="m-0" v-if="lang == 'vi'">{{ lang_json.vi.lang_change }}</h5>
                  <h5 class="m-0" v-if="lang == 'ja'">{{ lang_json.ja.lang_change }}</h5>
                  <h5 class="m-0" v-if="lang == 'zh'">{{ lang_json.zh.lang_change }}</h5>
                </div>
              </b-nav-item>
            </b-navbar-nav>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>

    <!-- filter -->
    <div class="filter w-100 py-4" v-if="showFilter">
      <b-container fluid class="position-relative">
        <b-row no-gutters class="">
          <div class="close_icon">
            <i class="fas fa-times fa-lg text-white" @click="showFilter = false"></i>
          </div>
          <!-- 樹脂 -->
          <b-col cols="12" class="my-4 border-bottom">
            <div class="d-flex justify-content-between position-relative">
              <h4 class="m-0 pt-2 text-white label">樹脂</h4>
              <b-form-select
                v-model="selected"
                class="text-white select_design py-1"
                :options="options"
              ></b-form-select>
            </div>
          </b-col>
          <!-- サイズ -->
          <b-col cols="12" class="mb-4 border-bottom py-1">
            <div class="position-relative d-flex justify-content-between">
              <h4 class="m-0 text-white">サイズ</h4>
              <i class="fas fa-angle-right mr-2 pt-1 text-white"></i>
              <!-- <div class="d-flex">
                <b-form-checkbox
                  class="text-white mr-3"
                  v-model="lowCheck1"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  大
                </b-form-checkbox>
                <b-form-checkbox
                  class="text-white mr-3"
                  v-model="lowCheck2"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  中
                </b-form-checkbox>
                <b-form-checkbox
                  class="text-white mr-3"
                  v-model="lowCheck3"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  小
                </b-form-checkbox>
              </div> -->
            </div>
          </b-col>
          <!-- 特徴 -->
          <b-col cols="12" class="mb-2">
            <div class="">
              <h4 class="mb-2 text-white">特徴</h4>
              <b-row no-gutters>
                <b-col cols="6" class="">
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    特急
                  </b-form-checkbox>
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check2"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    差し枝、門破り
                  </b-form-checkbox>
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check3"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    根張り良し
                  </b-form-checkbox>
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check4"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    盆栽型
                  </b-form-checkbox>
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check5"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    葉が多い
                  </b-form-checkbox>
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check6"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    セール
                  </b-form-checkbox>
                </b-col>
                <b-col cols="6" class="">
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check7"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    変化あり
                  </b-form-checkbox>
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check8"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    懇崖
                  </b-form-checkbox>
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check9"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    荒木
                  </b-form-checkbox>
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check10"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    直幹
                  </b-form-checkbox>
                  <b-form-checkbox
                    class="text-white mb-2"
                    v-model="check11"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    低い木
                  </b-form-checkbox>
                </b-col>
              </b-row>
            </div>
          </b-col>

          <b-col cols="12" class="text-center mb-3">
            <b-button variant="success">検索</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="filter w-100 py-4" v-if="showLang">
      <b-container fluid class="position-relative">
        <b-row no-gutters class="">
          <div class="close_icon">
            <i class="fas fa-times fa-lg text-white" @click="showLang = false"></i>
          </div>
          <!-- 特徴 -->
          <b-col cols="12" class="mb-4">
            <div class="">
              <h4 class="mb-2 text-white">Language</h4>
              <b-row no-gutters>
                <b-col cols="6" class="">
                  <b-form-radio class="text-white mb-2" v-model="selectedLang" value="en">
                    English
                  </b-form-radio>
                  <b-form-radio class="text-white mb-2" v-model="selectedLang" value="vi">
                    Vietnamese
                  </b-form-radio>
                  <b-form-radio class="text-white mb-2" v-model="selectedLang" value="zh">
                    Chinese
                  </b-form-radio>
                  <b-form-radio class="text-white mb-2" v-model="selectedLang" value="ja">
                    Japanese
                  </b-form-radio>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import lang_from_json from '../../assets/lang.json';
import post_json from '../../assets/post.json';

export default {
  name: 'nav_bar',
  computed: {
    ...mapGetters({
      lang: 'lang',
    }),
  },
  watch: {
    selectedLang(val) {
      this.$store.commit('SET_LANG', val);
      this.showLang = false;
    },
  },
  data() {
    return {
      showFilter: false,
      showLang: false,
      product_type: 1,
      lang_json: lang_from_json,
      selectedLang: '',
      check1: 'not_accepted',
      check2: 'not_accepted',
      check3: 'not_accepted',
      check4: 'not_accepted',
      check5: 'not_accepted',
      check6: 'not_accepted',
      check7: 'not_accepted',
      check8: 'not_accepted',
      check9: 'not_accepted',
      check10: 'not_accepted',
      check11: 'not_accepted',
      lowCheck1: 'not_accepted',
      lowCheck2: 'not_accepted',
      lowCheck3: 'not_accepted',
      selected: null,
      options: [
        { value: null, text: '全て' },
        { value: 1, text: '槙' },
        { value: 2, text: '黒松' },
        { value: 3, text: '五葉松' },
        { value: 4, text: '赤松' },
        { value: 5, text: '真柏' },
        { value: 6, text: 'モミジ/カエデ' },
        { value: 7, text: 'サザンカ/寒椿' },
        { value: 8, text: 'サザンカ/寒椿' },
        { value: 9, text: 'サツキ/ツツジ' },
        { value: 10, text: 'その他雑木' },
      ],
    };
  },
  mounted() {
    this.selectedLang = this.lang;
    this.product_type = post_json.results.data.data[0].product_type;
  },
};
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800');
@import url('https://use.fontawesome.com/releases/v5.2.0/css/all.css');
@import '../../assets/css/blk-design-system.css'; */

.filter {
  position: absolute;
  bottom: 68px;
  background: #010212;
  z-index: 10;
}

.close_icon {
  position: absolute;
  top: 0px;
  right: 20px;
  z-index: 1;
}

.search_outer {
  position: absolute;
  left: 50%;
  top: -45px;
  height: 85px;
  width: 85px;
  background: #083c16;
  transform: translateX(-50%);
}

.label {
  position: absolute;
}
</style>

<style>
.nav-item a {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.nav_bottom .nav-link {
  padding: 15px 0 0 0;
}

.custom-control-label::before {
  background-color: white;
}

.select_design {
  border: none;
  text-align-last: right;
  background: transparent
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='white' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 0.5rem center;
  background-size: 8px 10px;
}
</style>
