<template>
  <div class="warpper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "MySwiper",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        pagintion: ".swiper-pagination",
        loop: true,
      },
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper /deep/ .wrapper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  overflow: hidden;
  display: flex;
}

.swiper-img {
  width: 100%;
}
</style>
