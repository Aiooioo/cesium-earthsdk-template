import { defineStore } from "pinia";
import { ESViewShed } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main";

const useViewshed = defineStore("viewshed", {
  state() {
    return {
      sceneObject: null,

      position: [0, 0, 0],

      fov: 0,

      heading: 0,

      tilt: 0,

      yaw: 0,

      near: 0,

      far: 0,
    };
  },

  actions: {
    resetPosition() {
      if (!this.sceneObject) {
        this.createSceneObject();
      }

      this.sceneObject.editing = false;
      this.sceneObject.position = [0, 0, 0];
      this.sceneObject.editing = true;

      this.position = [0, 0, 0];
    },

    createSceneObject() {
      this.sceneObject = window.esObjMgr.createSceneObject(ESViewShed);
    },

    startEditing() {
      if (!this.sceneObject) {
        this.createSceneObject();
      }

      this.sceneObject.editing = true;

      this.fov = this.sceneObject.fov;
    },

    syncCurrentCamera() {
      const { position, rotation } =
        window.esObjMgr.activeViewer.getCurrentCameraInfo();
      if (this.sceneObject) {
        this.sceneObject.position = position;

        this.sceneObject.rotation = [
          rotation[0] - 90,
          rotation[1],
          rotation[2],
        ];

        this.position = position;
        this.heading = this.sceneObject.rotation[0].toFixed(5) + "°";
        this.tilt = this.sceneObject.rotation[1].toFixed(5) + "°";
        this.yaw = this.sceneObject.rotation[2].toFixed(2) + "°";
        this.near = this.sceneObject.near.toFixed(0);
        this.far = this.sceneObject.far.toFixed(0);
      }
    },

    clearViewshedAnalysis() {
      if (this.sceneObject) {
        this.sceneObject.editing = false;
        this.sceneObject.position = [0, 0, 0];
      }
    },
  },
});

export { useViewshed };
