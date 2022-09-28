import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { randomBytes } from "crypto";
import { preloadObject } from "../src/";
import { mock } from "sinon";

const ipcRenderer: {
  invoke: (eventName: string, ...args: any[]) => Promise<any>;
} = {
  invoke: async (eventName: string, ...args: any[]) => await Promise.resolve(undefined),
};

let mockedValue: string;
let plainText: string;
let encodedText: string;
let password: string;
let salt: string;
let plainBuffer: Buffer;

describe("preloadObject", () => {
  before(() => {
    mockedValue = "mocked value";
    plainText = "this is test text!!";
    encodedText = "this is a test";
    plainBuffer = randomBytes(256);
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
      .withArgs("electronade-endecoder:encode", { plainText, password, salt })
      .returns(Promise.resolve(mockedValue));

    assert.equal(
      mockedValue,
      // eslint-disable-next-line no-eval
      await eval(preloadObject.endecoder.encode.toString())({
        plainText,
        password,
        salt,
      })
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
      .withArgs("electronade-endecoder:decode", { encodedText, password, salt })
      .returns(Promise.resolve(mockedValue));

    assert.equal(
      mockedValue,
      // eslint-disable-next-line no-eval
      await eval(preloadObject.endecoder.decode.toString())({
        encodedText,
        password,
        salt,
      })
    );
    mocked.verify();
    mocked.restore();
  });

  it("preloadObject.endecoder.encrypt exists", () => {
    assert(preloadObject.endecoder.encrypt);
  });

  it("preloadObject.endecoder.encrypt calling", async () => {
    const mocked = mock(ipcRenderer);
    mocked
      .expects("invoke")
      .once()
      .withArgs("electronade-endecoder:encrypt", {
        plainBuffer,
        password,
        salt,
      })
      .returns(Promise.resolve(mockedValue));

    assert.equal(
      // eslint-disable-next-line no-eval
      await eval(preloadObject.endecoder.encrypt.toString())({
        plainBuffer,
        password,
        salt,
      }),
      mockedValue
    );

    mocked.verify();
    mocked.restore();
  });

  it("preloadObject.endecoder.decrypt exits", () => {
    assert(preloadObject.endecoder.decrypt);
  });

  it("preloadObject.endecoder.decrypt calling", async () => {
    const mocked = mock(ipcRenderer);
    const mockedValue2 = randomBytes(256);
    mocked
      .expects("invoke")
      .once()
      .withArgs("electronade-endecoder:decrypt", {
        encodedText,
        password,
        salt,
      })
      .returns(Promise.resolve(mockedValue2));

    assert.equal(
      // eslint-disable-next-line no-eval
      await eval(preloadObject.endecoder.decrypt.toString())({
        encodedText,
        password,
        salt,
      }),
      mockedValue2
    );

    mocked.verify();
    mocked.restore();
  });
});
