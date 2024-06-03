<template>
  <div class="xe2-czm-app">
    <div class="xe2-czm-app__viewer">
      <Xe2Viewer />
    </div>
    <div class="xe2-czm-app__content">
      <div class="xe2-czm-app__content-left">
        <ZoneSwitcher />
        <MapBasicBar />
      </div>
      <div class="xe2-czm-app__content-right">
        <div class="xe2-czm-app__content-tools">
          <MapToolPane v-if="activeBar !== ''" />
          <MapToolbar />
        </div>
        <div class="xe2-czm-app__content-toggles">
          <WeatherSimu />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMap } from "@/stores/useMap.js";
import Xe2Viewer from "@/components/map/Xe2Viewer.vue";
import ZoneSwitcher from "@/components/ZoneSwitcher.vue";
import MapBasicBar from "@/components/MapBasicBar.vue";
import MapToolbar from "@/components/MapToolbar.vue";
import MapToolPane from "@/components/MapToolPane.vue";
import WeatherSimu from "@/components/map/widgets/env/WeatherSimu.vue";

const mapStore = useMap();
const { activeBar } = storeToRefs(mapStore);
</script>

<style scoped lang="scss">
.xe2-czm-app {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;

  &__viewer {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  &__content {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 2;

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    &-right {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }

    &-tools {
      display: flex;
      align-items: flex-start;
    }

    &-toggles {
    }
  }
}
</style>
