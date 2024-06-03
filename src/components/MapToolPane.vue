<template>
  <div class="viewer-tools__pane">
    <div class="viewer-tools__pane-header">
      <div class="viewer-tools__pane-header-title">{{ displayTitle }}</div>
      <div class="viewer-tools__pane-header-action" @click="closePanel">
        <Icon icon="mdi-close" />
      </div>
    </div>
    <div class="viewer-tools__pane-content">
      <component :is="tools[activeBar]" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";
import ViewshedAnalysis from "@/components/map/widgets/viewshed/ViewshedAnalysis.vue";
import { useMap } from "@/stores/useMap.js";

const mapStore = useMap();
const { activeBar } = storeToRefs(mapStore);

const tools = {
  viewshed: ViewshedAnalysis,
};

const displayTitle = computed(() => {
  switch (activeBar.value) {
    case "viewshed":
      return "视域分析";
  }

  return "";
});

function closePanel() {
  mapStore.switchActiveTool("");
}
</script>

<style lang="scss" scoped>
.viewer-tools__pane {
  margin-top: 20px;
  margin-right: 20px;
  max-height: 480px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background: $panel_bg_color;
  pointer-events: auto;

  &-header {
    flex: none;
    padding-left: 10px;
    height: 48px;
    min-width: 330px;
    display: flex;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-image-source: linear-gradient(
      to right,
      transparent 0%,
      $secondary_text_color 50%,
      transparent 100%
    );
    border-image-slice: 1;
    color: $primary_text_color;

    &-title {
      flex: 1;
    }
    &-action {
      flex: none;
      width: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-weight: 700;
      border-left: 1px solid $secondary_text_color;
      cursor: pointer;
    }
  }

  &-content {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }
}
</style>
