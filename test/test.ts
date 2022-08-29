import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles, preloadObject } from "../src/";

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
    handleStore = Object.fromEntries(
      handles.map(({ eventName, handler }) => [ eventName, handler ])
    );
  });

  it("electronade-endecoder:encode", async () => {
    const myEventName =await eval(preloadObject.endecoder.encode.toString())({
      plainText: "test",
      password: "password",
      salt: "salt"
    });

    assert(myEventName in handleStore);
  });

  it("electronade-endecoder:decode", async () => {
    const myEventName = await eval(preloadObject.endecoder.decode.toString())({
      encodedText: "test",
      password: "password",
      salt: "salt"
    });

    assert(myEventName in handleStore);
  });
});
