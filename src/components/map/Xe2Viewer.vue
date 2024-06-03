<template>
<div ref="viewRef" class="view-div">

</div>
</template>

<script setup>
import { ref } from 'vue'
import { useView } from './hooks/useView.js'

const viewRef = ref(null)

useView(viewRef)

</script>

<style scoped lang="scss">
.view-div {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
