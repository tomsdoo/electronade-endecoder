import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles, preloadObject } from "../src/";

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: (eventName: string) => Promise.resolve(eventName)
};

describe("preloadObject to handles", () => {
  it("electronade-endecoder:encode", async () => {
    const myEventName =await eval(preloadObject.endecoder.encode.toString())({
      plainText: "test",
      password: "password",
      salt: "salt"
    });

    assert(
      handles.find(
        ({ eventName }) => myEventName === eventName
      )
    );
  });

  it("electronade-endecoder:decode", async () => {
    const myEventName = await eval(preloadObject.endecoder.decode.toString())({
      encodedText: "test",
      password: "password",
      salt: "salt"
    });

    assert(
      handles.find(
        ({ eventName }) => myEventName === eventName
      )
    );
  });
});
