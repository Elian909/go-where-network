<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
      
          <img
            class="item-img"
            :src="item.imgUrl"
          />
      
        <div class="item-info">
          <p class="item-title" >{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
 props:{
  list:Array
 }
};
</script>

<style lang="less" scoped>
@import 'styles/mixins.less';

.recommend-title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  background: #fff;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      .ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #eee;
      .ellipsis();
    }

    .item-button {
      background: #ff9300;
      padding: 0.1rem;
      border-radius: 0.06rem;
      margin-top: 0.16rem;
      line-height: 0.44rem;
    }
  }
}
</style>