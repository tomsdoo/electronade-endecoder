export { handles } from "./handles";
const { ipcRenderer } = require("electron");

export const preloadObject = {
  endecoder: {
    encode: () => ipcRenderer.invoke("electronade-endecoder:encode"),
    decode: () => ipcRenderer.invoke("electronade-endecoder:decode")
  }
};
