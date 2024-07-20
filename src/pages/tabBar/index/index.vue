<script setup lang="ts">
// @ts-ignore
import { useUserStore } from '@/stores';
import { storeToRefs } from 'pinia';
import dayjs from 'dayjs';
import { ref } from 'vue';
import { debounce } from 'lodash';

const userStore = useUserStore();
const { count } = storeToRefs(userStore);

const increment = () => {
  userStore.increment();
};

const timer = ref("");
setInterval(() => {
  timer.value = dayjs().format('YY/MM/DD HH:mm:ss');
}, 1000);

const debounceToast = debounce(() => {
  uni.showToast({
    title: '防抖成功',
    icon: 'none',
    duration: 1000,
  })
}, 500)

</script>

<template>
  <div class="title">
    {{ timer }}
  </div>
  <view class="content">
    <uni-card cover="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg">
      <text class="uni-body">这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
      <view slot="actions" class="card-actions">
        <view class="card-actions-item">
          <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
          <text class="card-actions-item-text">分享</text>
        </view>
        <view class="card-actions-item">
          <uni-icons type="heart" size="18" color="#999"></uni-icons>
          <text class="card-actions-item-text">点赞</text>
        </view>
        <view class="card-actions-item">
          <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
          <text class="card-actions-item-text">评论</text>
        </view>
      </view>
    </uni-card>
  </view>
  <div class="title">
    Pinia仓库Count: {{ count }}
  </div>
  <div class="btns">
    <button size="small" type="primary" @tap="increment"> count +1 </button>
    <button size="small" type="primary" @tap="debounceToast"> 防抖弹窗(一直点) </button>
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin: 20rpx 0;
}

.btns {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20rpx 0;
}

.container {
  overflow: hidden;
}

.custom-cover {
  flex: 1;
  flex-direction: row;
  position: relative;
}

.cover-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: rgba($color: #000000, $alpha: 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  font-size: 14px;
  color: #fff;
}

.card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 45px;
  border-top: 1px #eee solid;
}

.card-actions-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-actions-item-text {
  font-size: 12px;
  color: #666;
  margin-left: 5px;
}

.cover-image {
  flex: 1;
  height: 150px;
}

.no-border {
  border-width: 0;
}
</style>
