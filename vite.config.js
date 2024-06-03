import { defineConfig, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteExternalsPlugin } from "vite-plugin-externals";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",

  plugins: [
    vue(),
    viteExternalsPlugin(
      {
        cesium: "Cesium",
        "xbsj-renderer/dist-node/xr-base-utils": 'xbsj["xr-base-utils"]',
        "xbsj-renderer/dist-node/xr-math": 'xbsj["xr-math"]',
        "xbsj-renderer/dist-node/xr-utils": 'xbsj["xr-utils"]',
        "xbsj-renderer/dist-node/xr-cesium": 'xbsj["xr-cesium"]',
        "xbsj-xe2/dist-node/xe2": 'XE2["xe2"]',
        "xbsj-xe2/dist-node/xe2-base": 'XE2["xe2-base"]',
        "xbsj-xe2/dist-node/xe2-base-utils": 'XE2["xe2-base-utils"]',
        "xbsj-xe2/dist-node/xe2-utils": 'XE2["xe2-utils"]',
        "xbsj-xe2/dist-node/xe2-cesium": 'XE2["xe2-cesium"]',
        "xbsj-xe2/dist-node/xe2-mapbox": 'XE2["xe2-mapbox"]',
        "xbsj-xe2/dist-node/xe2-ue": 'XE2["xe2-ue"]',
        "xbsj-xe2/dist-node/utility-xe2-plugin": 'XE2["utility-xe2-plugin"]',
        "xbsj-xe2/dist-node/xe2-all-in-one": 'XE2["xe2-all-in-one"]',
        "xbsj-xe2/dist-node/xe2-base-objects": 'XE2["xe2-base-objects"]',
        "xbsj-xe2/dist-node/xe2-objects": 'XE2["xe2-objects"]',
        "xbsj-xe2/dist-node/xe2-cesium-objects": 'XE2["xe2-cesium-objects"]',
        "xbsj-xe2/dist-node/xe2-ue-objects": 'XE2["xe2-ue-objects"]',
        "xbsj-xe2/dist-node/xe2-openlayers": 'XE2["xe2-openlayers"]',
        "xbsj-xe2/dist-node/xe2-openlayers-objects":
          'XE2["xe2-openlayers-objects"]',
        "smplotting-xe2-plugin/dist-node/smplotting-xe2-plugin":
          'XE2["smplotting-xe2-plugin"]',
        "smplotting-xe2-plugin/dist-node/smplotting-xe2-plugin-main":
          'XE2["smplotting-xe2-plugin-main"]',
        "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin":
          'XE2["esobjs-xe2-plugin"]',
        "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main":
          'XE2["esobjs-xe2-plugin-main"]',
      },
      { useWindow: false },
    ),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(
            path.resolve(__dirname, "./node_modules/xbsj-xe2/dist-web"),
          ),
          dest: "./js/xbsj-xe2",
        },
        {
          src: normalizePath(
            path.resolve(__dirname, "./node_modules/xbsj-xe2-assets/dist-web"),
          ),
          dest: "./js/xbsj-xe2-assets",
        },
        {
          src: normalizePath(
            path.resolve(
              __dirname,
              "./node_modules/smplotting-xe2-plugin/dist-web",
            ),
          ),
          dest: "./js/smplotting-xe2-plugin",
        },
        {
          src: normalizePath(
            path.resolve(
              __dirname,
              "./node_modules/esobjs-xe2-plugin/dist-web",
            ),
          ),
          dest: "./js/esobjs-xe2-plugin",
        },
        {
          src: normalizePath(
            path.resolve(
              __dirname,
              "./node_modules/esobjs-xe2-plugin-assets/dist-web",
            ),
          ),
          dest: "./js/esobjs-xe2-plugin-assets",
        },
      ],
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/mixin.scss";',
      },
    },
  },
});
