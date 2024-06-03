<template>
  <div class="viewer-basic__bar">
    <div class="viewer-basic__group">
      <div :class="['viewer-basic__item']" @click="goHome">
        <Icon icon="mdi-home" />
      </div>
    </div>
    <div class="viewer-basic__group">
      <div :class="['viewer-basic__item']" @click="zoomIn">
        <Icon icon="mdi-plus" />
      </div>
      <div :class="['viewer-basic__item']" @click="zoomOut">
        <Icon icon="mdi-minus" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

function goHome() {}

function zoomIn() {}

function zoomOut() {}
</script>

<style scoped lang="scss">
.viewer-basic__bar {
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: auto;
}

.viewer-basic__group {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: $panel_bg_color;
  border: 2px solid rgba(0, 220, 255, 0.23);
}

.viewer-basic__item {
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  color: $primary_text_color;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 2px solid rgba(0, 220, 255, 0.23);
  }

  &:hover {
    background: #1d313b;
  }
}
</style>
