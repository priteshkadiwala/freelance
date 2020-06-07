<template>
  <div>
    <navBar></navBar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    navBar: () => import('@/components/nav_bar/nav_bar.vue'),
  },
};
</script>

<style>
.op-50 {
  opacity: 0.5;
}
</style>
