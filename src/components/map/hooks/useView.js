import { ref, onMounted } from "vue";
import { nanoid } from "nanoid";
import { ESObjectsManager } from "esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main";

const useView = (domRef) => {
  const esObjMgrRef = ref(null);

  onMounted(() => {
    if (domRef.value) {
      const esObjMgr = new ESObjectsManager();

      window.esObjMgr = esObjMgr;
      esObjMgrRef.value = esObjMgr;

      const viewer = esObjMgr.createCesiumViewer({
        domid: domRef.value,
      });

      const tdtImageryLayer = esObjMgr.createSceneObjectFromJson({
        id: nanoid(),
        type: "ESImageryLayer",
        name: "天地图影像",
        url: "https://t3.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=01045099f27b57f849495a8ea7c3a71d",
        allowPicking: true,
        maximumLevel: 15,
        zIndex: 3,
      });

      const tdtImageryCvaLayer = esObjMgr.createSceneObjectFromJson({
        id: nanoid(),
        type: "ESImageryLayer",
        name: "天地图影像",
        url: "https://t3.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=01045099f27b57f849495a8ea7c3a71d",
        allowPicking: true,
        maximumLevel: 15,
        zIndex: 3,
      });
    }
  });

  return {
    esObjMgrRef,
  };
};

export { useView };
