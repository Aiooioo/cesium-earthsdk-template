<template>
  <div class="viewer-tools__bar">
    <div class="viewer-tools__group">
      <div :class="['viewer-tools__item']" @click="showBookmark">
        <Icon icon="mdi-bookmark" />
      </div>
    </div>
    <div class="viewer-tools__group">
      <div :class="['viewer-tools__item']" @click="measurePoint">
        <Icon icon="mdi-cursor-pointer" />
      </div>
      <div :class="['viewer-tools__item']" @click="measureDistance">
        <Icon icon="mdi-map-marker-distance" />
      </div>
      <div :class="['viewer-tools__item']" @click="measureHeight">
        <Icon icon="mdi-align-vertical-distribute" />
      </div>
      <div :class="['viewer-tools__item']" @click="measureArea">
        <Icon icon="mdi-surface-area" />
      </div>
      <div :class="['viewer-tools__item']" @click="measureDirection">
        <Icon icon="mdi-angle-acute" />
      </div>
      <div :class="['viewer-tools__item']" @click="clearMeasurements">
        <Icon icon="mdi-clear-octagon-outline" />
      </div>
    </div>
    <div class="viewer-tools__group">
      <div :class="['viewer-tools__item']" @click="muterInvisibleAnalysis">
        <Icon icon="mdi-call-split" />
      </div>
      <div :class="['viewer-tools__item']" @click="slopeAnalysis">
        <Icon icon="mdi-slope-uphill" />
      </div>
      <div :class="['viewer-tools__item']" @click="viewshedAnalysis">
        <Icon icon="mdi-view-refresh" />
      </div>
      <div :class="['viewer-tools__item']" @click="clearAnalysis">
        <Icon icon="mdi-clear-octagon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import { useMap } from "@/stores/useMap.js";
import {
  ESLocationMeasurement,
  ESDistanceMeasurement,
  ESHeightMeasurement,
  ESAreaMeasurement,
  ESDirectionMeasurement,
  ESVisibilityAnalysis,
} from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main";

const mapStore = useMap();
const {} = storeToRefs(mapStore);

const measurements = ref([]);
const muterInvisibleAnalysisRef = ref(null);

function measurePoint() {
  const sceneObject = window.esObjMgr.createSceneObject(ESLocationMeasurement);

  measurements.value.push(sceneObject);
  sceneObject.editing = true;
}

function measureDistance() {
  const sceneObject = window.esObjMgr.createSceneObject(ESDistanceMeasurement);

  measurements.value.push(sceneObject);
  sceneObject.editing = true;
}

function measureHeight() {
  const sceneObject = window.esObjMgr.createSceneObject(ESHeightMeasurement);

  measurements.value.push(sceneObject);
  sceneObject.editing = true;
}

function measureArea() {
  const sceneObject = window.esObjMgr.createSceneObject(ESAreaMeasurement);

  measurements.value.push(sceneObject);
  sceneObject.editing = true;
}

function measureDirection() {
  const sceneObject = window.esObjMgr.createSceneObject(ESDirectionMeasurement);

  measurements.value.push(sceneObject);
  sceneObject.editing = true;
}

function clearMeasurements() {
  measurements.value.forEach((item) => {
    if (item) {
      window.esObjMgr.destroySceneObject(item);
    }
  });
  measurements.value.length = 0;
}

function muterInvisibleAnalysis() {
  if (!muterInvisibleAnalysisRef.value) {
    muterInvisibleAnalysisRef.value =
      window.esObjMgr.createSceneObject(ESVisibilityAnalysis);
  }

  muterInvisibleAnalysisRef.value.editing = false;
  muterInvisibleAnalysisRef.value.points = [];
  muterInvisibleAnalysisRef.value.editing = true;
}

function slopeAnalysis() {

}

function showBookmark() {
  mapStore.switchActiveTool("bookmark");
}

function viewshedAnalysis() {
  mapStore.switchActiveTool("viewshed");
}

function clearAnalysis() {
  if (muterInvisibleAnalysisRef.value) {
    muterInvisibleAnalysisRef.value.editing = false;
    muterInvisibleAnalysisRef.value.points = [];
  }

  if (mapStore.activeBar !== "") {
    mapStore.switchActiveTool("");
  }
}
</script>

<style scoped lang="scss">
.viewer-tools__bar {
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: auto;
}

.viewer-tools__group {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: $panel_bg_color;
  border: 2px solid rgba(0, 220, 255, 0.23);
}

.viewer-tools__item {
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
