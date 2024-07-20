<template>
  <view class="content">
    <image class="logo" src="/static/images/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="title">共享的数据count: {{ count }}</text>
      <text class="title">
        距离上次更新时间： {{ dayjs(1721463694239).fromNow() }}
      </text>
    </view>
    <div class="btns">
      <button size="small" type="primary" @tap="userStore.increment"> count +1</button>
      <button size="small" type="primary" @tap="userStore.decrement"> count -1</button>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import dayjs from 'dayjs';
const userStore = useUserStore();
const { count } = storeToRefs(userStore);
const title = ref('健身计划')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btns {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20rpx 0;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
