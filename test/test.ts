import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles, preloadObject } from "../src/";

let plainText: string;
let encodedText: string;
let password: string;
let salt: string;

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: (eventName: string) => Promise.resolve(eventName)
};

let handleStore: {
  [key: string]: Function;
};

describe("preloadObject to handles", () => {
  before(() => {
    plainText = "test";
    encodedText = "test encoded";
    password = "password";
    salt = "salt";

    handleStore = Object.fromEntries(
      handles.map(({ eventName, handler }) => [ eventName, handler ])
    );
  });

  it("electronade-endecoder:encode", async () => {
    const myEventName =await eval(preloadObject.endecoder.encode.toString())
      ({ plainText, password, salt });

    assert(myEventName in handleStore);
  });

  it("electronade-endecoder:decode", async () => {
    const myEventName = await eval(preloadObject.endecoder.decode.toString())
      ({ encodedText, password, salt });

    assert(myEventName in handleStore);
  });
});
