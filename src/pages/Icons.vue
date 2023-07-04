<template>
  <div class="icons" >
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index" >
        <div 
        class="icon" 
        v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="p1">{{ item.desc }}</p>
        </div>
      </swiper-slide>
     
    </swiper>
  </div>
</template>

<script>
export default {
  name: "MyIcons",
  data() {
    return {
      swiperOption: {
        pagintion: ".swiper-pagination",
        loop: true,
      }
    }
  },
  props:{
    list:Array
  },
 
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
          console.log(pages);
        }
        pages[page].push(item);
      });
      return pages
    },
  },
  
};
</script>

<style lang="less" scoped>
@import '@/assets/styles/varibles.less';
@import '@/assets/styles/mixins.less';

.icons {
  height: 0;
  padding-bottom: 50%;
  width: 100%;
  overflow: hidden;

  .icon {
    position: relative;
    overflow: hidden;
    width: 25%;
    padding-bottom: 25%;
    float: left;
    height: 0;

    .icon-img {
      position: absolute;
      top: 0.08rem;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .p1 {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 0.44rem;
      height: 0.44rem;
      color: @darkTextColor;
      text-align: center;
      .ellipsis()
    }
  }
}
</style>