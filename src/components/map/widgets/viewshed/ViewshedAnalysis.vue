<template>
  <div class="map-tool__viewshed">
    <div class="map-tool__viewshed-row">
      <span class="map-tool__viewshed-row-label">经度:</span>
      <span class="map-tool__viewshed-row-value">{{
        viewshedStore.position[0]
      }}</span>
    </div>
    <div class="map-tool__viewshed-row">
      <span class="map-tool__viewshed-row-label">纬度:</span>
      <span class="map-tool__viewshed-row-value">{{
        viewshedStore.position[1]
      }}</span>
    </div>
    <div class="map-tool__viewshed-row">
      <span class="map-tool__viewshed-row-label">高度:</span>
      <span class="map-tool__viewshed-row-value">{{
        viewshedStore.position[2]
      }}</span>
    </div>
    <div class="map-tool__viewshed-row">
      <span class="map-tool__viewshed-row-label">偏航角:</span>
      <span class="map-tool__viewshed-row-value">{{
        viewshedStore.heading
      }}</span>
    </div>
    <div class="map-tool__viewshed-row">
      <span class="map-tool__viewshed-row-label">俯仰角:</span>
      <span class="map-tool__viewshed-row-value">{{ viewshedStore.tilt }}</span>
    </div>
    <div class="map-tool__viewshed-row">
      <span class="map-tool__viewshed-row-label">翻滚角:</span>
      <span class="map-tool__viewshed-row-value">{{ viewshedStore.yaw }}</span>
    </div>
    <div class="map-tool__viewshed-row">
      <span class="map-tool__viewshed-row-label">近截面:</span>
      <span class="map-tool__viewshed-row-value">{{ viewshedStore.near }}</span>
    </div>
    <div class="map-tool__viewshed-row">
      <span class="map-tool__viewshed-row-label">远截面:</span>
      <span class="map-tool__viewshed-row-value">{{ viewshedStore.far }}</span>
    </div>
    <div class="map-tool__viewshed-row">
      <span class="map-tool__viewshed-row-label">视场角:</span>
      <span class="map-tool__viewshed-row-value">{{ viewshedStore.fov }}</span>
    </div>
    <div
      class="map-tool__viewshed-row"
      @click="viewshedStore.syncCurrentCamera"
    >
      <span class="map-tool__viewshed-row-btn">设置为当前相机姿态</span>
    </div>
    <div class="map-tool__viewshed-row" @click="viewshedStore.startEditing">
      <span class="map-tool__viewshed-row-btn">编辑</span>
    </div>
    <div class="map-tool__viewshed-row">
      <span
        class="map-tool__viewshed-row-btn"
        @click="viewshedStore.resetPosition"
        >重新拾取位置</span
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useViewshed } from "@/stores/useViewshed.js";

const viewshedStore = useViewshed();

onMounted(() => {
  viewshedStore.resetPosition();
});
onUnmounted(() => {
  viewshedStore.clearViewshedAnalysis();
});
</script>

<style scoped lang="scss">
.map-tool__viewshed {
  color: $secondary_text_color;

  &-row {
    min-height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &-label {
      padding-left: 16px;
      flex: none;
      width: 80px;
      color: $primary_text_color;
      font-weight: 500;
    }

    &-btn {
      flex: 1;
      margin: 0 16px 8px;
      padding: 6px 0;
      border-radius: 6px;
      border: 1px solid $primary_bg_color;
      color: $primary_text_color;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background-color: $panel_bg_color;
      }
    }
  }
}
</style>
