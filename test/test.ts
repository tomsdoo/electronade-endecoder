import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { randomBytes } from "crypto";

import { handles, preloadObject } from "../src/";

let plainText: string;
let encodedText: string;
let plainBuffer: Buffer;
let password: string;
let salt: string;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: async (eventName: string) => await Promise.resolve(eventName),
};

let handleStore: {
  [key: string]: Function;
};

describe("preloadObject to handles", () => {
  before(() => {
    plainText = "test";
    encodedText = "test encoded";
    plainBuffer = randomBytes(256);
    password = "password";
    salt = "salt";

    handleStore = Object.fromEntries(
      handles.map(({ eventName, handler }) => [eventName, handler])
    );
  });

  it("electronade-endecoder:encode", async () => {
    // eslint-disable-next-line no-eval
    const myEventName = await eval(preloadObject.endecoder.encode.toString())({
      plainText,
      password,
      salt,
    });

    assert(myEventName in handleStore);
  });

  it("electronade-endecoder:decode", async () => {
    // eslint-disable-next-line no-eval
    const myEventName = await eval(preloadObject.endecoder.decode.toString())({
      encodedText,
      password,
      salt,
    });

    assert(myEventName in handleStore);
  });

  it("electronade-endecoder:encrypt", async () => {
    // eslint-disable-next-line no-eval
    const myEventName = await eval(preloadObject.endecoder.encrypt.toString())({
      plainBuffer,
      password,
      salt,
    });

    assert(myEventName in handleStore);
  });

  it("electronade-endecoder:decrypt", async () => {
    // eslint-disable-next-line no-eval
    const myEventName = await eval(preloadObject.endecoder.decrypt.toString())({
      encodedText,
      password,
      salt,
    });

    assert(myEventName in handleStore);
  });
});
