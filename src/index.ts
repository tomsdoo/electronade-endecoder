export { handles } from "./handles";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ipcRenderer } = require("electron");

export const preloadObject = {
  endecoder: {
    encode: async ({
      plainText,
      password,
      salt,
    }: {
      plainText: string;
      password: string;
      salt: string;
    }) =>
      await ipcRenderer.invoke("electronade-endecoder:encode", {
        plainText,
        password,
        salt,
      }),
    decode: async ({
      encodedText,
      password,
      salt,
    }: {
      encodedText: string;
      password: string;
      salt: string;
    }) =>
      await ipcRenderer.invoke("electronade-endecoder:decode", {
        encodedText,
        password,
        salt,
      }),
    encrypt: async ({
      plainBuffer,
      password,
      salt,
    }: {
      plainBuffer: Buffer;
      password: string;
      salt: string;
    }) =>
      await ipcRenderer.invoke("electronade-endecoder:encrypt", {
        plainBuffer,
        password,
        salt,
      }),
    decrypt: async ({
      encodedText,
      password,
      salt,
    }: {
      encodedText: string;
      password: string;
      salt: string;
    }) =>
      await ipcRenderer.invoke("electronade-endecoder:decrypt", {
        encodedText,
        password,
        salt,
      }),
  },
};
