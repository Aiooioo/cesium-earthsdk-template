import { defineStore } from "pinia";

const useMap = defineStore("map", {
  state() {
    return {
      activeBar: "",

      zone: '长沙市',
    };
  },

  actions: {
    switchActiveTool(toolName) {
      this.activeBar = toolName;
    },
    switchCurrentZone(current) {
      this.zone = current;
    },
  },
});

export { useMap };
