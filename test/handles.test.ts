import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles } from "../src/handles";

let plainText: string;
let password: string;
let salt: string;
let handleStore: {
  [key: string]: Function;
};

describe("handles", () => {
  before(() => {
    plainText = "this is the plain text!123";
    password = "p@ssword!!";
    salt = "salt//";
    handleStore = Object.fromEntries(
      handles.map(({ eventName, handler }) => [ eventName, handler ])
    );
  });

  it("electronade-endecoder:encode eventName exists", () => {
    assert(
      "electronade-endecoder:encode" in handleStore
    );
  });

  it("electronade-endecoder:decode eventName exists", () => {
    assert(
      "electronade-endecoder:decode" in handleStore
    );
  });

  it("electronade-endecoder:encode and electronade-endecoder:decode handlers", () => {
    const encodedText = handleStore["electronade-endecoder:encode"]
      ({}, { plainText, password, salt });

    assert.equal(
      handleStore["electronade-endecoder:decode"]
        ({}, { encodedText, password, salt }),
      plainText
    )
  });

});
