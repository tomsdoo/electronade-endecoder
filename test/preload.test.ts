import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { preloadObject } from "../src/";
import { mock } from "sinon";

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: (eventName: string, ...args: any[]) => Promise.resolve(undefined)
};

let mockedValue: string;
let plainText: string;
let encodedText: string;
let password: string;
let salt: string;

describe("preloadObject", () => {
  before(() => {
    mockedValue = "mocked value";
    plainText = "this is test text!!";
    encodedText = "this is a test";
    password = "password?/";
    salt = "salt;:";
  });

  it("preloadObject.endecoder exists", () => {
    assert(preloadObject.endecoder);
  });

  it("preloadObject.endecoder.encode exists", () => {
    assert(preloadObject.endecoder.encode);
  });

  it("preloadObject.endecoder.encode calling", async () => {
    const mocked = mock(ipcRenderer);
    mocked
      .expects("invoke")
      .once()
      .withArgs(
        "electronade-endecoder:encode",
        { plainText, password, salt }
      )
      .returns(Promise.resolve(mockedValue));

    assert.equal(
      mockedValue,
      await eval(preloadObject.endecoder.encode.toString())({ plainText, password, salt })
    );
    mocked.verify();
    mocked.restore();
  });

  it("preloadObject.endecoder.decode exists", () => {
    assert(preloadObject.endecoder.decode);
  });

  it("preloadObject.endecoder.decode calling", async () => {
    const mocked = mock(ipcRenderer);
    mocked
      .expects("invoke")
      .once()
      .withArgs(
        "electronade-endecoder:decode",
        { encodedText, password, salt }
      )
      .returns(Promise.resolve(mockedValue));

    assert.equal(
      mockedValue,
      await eval(preloadObject.endecoder.decode.toString())({ encodedText, password, salt })
    );
    mocked.verify();
    mocked.restore();
  });
});
