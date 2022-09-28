import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { randomBytes } from "crypto";

import { handles } from "../src/handles";

let plainText: string;
let password: string;
let plainBuffer: Buffer;
let salt: string;
let handleStore: {
  [key: string]: Function;
};

describe("handles", () => {
  before(() => {
    plainText = "this is the plain text!123";
    password = "p@ssword!!";
    plainBuffer = randomBytes(1024);
    salt = "salt//";
    handleStore = Object.fromEntries(
      handles.map(({ eventName, handler }) => [eventName, handler])
    );
  });

  it("electronade-endecoder:encode eventName exists", () => {
    assert("electronade-endecoder:encode" in handleStore);
  });

  it("electronade-endecoder:decode eventName exists", () => {
    assert("electronade-endecoder:decode" in handleStore);
  });

  it("electronade-endecoder:encode and electronade-endecoder:decode handlers", () => {
    const encodedText = handleStore["electronade-endecoder:encode"](
      {},
      { plainText, password, salt }
    );

    assert.equal(
      handleStore["electronade-endecoder:decode"](
        {},
        { encodedText, password, salt }
      ),
      plainText
    );
  });

  it("electronade-endecoder:encrypt eventName exists", () => {
    assert("electronade-endecoder:encrypt" in handleStore);
  });

  it("electronade-endecoder:decrypt eventName exists", () => {
    assert("electronade-endecoder:decrypt" in handleStore);
  });

  it("electrolade-endecoder:encrypt and decrypt handlers", async () => {
    const [password, salt] = [
      randomBytes(36).toString("base64"),
      randomBytes(12).toString("base64"),
    ];
    const encodedText = await handleStore["electronade-endecoder:encrypt"](
      {},
      {
        plainBuffer,
        password,
        salt,
      }
    );
    assert.equal(
      await handleStore["electronade-endecoder:decrypt"](
        {},
        {
          encodedText,
          password,
          salt,
        }
      ).then((buffer: Buffer) => buffer.toString("base64")),
      plainBuffer.toString("base64")
    );
  });
});
