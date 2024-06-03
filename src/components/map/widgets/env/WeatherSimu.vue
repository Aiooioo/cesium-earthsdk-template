<template>
  <div class="map-toggle__weather">
    <span class="map-toggle__weather-item">
      <span
        class="map-toggle__weather-item-thumb"
        @click="() => startSimuWeather('fog')"
      >
        <span
          v-if="activeWeather === 'fog'"
          class="map-toggle__weather-item-thumb-inner"
        ></span>
      </span>
      <span class="map-toggle__weather-item-text">
        <Icon
          icon="mdi-weather-fog"
          style="font-size: 36px; margin-right: 6px"
        />
        雾
      </span>
    </span>
    <span class="map-toggle__weather-item">
      <span
        class="map-toggle__weather-item-thumb"
        @click="() => startSimuWeather('cloudy')"
      >
        <span
          v-if="activeWeather === 'cloudy'"
          class="map-toggle__weather-item-thumb-inner"
        ></span>
      </span>
      <span class="map-toggle__weather-item-text">
        <Icon
          icon="mdi-weather-cloudy"
          style="font-size: 36px; margin-right: 6px"
        />
        云
      </span>
    </span>
    <span class="map-toggle__weather-item">
      <span
        class="map-toggle__weather-item-thumb"
        @click="() => startSimuWeather('rainy')"
      >
        <span
          v-if="activeWeather === 'rainy'"
          class="map-toggle__weather-item-thumb-inner"
        ></span>
      </span>
      <span class="map-toggle__weather-item-text">
        <Icon
          icon="mdi-weather-rainy"
          style="font-size: 36px; margin-right: 6px"
        />
        雨
      </span>
    </span>
    <span class="map-toggle__weather-item">
      <span
        class="map-toggle__weather-item-thumb"
        @click="() => startSimuWeather('snowy')"
      >
        <span
          v-if="activeWeather === 'snowy'"
          class="map-toggle__weather-item-thumb-inner"
        ></span>
      </span>
      <span class="map-toggle__weather-item-text">
        <Icon
          icon="mdi-weather-snowy"
          style="font-size: 36px; margin-right: 6px"
        />
        雪
      </span>
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const activeWeather = ref("");

function endSimuWeather(weatherType) {
  switch (weatherType) {
    case "fog": {
      window.esObjMgr.activeViewer.fog = 0;
      break;
    }
    case "cloudy": {
      window.esObjMgr.activeViewer.cloud = 0;
      break;
    }
    case "rainy": {
      window.esObjMgr.activeViewer.rain = 0;
      break;
    }
    case "snowy": {
      window.esObjMgr.activeViewer.snow = 0;
      break;
    }
  }

  activeWeather.value = "";
}

function startSimuWeather(weatherType) {
  const prevWeatherType = activeWeather.value;
  endSimuWeather(prevWeatherType);

  if (weatherType !== prevWeatherType) {
    switch (weatherType) {
      case "fog": {
        window.esObjMgr.activeViewer.fog = 1;
        break;
      }
      case "cloudy": {
        window.esObjMgr.activeViewer.cloud = 1;
        break;
      }
      case "rainy": {
        window.esObjMgr.activeViewer.rain = 1;
        break;
      }
      case "snowy": {
        window.esObjMgr.activeViewer.snow = 1;
        break;
      }
    }

    activeWeather.value = weatherType;
  }
}
</script>

<style scoped lang="scss">
.map-toggle__weather {
  margin-bottom: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  background: $minor_bg_color;
  border-radius: 4px;
  pointer-events: auto;

  &-item {
    margin: 8px 0;
    padding: 0 12px;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    &:not(:last-child) {
      border-right: 1px solid $primary_border_color;
    }

    &-thumb {
      margin-right: 8px;
      height: 14px;
      width: 14px;
      border-radius: 50%;
      border: 1px solid $primary_bg_color;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &-inner {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: $primary_bg_color;
      }
    }

    &-text {
      display: flex;
      align-items: flex-end;
      font-size: 12px;
      color: $primary_text_color;
    }
  }
}
</style>
