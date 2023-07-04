<template>
  <div>
    <MyHeader :city="city"></MyHeader>
    <MySwiper :list="swiperList"></MySwiper>
    <MyIcons :list="iconList"></MyIcons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import MyHeader from "./home/components/Header.vue";
import MySwiper from "./Swiper";
import MyIcons from "./Icons";
import HomeRecommend from "./home/components/Recommend.vue";
import HomeWeekend from "./home/components/Weekend.vue";
import axios from "axios";
export default {
  name: "MyHome",
  data() {
    return {
      city:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    };
  },
  components: { MyHeader, MySwiper, MyIcons, HomeRecommend, HomeWeekend },
  methods: {
    getHomeInfo() {
      axios.get("api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        /*  this.city=res.data.city */
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
      console.log("res", res);
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>

<style lang="stylus" scoped></style>
