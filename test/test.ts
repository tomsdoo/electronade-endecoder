import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { handles } from "../src/handles";

describe("handles", () => {
  it("electronade-endecoder:encode eventName exists", () => {
    assert(
      handles.find(
        ({ eventName }) =>
          eventName === "electronade-endecoder:encode"
      )
    );
  });

  it("electronade-endecoder:decode eventName exists", () => {
    assert(
      handles.find(
        ({ eventName }) =>
          eventName === "electronade-endecoder:decode"
      )
    );
  });

  it("electronade-endecoder:encode and electronade-endecoder:decode handlers", () => {
    const [
      plainText,
      password,
      salt
    ] = [
      "this is the plain text!123",
      "p@ssword!!",
      "salt//"
    ];

    const encodedText = (handles.find(
      ({ eventName }) =>
        eventName === "electronade-endecoder:encode"
    ) as { handler: Function })
      .handler({}, { plainText, password, salt });

    assert.equal(
      (handles.find(
        ({ eventName }) =>
          eventName === "electronade-endecoder:decode"
      ) as { handler: Function })
        .handler({}, { encodedText, password, salt }),
      plainText
    )
  });

});
