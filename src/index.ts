export { handles } from "./handles";
const { ipcRenderer } = require("electron");

export const preloadObject = {
  endecoder: {
    encode: ({
      plainText,
      password,
      salt
    }: {
      plainText: string;
      password: string;
      salt: string;
    }) => ipcRenderer.invoke(
      "electronade-endecoder:encode",
      { plainText, password, salt }
    ),
    decode: ({
      encodedText,
      password,
      salt
    }: {
      encodedText: string;
      password: string;
      salt: string;
    }) => ipcRenderer.invoke(
      "electronade-endecoder:decode",
      { encodedText, password, salt }
    ),
    encrypt: ({
      plainBuffer,
      password,
      salt
    }: {
      plainBuffer: Buffer;
      password: string;
      salt: string;
    }) => ipcRenderer.invoke(
      "electronade-endecoder:encrypt",
      { plainBuffer, password, salt }
    )
  }
};
